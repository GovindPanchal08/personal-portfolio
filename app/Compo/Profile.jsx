import React from "react";
import { Code } from "lucide-react";
import DecryptedText from "../UI/DecryptedText";
import RotatingText from "../UI/RotatingText";
import Image from "next/image";

const Profile = () => {
  return (
    <section aria-label="Introduction" className="mb-12">
      {/* Avatar */}
      <div className="relative inline-block mb-8">
        <div
          className="w-28 h-28 md:w-32 md:h-32 mx-auto rounded-full overflow-hidden"
          style={{
            border: "3px solid var(--color-border)",
          }}
        >
          <Image
            src="https://images.pexels.com/photos/3184639/pexels-photo-3184639.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Photo of Hiren Panchal"
            fill
            className="object-cover rounded-full w-full h-full"
          />
        </div>
        {/* Available indicator */}
        <div
          className="absolute -bottom-1 -right-1 w-7 h-7 rounded-full flex items-center justify-center"
          style={{
            backgroundColor: "var(--color-bg)",
          }}
        >
          <div
            className="w-4 h-4 rounded-full"
            style={{ backgroundColor: "#4ade80" }}
          />
        </div>
      </div>

      {/* Name */}
      <div className="space-y-3">
        <h1
          className="text-4xl md:text-5xl leading-tight"
          style={{
            fontFamily: "var(--font-heading)",
            color: "var(--color-text)",
            letterSpacing: "-0.01em",
          }}
        >
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

        {/* Rotating subtitle */}
        <div
          className="flex items-center justify-center gap-3 mb-3"
          style={{ color: "var(--color-accent)" }}
        >
          <Code className="w-5 h-5" />
          <RotatingText
            texts={[
              "Full-Stack Developer",
              "Backend Developer",
              "Frontend Developer",
              "Web Developer",
            ]}
            mainClassName="px-2 sm:px-2 md:px-3 text-xl md:text-2xl font-medium overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center rounded-lg"
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

        {/* Tagline */}
        <p
          className="text-lg max-w-xl mx-auto"
          style={{
            color: "var(--color-text-muted)",
            lineHeight: 1.7,
          }}
        >
          I build full-stack web apps — from real-time editors to client
          websites — using React, Node.js, and MongoDB.
        </p>
      </div>
    </section>
  );
};

export default Profile;
