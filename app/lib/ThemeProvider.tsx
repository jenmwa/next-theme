"use client";
import { ReactNode, useEffect, useState } from "react";
import { ThemeContext } from "./ThemeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isPartyTheme, setIsPartyTheme] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    if (typeof document !== "undefined") {
      const storedTheme = document.cookie
        .split("; ")
        .find((row) => row.startsWith("theme="));
      const theme = storedTheme ? storedTheme.split("=")[1] : "business";

      // Set the theme based on the cookie value
      if (theme === "party") {
        setIsPartyTheme(true);
        document.documentElement.classList.add("party");
      } else {
        setIsPartyTheme(false);
        document.documentElement.classList.remove("party");
      }
      setIsInitialized(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialized) {
      if (isPartyTheme) {
        // When the party theme is true, set the cookie and class accordingly
        document.documentElement.classList.add("party");
        document.cookie = `theme=party; path=/; max-age=${
          365 * 24 * 60 * 60
        }; SameSite=Lax`;
      } else {
        // When the party theme is false, revert to the business theme
        document.documentElement.classList.remove("party");
        document.cookie = `theme=business; path=/; max-age=${
          365 * 24 * 60 * 60
        }; SameSite=Lax`;
      }
    }
  }, [isPartyTheme, isInitialized]);

  const toggleTheme = () => {
    setIsPartyTheme((prev) => !prev);
  };

  if (!isInitialized) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ isPartyTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
