import React from "react";
import { MapPin, Calendar, X, Code2 } from "lucide-react";

const About = ({ showAbout, setShowAbout }) => {
  return (
    <>
      {showAbout && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="relative bg-zinc-900/95 backdrop-blur-md border border-zinc-700/50 rounded-3xl w-full max-w-lg mx-auto p-6 sm:p-8 my-10 animate-fadeInScale">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                About Me
              </h2>
              <button
                onClick={() => setShowAbout(false)}
                className="p-2 text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-zinc-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-4 overflow-y-auto max-h-[80vh] pr-1">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 text-zinc-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-orange-400" />
                  <span>Based in India</span>
                </div>
                <div className="flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-green-400" />
                  <span>Full-Stack Developer</span>
                </div>
              </div>

              <p className="text-zinc-300 leading-relaxed">
                I&apos;m a passionate BCA graduate with a strong foundation in
                frontend development and a growing expertise in backend
                technologies. I have hands-on experience building responsive and
                interactive web applications using React.js, JavaScript,
                HTML/CSS, and modern frontend practices.
              </p>

              <p className="text-zinc-300 leading-relaxed">
                Recently, I&apos;ve been diving deep into backend development
                with Node.js, Express, and MongoDB, gaining a solid
                understanding of server-side logic, REST APIs, and database
                integration.
              </p>

              <p className="text-zinc-300 leading-relaxed">
                Alongside a close friend, I&apos;ve started taking on freelance
                projects, successfully completing a few websites for clients. We
                are currently working on two more client projects, sharpening
                our skills in real-world scenarios and delivering scalable
                solutions.
              </p>

              <p className="text-zinc-300 leading-relaxed">
                I&apos;m eager to join a dynamic team where I can apply my
                skills, contribute to impactful projects, and continue growing
                as a full-stack developer.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default About;
