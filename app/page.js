"use client";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./Compo/Hero";
import Nav from "./Compo/Nav/Nav";
import Contact from "./Compo/Contact/Contact";
import Skills from "./Compo/Skills/Skills";
import Work from "./Compo/Work/Work";
import Resume from "./Compo/Resume";
const page = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <Skills />
      <Work />
      <Resume />
      <Contact/>
    </div>
  );
};

export default page;
