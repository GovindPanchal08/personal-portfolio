import React from "react";

const Skills = ({ isVisible }) => {
  const skills = [
    "JavaScript",
    "React",
    "Redux",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Git/GitHub",
    "Postman"
  ];

  return (
    <>
      {/* Skills */}
      <div className="mb-12">
        <h3 className="text-sm font-medium text-zinc-500 uppercase tracking-wider mb-4">
          Tech Stack
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skills.map((skill, index) => (
            <span
              key={skill}
              className={`px-4 py-2 bg-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 rounded-full text-sm text-zinc-300 transition-all duration-300 hover:scale-105 hover:border-orange-400/50 hover:text-orange-400 ${
                isVisible ? "animate-fadeInUp" : ""
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
