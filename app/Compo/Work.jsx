import React from "react";
import { X, ExternalLink } from "lucide-react";
const Work = ({ showWorks, setShowWorks }) => {
  const works = [
    {
      title: "Real-Time Collaboration Code Editor",
      description:
        "A full-stack collaborative code editor with real-time editing, chat, and video calling. Built with Socket.io, React, and ZegoCloud.",
      image:
        "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600",
      link: "https://real-time-collab-two.vercel.app/",
      tech: ["React", "Node.js", "Socket.io", "ZegoCloud", "MongoDB"],
    },
    {
      title: "Project Management App (Vanilla JS)",
      description:
        "Kanban-style task management app with projects, boards, and real-time updates using WebSockets. Built with vanilla JS and basic Node backend.",
      image:
        "https://www.proofhub.com/articles/wp-content/uploads/2025/03/54-Best-Project-Management-Tools-for-2023.jpg",
      link: "https://task-5dtk.onrender.com/",
      tech: ["HTML", "CSS", "JavaScript", "Node.js", "WebSocket"],
    },
    {
      title: "YouTube UI Clone",
      description:
        "A pixel-perfect clone of YouTube's interface built with React and modern CSS techniques.",
      image:
        "data:image/jpeg;base64,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",
      link: "https://github.com/GovindPanchal08/Youtube-ui",
      tech: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
      title: "Memory Game",
      description:
        "An interactive memory game with smooth animations and engaging user experience.",
      image:
        "https://cloud.educaplay.com/r1/img/activities/RELACIONAR_MOSAICO/logoActivity.png?v=1752235648",
      link: "https://memory-game-rouge-chi.vercel.app/",
      tech: ["React"],
    },
  ];

  return (
    <>
      {showWorks && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 p-4">
          <div className="bg-zinc-900/95 backdrop-blur-md border border-zinc-700/50 rounded-3xl p-8 max-w-4xl w-full mx-4 max-h-[90vh] overflow-y-auto animate-fadeInScale">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-3xl font-bold text-white">My Works</h2>
              <button
                onClick={() => setShowWorks(false)}
                className="p-2 text-zinc-400 hover:text-white transition-colors rounded-full hover:bg-zinc-800"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {works.map((work, index) => (
                <div
                  key={index}
                  className="group bg-zinc-800/50 rounded-2xl overflow-hidden border border-zinc-700/50 hover:border-orange-400/50 transition-all duration-300"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={work.image}
                      alt={work.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">
                      {work.title}
                    </h3>
                    <p className="text-zinc-300 text-sm mb-4 leading-relaxed">
                      {work.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {work.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-zinc-700/50 text-zinc-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {work.link !== "#" && (
                      <a
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Work;
