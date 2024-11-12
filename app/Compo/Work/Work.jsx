import React from "react";
import Workcard from "@/app/Chip/Workcard";

const Work = () => {
  return (
    <div className="WWW mt-10 px-4 mb-10">
      <div className="relative mb-5 md:ml-24  ml-4 flex gap-1">
        <span className=" h-[1.5px] text-white bg-white w-[15px] flex mt-5"></span>
        <h3 className="mb-2 text-5xl font-serif tracking-tight text-gray-100 sm:text-[65px]">
          Work Showcase
        </h3>
      </div>

      <div className="flex flex-wrap justify-center">
        <Workcard />
      </div>
    </div>
  );
};

export default Work;
