"use client";
import { useContext } from "react";
import { ThemeSwitch } from "./ThemeSwitch";
import { ThemeContext } from "../lib/ThemeContext";
import { inter, londrina } from "./fonts";

export const Header = () => {
  const { isPartyTheme } = useContext(ThemeContext);
  return (
    <>
      <header
        className={`h-24 px-8 md:flex-none ${
          !isPartyTheme ? "bg-yellow-200" : "bg-slate-400"
        } flex justify-between items-center`}
      >
        <span
          className={` ${
            !isPartyTheme ? londrina.className : inter.className
          } text-2xl`}
        >
          JenWaller.se
        </span>

        <ThemeSwitch></ThemeSwitch>
      </header>
    </>
  );
};
