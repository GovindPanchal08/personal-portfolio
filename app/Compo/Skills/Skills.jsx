import React from "react";

import ProgressBar from "../../chip/ProgressBar";
import { IoLogoHtml5, IoLogoCss3 } from "react-icons/io";
import {
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

const Skills = ({ darkMode }) => {
  return (
      <div className=" skill -z-10 overflow-x-hidden overflow-hidden container m-auto  mt-16">
        {/* heading */}
        <div data-aos="fade-up" className="relative mb-5 ">
          <h3 className=" my md:ml-24 ml-8 text-3xl font-black text-gray-400 sm:text-2xl">
            My Skills
          </h3>
          <span className="h-[1.1px] ml-8 md:ml-24 absolute w-[80vw] bg-gray-300 block"></span>
        </div>
        {/* content*/}
        <div className="flex ">
          <div className=" flex-1 w-full">
            <p
              data-aos="fade-up"
              className=" ml-8 md:ml-24 top-5 text-gray-700 font-medium w-[100%]"
            >
              What I Know.
            </p>
            {/* left box */}
            <div
              data-aos="zoom-in"
              className="skillss  ml-0 md:ml-0 progress flex items-center h-[100%] w-[100%]  justify-center"
            >
              <div className=" text-white flex flex-col gap-6    my-5 w-[80vw] md:w-[65%]">
                <ProgressBar logo={<IoLogoHtml5 />} name={"HTML"} value={95} />
                <ProgressBar logo={<IoLogoCss3 />} name={"CSS"} value={75} />
                <ProgressBar
                  logo={<SiJavascript />}
                  name={"Javascript"}
                  value={70}
                />
                <ProgressBar logo={<FaReact />} name={"React Js"} value={70} />
                <ProgressBar
                  logo={<SiTailwindcss />}
                  name={"Tailwind CSS"}
                  value={50}
                />
              </div>
            </div>
          </div>
      </div>
    </div>
    
   


   
  );
};

export default Skills;