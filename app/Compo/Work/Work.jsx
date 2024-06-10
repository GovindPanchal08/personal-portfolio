import React from "react";
import Workcard from "@/app/Chip/Workcard";

const Work = () => {
  return (
    <div className="WWW mt-10 ">
        <div data-aos="fade-up" className="relative mb-5 ">
          <h3 className=" my md:ml-24 ml-8 text-3xl font-black text-gray-400 sm:text-2xl">
            Works
          </h3>
          <span className="h-[1.1px] ml-8 md:ml-24 absolute w-[85vw] bg-gray-300 block"></span>
        </div>
        <p
          data-aos="fade-up"
          className="  mt-5 ml-8 md:ml-24 text-gray-700 font-medium"
        >
          What I Work.
        </p>
           <div className="flex flex-wrap ">
               <Workcard/>
           </div>
      </div>
  
  );
};

export default Work;
