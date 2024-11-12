"use client";
import React from "react";
import Hero from "./Compo/Hero";
import Nav from "./Compo/Nav/Nav";
import Contact from "./Compo/Contact/Contact";
import Skills from "./Compo/Skills/Skills";
import Work from "./Compo/Work/Work";
const page = () => {
  return (
    <div className="font-mono">
      <Nav />
      <Hero />
      <Skills />
      <Work />
      <Contact/>
    </div>
  );
};

export default page;
