import React from "react";
import { Code } from "lucide-react";
import DecryptedText from "../UI/DecryptedText";
import RotatingText from "../UI/RotatingText";

const Profile = () => {
  return (
    <>
      <div className="mb-12">
        <div className="relative inline-block mb-8">
          <div className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-full overflow-hidden border-4 border-zinc-800 shadow-2xl">
            <img
              src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Hiren Panchal"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-400 rounded-full border-4 border-black animate-pulse"></div>
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            <div>
              <DecryptedText
                text="Hiren Panchal"
                speed={100}
                maxIterations={20}
                characters="HiReNpAnChAl"
                animateOn="view"
                revealDirection="center"
              />
            </div>
          </h1>

          <div className="flex items-center justify-center gap-3 mb-4">
            <Code className="w-6 h-6 text-orange-400" />
            <RotatingText
              texts={[
                "Full Stack Developer",
                "Backend Developer",
                "FrontEnd Developer",
                "Web Developer",
              ]}
              mainClassName="px-2 sm:px-2 md:px-3 text-2xl md:text-3xl font-semibold text-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-orange-200  overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 10, stiffness: 100 }}
              rotationInterval={3000}
            />
          </div>

          <p className="text-xl text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Passionate web developer crafting responsive, user-focused
            experiences. Specialized in modern JavaScript and full-stack
            development. Freelancing with a focus on clean code and seamless UI.
          </p>
        </div>
      </div>
    </>
  );
};

export default Profile;
