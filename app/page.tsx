"use client";
import Image from "next/image";
import { useContext } from "react";
import { ThemeContext } from "./lib/ThemeContext";
import { londrina } from "./ui/fonts";
import { BusinessPrimaryButton, PartyPrimaryButton } from "./ui/Buttons";
import jennyBusiness from "../public/jenny_waller_connect_desktop.webp";
import jennyParty from "../public/jenny_waller_desktop.webp";

export default function Home() {
  const { isPartyTheme } = useContext(ThemeContext);

  const handleButtonClick = () => {
    window.open("https://github.com/jenmwa", "_blank");
  };
  return (
    <div
      className={`flex flex-1 h-full flex-col pt-8 pb-8 px-12 lg:px-24 md:overflow-y-auto ${
        isPartyTheme ? "business" : "party"
      }`}
    >
      {isPartyTheme ? (
        <h1 className="">Business in the front</h1>
      ) : (
        <h1 className={`${londrina.className} text-6xl `}>
          PARTY in the back! 🎉
        </h1>
      )}
      <div className="flex-1 p-8 w-full gap-4 bg-white rounded-sm flex flex-col justify-between lg:flex-row ">
        <div className="grid grid-cols-1 md:grid-cols-2  gap-4 h-80 lg:h-[29rem] sm:flex-1">
          <div className="border overflow-hidden">
            <Image
              src={isPartyTheme ? jennyBusiness : jennyParty}
              alt={
                isPartyTheme ? "Jenny Waller partying" : "Jenny Waller serious"
              }
              width={200}
              height={200}
              className={`object-contain w-full h-full object-right-bottom ${
                isPartyTheme ? "bg-slate-300" : "bg-rose-100"
              }`}
            />
          </div>
          <div className="border overflow-hidden md:block hidden">
            <Image
              src={isPartyTheme ? jennyBusiness : jennyParty}
              alt={
                isPartyTheme ? "Jenny Waller partying" : "Jenny Waller serious"
              }
              width={200}
              height={200}
              className={`object-contain w-full h-full object-right-bottom ${
                isPartyTheme ? "bg-slate-300" : "bg-rose-100"
              }`}
            />
          </div>
        </div>

        <div className=" gap-4 grid content-between lg:w-1/3 lg:ml-4">
          <div className="h-auto w-full">
            <span className="text-xl font-bold">Next.js</span>{" "}
            <span className="text-xl font-bold">TypeScript </span> och
            <span className="text-xl font-bold">Tailwind</span> playground med
            kaka, tema-context samt lite villkorstyrd rendering. <br /> Enjoy!
          </div>
          <div className="md:flex md:justify-end">
            {isPartyTheme ? (
              <BusinessPrimaryButton
                handleButtonClick={handleButtonClick}
                value={"GÅ TILL GITHUB"}
              />
            ) : (
              <PartyPrimaryButton
                handleButtonClick={handleButtonClick}
                value={"GÅ TILL GITHUB"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
