import { ArrowRightIcon } from "@heroicons/react/24/outline";

// const value = "GÅ TILL GITHUB";

interface IPrimaryButtonprops {
  handleButtonClick: () => void;
  value: string;
}

export const BusinessPrimaryButton = ({
  handleButtonClick,
  value,
}: IPrimaryButtonprops) => {
  return (
    <>
      <button
        onClick={handleButtonClick}
        className=" inline-flex items-center justify-center gap-4 w-[248px] h-[56px] no-underline rounded-md bg-[rgba(56,104,194,0.3)] border border-[rgba(255,255,255,0)] backdrop-blur-[30px] text-[rgba(27,27,27,0.8)] text-sm tracking-[2px] cursor-pointer uppercase hover:bg-[rgba(56,104,194,0.4)] hover:font-bold group"
      >
        {value}
        <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-2"></ArrowRightIcon>
      </button>
    </>
  );
};

export const PartyPrimaryButton = ({
  handleButtonClick,
  value,
}: IPrimaryButtonprops) => {
  return (
    <>
      <button
        onClick={handleButtonClick}
        className="inline-flex gap-4 items-center bg-yellow-200 w-[248px] h-[56px] pl-8 shadow-custom-black hover:font-bold group"
      >
        {value}
        <ArrowRightIcon className="w-4 h-4 transition-transform duration-300 transform group-hover:translate-x-2"></ArrowRightIcon>
      </button>
    </>
  );
};
