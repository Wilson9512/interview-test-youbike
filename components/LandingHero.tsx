import Image from "next/image";

import { frame } from "../public/assets";
import SelectSearch from "./SelectSearch";
import InputSearch from "./InputSearch";
import CheckSearch from "./CheckSearch";

export const LandingHero = () => {
  return (<>
    <h1 className="text-[#B5CC22] text-2xl font-bold py-2 px-4">站點資訊</h1>
    <div className="flex lg:flex-row w-1/3 p-4 h-auto">
      <div className="flex-grow lg:flex lg:align-items-center lg:space-x-4">
        <div className="flex-grow w-full lg:w-1/3">
          <SelectSearch />
        </div>
        <div className="flex-grow relative w-full lg:w-1/3">
          <InputSearch />
        </div>
      </div>
    </div>
    <div className="flex">
      <div className="flex-grow lg:mt-[desired_value] px-4">
        <CheckSearch />
      </div>

      <div className="flex-grow lg:flex lg:justify-end lg:w-1/3 hidden">
        <Image
          src={frame}
          alt="frame"
          className="md:w-3/4 lg:w-3/4 h-auto object-fit my-auto mx-auto"
        />
      </div>
    </div>
  </>);
};
