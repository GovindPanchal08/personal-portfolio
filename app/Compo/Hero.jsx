import React, { useState, useEffect } from "react";

import About from "./About";
import Work from "./Work";
import Skills from "./Skills";
import Social from "./Social";
import Profile from "./Profile";
import ActionBtn from "./ActionBtn";
import Ambient from "../Utils/Ambient";

const Hero = () => {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showAbout, setShowAbout] = useState(false);
  const [showWorks, setShowWorks] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Welcome animation sequence
    const timer1 = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);

    const timer2 = setTimeout(() => {
      setIsVisible(true);
    }, 2500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  // Welcome Animation Component
  if (showWelcome) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="animate-pulse">
            <h1 className="text-6xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-yellow-400 to-red-400 bg-clip-text text-transparent mb-4">
              Welcome
            </h1>
            <div className="flex items-center justify-center gap-3">
              <div className="w-2 h-2 bg-orange-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full animate-bounce delay-100"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <Ambient />
      <div className="relative z-10 container mx-auto px-6 py-20 lg:px-8 min-h-screen flex items-center justify-center">
        <div
          className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <Profile />
          <Skills isVisible={isVisible} />
          <ActionBtn setShowAbout={setShowAbout} setShowWorks={setShowWorks} />
          <Social />
        </div>
      </div>
      <About showAbout={showAbout} setShowAbout={setShowAbout} />
      <Work showWorks={showWorks} setShowWorks={setShowWorks} />
    </div>
  );
};

export default Hero;
