import React from "react";

const Resume = () => {
  return (
    <div className=" resume1  h-[100vh] w-full mt-12">
      <div className=" relative  md:ml-24  ml-8">
        <h1 className="text-2xl  font-black text-gray-400">Resume</h1>
        <span className=" absolute h-[1.1px]  w-[85vw] bg-gray-300 "></span>
        <p className="mt-5 font-medium text-gray-600">
          Here is my Experience and Qaulifications.
        </p>
      </div>
      <div className="resume2 mt-5 gap-5 flex md:flex-row flex-col items-center justify-evenly  ">
        <div className="res relative flex flex-col items-center ">
          <button className="border-yellow-300 w-52 border-2  p-2 text-xl text-white rounded-full">
            Qaulification
          </button>
          <div className="box  space-y-2 flex flex-col md:h-[40vh] md:w-[30vw]  h-[60vh] w-[65vw] mt-10 bg-white/[0.3] border-2 border-yellow-400 overflow-y-clip rounded-xl">
            <p className="text-2xl  font-semibold m-2 text-white/60 ">
              Bca, Computer Application.
            </p>

            <p className="text-white text-lg m-2 mt ">
              Hii, im pursuing my bca from Vikas clg ,currently i completed my
              second year exams{" "}
            </p>
            <p className="text-lg text-white/70 m-2"></p>
            <p className="m-2  text-white/25"></p>
          </div>
        </div>
        <div className="res flex flex-col items-center ">
          <button className="border-yellow-300  border-2 p-2 w-52 text-xl text-white rounded-full">
            Experience
          </button>

          <div className="box   space-y-2 flex flex-col md:h-[40vh] md:w-[30vw]  h-[60vh] w-[65vw] mt-10 bg-white/[0.3] border-2 overflow-y-clip border-yellow-400 rounded-xl">
            <p className="text-2xl  font-semibold m-2 text-white/60 ">
              Web Developer..
            </p>

            <p className="text-white text-lg m-2">Fresher.</p>
            <p className="text-lg text-white/70 m-2">
              I have work on samll mini projects in vanilla js , layouting with
              html/css and i quite familiar with React.js ..
            </p>
            <p className="m-2  text-white/25"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
