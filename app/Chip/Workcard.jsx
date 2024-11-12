"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Aos from "aos";

const Work = [
  {
    title: "Youtube Ui Clone",
    img: "https://www.shutterstock.com/shutterstock/videos/1063305961/thumb/9.jpg?ip=x480",
    link: "https://github.com/GovindPanchal08/Youtube-ui",
  },
  {
    title: "Editor using Monaco",
    img: "https://snappify.com/images/docs/editor/elements/code-editor/code-editor-background.png",
    link: "https://github.com/GovindPanchal08/Editor-Monaco-ui-reactjs",
  },
  {
    title: "Memory Game",
    img: "https://www.shutterstock.com/image-vector/memory-game-preschool-children-vector-260nw-1200034981.jpg",
    link: "https://memory-game-rouge-chi.vercel.app/",
  },
  {
    title: "Static BCA Informative Site",
    img: "https://3.imimg.com/data3/JI/WI/MY-9140924/bachelor-of-computer-application-bca-250x250.jpg",
    link: "",
  },
];

const Workcard = () => {
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 2000,
      easing: "ease-in-out",
      delay: 2,
    });
  }, []);
  return (
    <div className="work text-white md:mt-10 mt-4 w-full px-3 md:px-24">
      <div className="grid gap-4 sm:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 ">
        {Work.map(({ title, img, link }, ind) => (
          <div key={ind} className="works p-2 md:p-0">
            <Link target="_blank" className="link" href={link || "#"}>
              <div className="relative hover:scale-90 transform-transition duration-700  rounded-lg h-52  sm:h-64 md:h-64 lg:h-72 w-full  text-center cursor-pointer overflow-hidden">
                <div className="  ">
                  <Image
                    className="rounded-lg hover:scale-110 transform-transition duration-700 ease-in-out "
                    data-aos="fade-up"
                    src={img}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
                <p className="absolute bottom-0 left-0 w-full bg-zinc-900 bg-opacity-70  text-white p-2 text-lg sm:text-2xl">
                  {title}.
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workcard;
