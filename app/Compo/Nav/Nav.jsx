import React, { useState, useEffect } from "react";
import { FaCode } from "react-icons/fa";
//import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { HiMiniChevronRight } from "react-icons/hi2";
import { Link } from "react-scroll";
function Nav() {
  const [isopen, setopnen] = useState(true);
  const handel = (name) => {
    setopnen(!isopen);
  };
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className="nav  mt-3  flex  items-center justify-between   text-white
        "
      >
        <Link
          onClick={() => window.scrollTo(0, 0)}
          href="/"
          className=" flex italic font-extralight font-serif  flex-row  -tracking-wider rounded-lg gap-2  items-center text-[35px]   md:ml-24 ml-[20px]  hover:text-slate-400 hover:border-b-[0.4px]"
        >
          Hiren
        </Link>

        <div className=" hidden  md:flex text-2xl font-medium tracking-tight items-center gap-8 mr-24 p-4">
          <Link
            onClick={() => window.scrollTo(0, 0)}
            activeClass="active"
            smooth={true}
            spy={true}
            duration={1000}
            className="text-yellow-300 p-2 cursor-pointer rounded  "
            href="/"
          >
            Home
          </Link>

          <Link
            activeClass="active"
            offset={-100}
            onClick={() => window.scrollTo(0, 2500)}
            smooth={true}
            spy={true}
            duration={1000}
            className="hover:text-yellow-300 hover:border-b-[1px] border-yellow-300  p-2 cursor-pointer  "
            href="#contact"
          >
            Contact
          </Link>
          <a
            className=" hover:border-[1px] border-blue-200 p-1 rounded-lg"
            href="/Hiren Panchal - Resume (1).pdf"
          >
            Get <span className="text-blue-400">Resume</span>
          </a>
        </div>

        <div onClick={handel} className=" mobile md:hidden z-20 h-16 block   ">
          {!isopen ? (
            <>
              <h1 className="  text-4xl font-bold m-5 ">
                <HiMiniChevronRight className="w-8" />
              </h1>
              <div
                className={`flex items-center flex-col  

                  relative    h-[80vh]  w-[60vw]  mt-[-6%] p-3 text-xl italic space-y-3 font-semibold bg-zinc-950  `}
              >
                <Link
                  onClick={() => window.scrollTo(0, 0)}
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  duration={1000}
                  className="hover:bg-yellow-400 hover:text-black p-2 rounded  "
                  href="/"
                >
                  Home
                </Link>

                <Link
                  activeClass="active"
                  offset={-100}
                  onClick={() => window.scrollTo(0, 2500)}
                  smooth={true}
                  spy={true}
                  duration={1000}
                  className="hover:bg-yellow-400 hover:text-black p-2 rounded  "
                  href="#contact"
                >
                  Contact
                </Link>
                <a
                  className=" hover:border-[1px] border-blue-200 p-1 rounded-lg"
                  href="/Hiren Panchal - Resume (1).pdf"
                >
                  Get <span className="text-blue-400">Resume</span>
                </a>
              </div>
            </>
          ) : (
            <>
              <h1 className="block md:hidden  text-4xl font-bold m-5 mr-5">
                <CiMenuFries className="w-8" />
              </h1>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Nav;
