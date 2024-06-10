"use client";
import React, { useState } from "react";
import Image from "next/image";
const Work = [
  {
    title: "Youtube Ui Clone",
    img: "https://i.pinimg.com/originals/00/6f/fd/006ffd872df01f4e422965806dbc6a5d.png",
  },
  {
    title: "Editor using Manoco",
    img: "https://img.freepik.com/free-vector/programmers-concept-with-flat-design_23-2147860985.jpg?t=st=1715862491~exp=1715866091~hmac=bca1ad637b46d4803b59f041daa24843bee18005aa7d5929ea1459ee1b54388c&w=740",
  },
  {
    title: "Memory Game ",
    img: "https://img.freepik.com/free-vector/hand-drawn-memory-game-card_23-2150140069.jpg?size=626&ext=jpg&ga=GA1.1.1252568120.1708439916&semt=ais_user",
  },
  {
    title: "Static BCA Informative Site",
    img: "https://abhyudayuniversity.edu.in/wp-content/uploads/2022/09/cropped-BCA-Course-Details.jpeg",
  },
];
const Workcard = () => {
  return (
    <div className=" work flex  text-white h-[100vh] w-[100vw] md:ml-32 ">
      <div className="work mt-5 grid gap-8 md:gap-11 grid-cols-1 md:grid-cols-3 ">
        {Work.map(({ title, img }, ind) => (
          <div key={ind} className="works">
            <div className="front rounded-lg h-52 w-64 md:h-72 md:w-96 bg-white text-center cursor-pointer">
              {/* <Image width={10}  height={10} src={img} alt={title} /> */}
              {/* <img className="img hover:scale-[98%] h-full w-full object-cover  rounded-lg" src={img} alt="" /> */}
              <p className="text-2xl italic">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workcard;
