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
    "Git / GitHub",
    "Postman",
  ];

  return (
    <section aria-label="Tech Stack" className="mb-12">
      <h3
        className="text-xs uppercase tracking-widest mb-4"
        style={{
          color: "var(--color-text-muted)",
          fontFamily: "var(--font-body)",
          fontWeight: 600,
          letterSpacing: "0.12em",
        }}
      >
        Tech Stack
      </h3>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <span
            key={skill}
            className={`px-4 py-2 text-sm transition-colors duration-200 ${
              isVisible ? "animate-fadeInUp" : ""
            }`}
            style={{
              backgroundColor: "var(--color-surface)",
              border: "1px solid var(--color-border)",
              borderRadius: "var(--radius)",
              color: "var(--color-text)",
              animationDelay: `${index * 60}ms`,
            }}
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
