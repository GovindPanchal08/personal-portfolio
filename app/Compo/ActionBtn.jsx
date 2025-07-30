import React from "react";
import { ArrowRight, Briefcase, Download, User } from "lucide-react";

const ActionBtn = ({ setShowAbout, setShowWorks }) => {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        <button
          onClick={() => setShowAbout(true)}
          className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-2xl font-medium overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/25"
        >
          <span className="relative z-10 flex items-center gap-2">
            <User className="w-5 h-5" />
            About Me
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </span>
        </button>

        <button
          onClick={() => setShowWorks(true)}
          className="group relative px-8 py-4 bg-zinc-900/80 backdrop-blur-sm border-2 border-zinc-700 text-zinc-300 rounded-2xl font-medium transition-all duration-300 hover:border-orange-400 hover:text-orange-400 hover:bg-zinc-800/50"
        >
          <span className="flex items-center gap-2">
            <Briefcase className="w-5 h-5" />
            View Works
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </span>
        </button>

        <a
          href="/Hiren Panchal - Resume.pdf"
          className="group px-8 py-4 border-2 border-zinc-700 text-zinc-300 rounded-2xl font-medium transition-all duration-300 hover:border-orange-400 hover:text-orange-400 hover:bg-zinc-900/50"
        >
          <span className="flex items-center gap-2">
            <Download className="w-5 h-5" />
            Resume
          </span>
        </a>
      </div>
    </>
  );
};

export default ActionBtn;
