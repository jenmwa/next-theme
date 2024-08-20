"use client";

import {
  BriefcaseIcon,
  MoonIcon,
  SparklesIcon,
  SunIcon,
} from "@heroicons/react/16/solid";
import { useContext } from "react";
import { ThemeContext } from "../lib/ThemeContext";

export const ThemeSwitch = () => {
  const { isPartyTheme, toggleTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center">
      <button
        onClick={toggleTheme}
        className={`relative w-24 h-12 flex items-center rounded-full p-1 transition-colors ${
          isPartyTheme ? "bg-rose-300" : "bg-neutral-300"
        }`}
        aria-label="Toggle theme"
      >
        <span className="absolute left-1 w-8 h-8">
          <SparklesIcon className="w-full h-full text-blue-600" />
        </span>

        <span className="absolute right-1 w-8 h-8">
          <BriefcaseIcon className="w-full h-full text-neutral-900 " />
        </span>
        <div
          className={`w-8 h-8 rounded-full shadow-md transform transition-transform ${
            isPartyTheme ? "translate-x-14 bg-indigo-700" : "bg-neutral-900"
          }`}
        ></div>
      </button>
    </div>
  );
};
