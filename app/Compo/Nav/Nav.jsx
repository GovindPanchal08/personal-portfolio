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
        className={`nav sticky top-0  flex  items-center justify-between   text-white  ${
          scrollPosition > 0
            ? `bg-black  `
            : "bg-transparent"
        }  `}
      >
        <Link
          onClick={() => window.scrollTo(0, 0)}
          href="/"
          className=" flex flex-row  rounded-lg gap-2  items-center text-[30px] font-semibold md:ml-24 ml-[20px]  hover:bg-slate-800"
        >
          Hiren.Dev
        </Link>

        <div className=" hidden  md:flex text-xl font-semibold items-center gap-8 mr-24 p-4">
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
            onClick={() => window.scrollTo(0, 650)}
            activeClass="active"
            to="skills"
            smooth={true}
            spy={true}
            offset={100}
            duration={1000}
            delay={1000}
            className="hover:bg-yellow-400 hover:text-black p-2 rounded  "
          >
            Skills
          </Link>
          <Link
            onClick={() => window.scrollTo(0, 1100)}
            activeClass="active"
            smooth={true}
            spy={true}
            className="hover:bg-yellow-400 hover:text-black p-2 rounded  "
            to="#work"
          >
            Work
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
        </div>

        <div onClick={handel} className=" mobile md:hidden h-16 block   ">
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
                
                  onClick={() =>  window.scrollTo(0, 0)}
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
                  onClick={() => window.scrollTo(0, 650)}
                  activeClass="active"
                  href="skills"
                  smooth={true}
                  spy={true}
                  offset={100}
                  duration={1000}
                  delay={1000}
                  className="hover:bg-yellow-400 hover:text-black p-2 rounded  "
                >
                  Skills
                </Link>
                <Link
                  onClick={() => window.scrollTo(0, 1000)}
                  activeClass="active"
                  smooth={true}
                  spy={true}
                  duration={1000}
                  className="hover:bg-yellow-400 hover:text-black p-2 rounded  "
                  href="#work"
                >
                  Work
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
