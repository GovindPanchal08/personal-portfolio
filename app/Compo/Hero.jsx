import React, { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Hero = () => {
  const [showModal, setShowModal] = useState(false);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.fromTo(
      ".left",
      { opacity: 0, y: -50 },
      { opacity: 1, y: 0, delay: 1, duration: 2 }
    );
  });

  return (
    <>
      <div className="main flex  md:mb-0 flex-col md:flex-row items-center md:justify-start">
        <div className="left flex flex-col justify-center mt-7 md:w-[50%]  md:text-left p-2">
          <h1 className="text-gray-300 font-mono tracking-wide md:tracking-tight md:text-5xl text-3xl  md:ml-24 ml-4">
            Hello, I&apos;m Hiren Panchal
          </h1>
          <span className="web text-orange-300 tracking-wide md:text-5xl text-3xl font-medium md:ml-24 ml-4 my-2">
            Web Developer!
          </span>
          <div
            className="resume1 mt-1 md:ml-24 ml-4 w-36 mb-14 md:mb-0 md:w-40 text-2xl md:text-3xl border-2 text-center border-zinc-700/45 p-2 rounded-md cursor-pointer shadow-md shadow-zinc-600/85"
            onMouseEnter={() => setShowModal(true)}
            onMouseLeave={() => setTimeout(() => setShowModal(false), 2000)}
          >
            About Me
          </div>
        </div>
        <div className="right flex justify-center md:ml-24 mt-4 md:mt-0">
          <img
            data-aos="fade-in" 
            className="image w-[60vw] md:w-[33vw] max-w-xs md:max-w-md object-cover"
            src="https://i.postimg.cc/pTn61Gr1/Untitled-design222-modified.png"
            alt="mine"
          />
        </div>
      </div>

      {/* Modal Component */}
      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50 px-4">
          <div
            className="bg-white rounded-lg p-4 md:p-6 max-w-xs md:max-w-md w-full text-center shadow-lg relative"
            onMouseEnter={() => setShowModal(true)}
            onMouseLeave={() => setShowModal(false)}
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-2">About Me</h2>
            <p className="text-gray-700 font-medium text-sm md:text-base">
              I'm a final-year BCA student with intermediate frontend skills and
              foundational backend knowledge. I've completed 2-4 practice projects
              focused on responsive interfaces with HTML, CSS, JavaScript, React, and
              basic server setup using Node.js and Express. I'm eager to gain real-world
              experience and take on new challenges.
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
