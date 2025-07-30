import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
const Social = () => {
  return (
    <>
      <div className="flex justify-center gap-6">
        <a
          href="https://github.com/GovindPanchal08/"
          className="p-4 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-2xl text-zinc-400 transition-all duration-300 hover:border-orange-400/50 hover:text-orange-400 hover:scale-110 hover:bg-zinc-800/50"
        >
          <Github className="w-6 h-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/hiren-panchal-042987252/"
          className="p-4 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-2xl text-zinc-400 transition-all duration-300 hover:border-blue-400/50 hover:text-blue-400 hover:scale-110 hover:bg-zinc-800/50"
        >
          <Linkedin className="w-6 h-6" />
        </a>
        <a
          href="https://mail.google.com/mail/u/1/#inbox"
          className="p-4 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-2xl text-zinc-400 transition-all duration-300 hover:border-red-400/50 hover:text-red-400 hover:scale-110 hover:bg-zinc-800/50"
        >
          <Mail className="w-6 h-6" />
        </a>
      </div>
    </>
  );
};

export default Social;
