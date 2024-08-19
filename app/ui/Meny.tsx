import { Bars3Icon } from "@heroicons/react/24/solid";

export const Menu = () => {
  return (
    <>
      <button className="rounded-full  bg-slate-900 w-12 h-12 flex justify-center items-center hover:bg-slate-800 hover:font-bold">
        <Bars3Icon className="w-8 h-8 text-slate-100"></Bars3Icon>
      </button>
    </>
  );
};
