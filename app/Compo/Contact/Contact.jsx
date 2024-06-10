import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qwks0gf", "template_j3vjo9m", form.current, {
        publicKey: "NAALjJSa799F1BetI",
      })
      .then(
        () => {
          console.log("SUCCESS!");
              e.target.reset()
         alert('Email Sent')
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div className=" mt-[130%]   md:mt-[0%]   h-full">
      <div className="mt-10 relative ml-8 md:ml-24 text-gray-400">
        <h1 className="text-2xl font-semibold">Contact</h1>
        <span className=" absolute h-[1.1px] w-[85vw] bg-gray-300"></span>
      </div>
      <div className="flex  flex-col md:flex-row items-center justify-between mt-[5%]">
        <div className="text-white mr-5 md:h-[100%] mt-5 md:w-[50%] flex  flex-wrap flex-col items-center justify-center ">
          <h1 className="text-4xl font-bold">You Need.</h1>
          <p className="md:text-base md:ml-20 ml-10 text-sm">
            Beautiful design for your website.
          </p>
          <p className="text-basen mr-14 ">leave a request.</p>
        </div>
        <div className="  text-white h-[100%] mt-5   md:w-[50%] flex  md:flex-col items-center justify-center ">
          <form
           onSubmit={sendEmail}
            ref={form}
            className="flex text-black items-center justify-center flex-col gap-6 w-[80%] bg-slate-50/10 p-4 rounded-xl "
          >
            <input
              className=" w-[60vw] md:w-[24vw] p-2 h-9 rounded-lg "
              type="email"
              name="your_email"
              placeholder="e.g example@gmail.com"
            />
            <input
              className=" w-[60vw] md:w-[24vw] h-9 p-2 rounded-lg"
              type="name"
              name="your_name"
              placeholder="e.g name surname"
            />
            <textarea
              className=" w-[60vw]  md:w-[24vw] p-2 rounded-lg"
              rows="5"
              name="message"
              placeholder="write your message "
            ></textarea>
            <button className=" bg-white text-black w-[70vw]  md:w-[24vw] p-2 rounded-lg text-xl font-bold">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
