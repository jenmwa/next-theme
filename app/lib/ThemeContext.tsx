import { createContext } from "react";

interface ThemeContextProps {
  isPartyTheme: boolean;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  isPartyTheme: false,
  toggleTheme: () => {},
});
