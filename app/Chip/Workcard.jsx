"use client";
import React from "react";
import Image from "next/image";
import Link from 'next/link'
const Work = [
  {
    title: "Youtube Ui Clone",
    img: "https://i.pinimg.com/originals/00/6f/fd/006ffd872df01f4e422965806dbc6a5d.png",
    link: "https://github.com/GovindPanchal08/Youtube-ui",
  },
  {
    title: "Editor using Manoco",
    img: "https://img.freepik.com/free-vector/programmers-concept-with-flat-design_23-2147860985.jpg?t=st=1715862491~exp=1715866091~hmac=bca1ad637b46d4803b59f041daa24843bee18005aa7d5929ea1459ee1b54388c&w=740",
    link: "https://github.com/GovindPanchal08/Editor-Monaco-ui-reactjs"
  },
  {
    title: "Memory Game ",
    img: "https://img.freepik.com/free-vector/hand-drawn-memory-game-card_23-2150140069.jpg?size=626&ext=jpg&ga=GA1.1.1252568120.1708439916&semt=ais_user",
    link:"https://memory-game-rouge-chi.vercel.app/"
  },
  {
    title: "Static BCA Informative Site",
    img: "https://abhyudayuniversity.edu.in/wp-content/uploads/2022/09/cropped-BCA-Course-Details.jpeg",
    link:""
  },
];

const Workcard = () => {
  return (
    <div className="work flex text-white h-[100vh] w-[100vw] md:ml-32">
      <div className="work mt-5 grid gap-8 md:gap-11 grid-cols-1 md:grid-cols-3">
        {Work.map(({ title, img, link }, ind) => (
          <div key={ind} className="works">
            <Link target href={link}>
              <div className="front rounded-lg h-52 w-64 md:h-72 md:w-96 bg-white text-center cursor-pointer relative overflow-hidden">
                <div className="hover:scale-[98%] h-full w-full object-cover rounded-lg transition-transform duration-300">
                  <Image
                    src={img}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    priority
                  />
                </div>
                <p className="text-2xl italic absolute bottom-0 left-0 w-full bg-black bg-opacity-65 text-white p-2">
                  {title}
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
