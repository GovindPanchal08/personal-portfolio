"use client"
import React, { useEffect, useRef } from "react";
// import { FaGithub } from "react-icons/fa";
// import { FaFacebookF } from "react-icons/fa";
// import { FaLinkedinIn } from "react-icons/fa6";
// import { PiInstagramLogoFill } from "react-icons/pi";
// import { FaPlay } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
const Hero = () => {
  useGSAP(() => {
    var tl = gsap.timeline();
    tl.fromTo(
      ".left",
      { opacity: 0, y: -40 },
      { opacity: 1, y: 40, delay: 0.5, duration: 2 }
    );
  });
  const handleHover = (e) => {
    gsap.to(e.target, { scale: 1, opacity: 0.8, duration: 0.3 });
  };
  const handleHoverOut = (e) => {
    gsap.to(e.target, { scale: 1.1, opacity: 1, duration: 0.3 });
  };
  return (
    <>
      <div className="main flex items-center ">
        <div className="left flex  flex-col justify-center  md:w-[50%]">
          <h1 className=" h11 font-bold md:text-4xl md:ml-24 ml-[20px]  text-3xl   ">
            Hello, I'm Hiren Panchal
          </h1>
          <span className=" web text-yellow-600 text-2xl md:text-3xl font-semibold ml-[20px] md:ml-24  my-1 md:my-2">
            Frontend Web Developer!
          </span>
          {/* <p className=" pp md:ml-24 ml-[20px] font-serif ">
   s         Hii , Im Frontend Developer..
          </p> */}
          {/* <i className="icon flex flex-row space-x-3  ml-5 md:ml-24 mt-3 md:mt-5 text-2xl  overflow-hidden ">
            <FaGithub className="cursor-pointer hover:bg-violet-400 hover:rounded-full hover:text-3xl " />
            <FaFacebookF className="cursor-pointer  md:hover:text-3xl  " />
            <FaLinkedinIn className="cursor-pointer hover:text-3xl " />
             <PiInstagramLogoFill  className="cursor-pointer hover:text-3xl " />
          </i> */}
        </div>
        <div className="right  top-5  flex items-center justify-center ">
          <div
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
            className="relative w-fit flex items-center "
          >
            <img
              data-aos="fade-up"
              className="image h-[90%]  w-screen object-cover "
              src="https://i.postimg.cc/pTn61Gr1/Untitled-design222-modified.png"
              // src={mine}
              alt="mine"
            />
            <div className="  absolute bottom-10 md:bottom-3 right-8 md:right-4">
              <div
                data-aos="zoom-in"
                data-aos-duration="1000"
                className=" relative mr-28 cursor-pointer"
              >
                <img
                  className=" w-[135px] md:w-[90px] hidden md:block circle-text"
                  src="https://ik.imagekit.io/imgkitt/tr:w-400/Full_Stack_Developer2.png?updatedAt=1683134009107"
                  alt=""
                />
                {/* <FaPlay className=" text-black absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]" /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
