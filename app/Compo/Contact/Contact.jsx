import React, { useEffect } from "react";
import "aos/dist/aos.css"; // Import AOS styles
import AOS from "aos";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, delay: 1, debounceDelay: 1, once: true });
  }, []);

  return (
    <div
      data-aos="fade-up"
      className="md:mt-0 z-10 border-t-2 border-zinc-700 text-white bg-zinc-900 pt-5 rounded-t-[10%] h-[35vh] md:h-[40vh]"
    >
      <div className="mt-4 flex items-center justify-center tracking-tighter text-gray-100">
        <h1 className="text-3xl md:text-5xl mb-1 font-medium">
          Let&apos;s <span className="italic text-orange-300">Connect</span>
        </h1>
      </div>
      <div className="flex flex-col items-center justify-center text-gray-400 mt-2 px-4 text-center">
        <h2 className="text-2xl md:text-4xl tracking-tight">
          Get In Touch With Me <span className="text-red-300">Via</span>.
        </h2>
        <div className="mt-7 flex gap-5">
          <button className="hover:scale-110 transition-transform">
            <a href="https://www.linkedin.com/in/hiren-panchal-042987252/">
              <img
                className="w-8 md:w-10"
                src="images/linkedin.png"
                alt="LinkedIn"
              />
            </a>
          </button>
          <button className="hover:scale-110 transition-transform">
            <img
              className="w-8 md:w-10"
              src="images/instagram.png"
              alt="Instagram"
            />
          </button>
          <button className="hover:scale-110 transition-transform">
            <a href="https://mail.google.com/mail/u/1/#inbox">
              <img className="w-8 md:w-10" src="images/gmail.png" alt="Gmail" />
            </a>
          </button>
          <button className="hover:scale-110 transition-transform">
            <a href="https://github.com/GovindPanchal08/">
              <img
                className="w-8 md:w-10 bg-white rounded-full "
                src="images\github.png"
                alt="Gmail"
              />
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
