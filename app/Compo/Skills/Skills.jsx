import React, { useEffect } from "react";
import Aos from "aos";
const Skills = ({ darkMode }) => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration:1000,
      delay:0.5
    });
  }, []);
  return (
    <div className="skill h-[80vh]  md:h-full bg-zinc-900 overflow-x-hidden overflow-hidden container mx-auto px-4">
      {/* Heading */}
      <div className="mt-14 flex gap-1 md:ml-24 ml-4  items-center">
        <span className="h-[1.5px] bg-white w-[15px]"></span>
        <h3 className="text-5xl font-serif tracking-tight text-gray-100 sm:text-[45px] lg:text-[65px]">
          Tech Stack
        </h3>
      </div>

      {/* Content */}
      <div  data-aos="fade-up" className="flex flex-col md:items-start  md:mt-16 mt-10  mb-5 md:ml-24 ml-4 ">
        <h1 className="text-2xl  sm:text-2xl md:text-4xl tracking-tight border-t-[0.2px] border-b-[0.2px] text-white border-white w-fit px-4 py-1 rounded-md text-center font-medium mb-5">
          Development
        </h1>
        <div className="flex flex-col  gap-5 items-center  md:items-start mt-5 h-auto w-full md:h-[60vh]">
          <div className="frontend bg-zinc-300 p-4 sm:p-7 md:p-10 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-7 rounded-2xl w-full md:w-auto">
            <p className="flex justify-center items-center">
              <img
                className="w-[13vw] sm:w-[15vw] md:w-[6vw] lg:w-[4vw]"
                src="images/html.png"
                alt="HTML"
              />
            </p>
            <p className="flex justify-center items-center">
              <img
                className="w-[13vw] sm:w-[15vw] md:w-[6vw] lg:w-[4vw]"
                src="images/css-3.png"
                alt="CSS"
              />
            </p>
            <p className="flex justify-center items-center">
              <img
                className="w-[13vw] sm:w-[15vw] md:w-[6vw] lg:w-[4vw]"
                src="images/js.png"
                alt="JavaScript"
              />
            </p>
            <p className="flex justify-center items-center">
              <img
                className="w-[13vw] sm:w-[15vw] md:w-[6vw] lg:w-[4vw]"
                src="images/science.png"
                alt="Science"
              />
            </p>
            <p className="flex justify-center items-center">
              <img
                className="w-[13vw] sm:w-[15vw] md:w-[6vw] lg:w-[4vw]"
                src="images/icons8-tailwind-css-48.png"
                alt="Tailwind CSS"
              />
            </p>
          </div>

          <div className="frontend bg-zinc-300 p-5 sm:p-7 md:p-10 flex gap-5 md:gap-7 rounded-2xl w-full md:w-auto">
            <p className="flex items-center">
              <img
                className="w-[15vw] sm:w-[15vw] md:w-[6vw] lg:w-[4vw]"
                src="images/nodejs.png"
                alt="Node.js"
              />
            </p>
            <p className="flex items-center">
              <img
                className="w-[15vw] sm:w-[15vw] md:w-[6vw] lg:w-[4vw]"
                src="images/mongodb-original-wordmark.1008x1024.png"
                alt="MongoDB"
              />
            </p>
            <p className="flex items-center">
              <img
                className="w-[15vw] sm:w-[15vw] md:w-[6vw] lg:w-[4vw]"
                src="images\github.png"
                alt="GitHub"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
