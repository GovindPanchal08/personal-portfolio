import React from "react";

const Ambient = () => {
  return (
    <div className="absolute inset-0 ">
      <div className="absolute top-20 left-10 w-3 h-3 bg-orange-400/30 rounded-full animate-pulse"></div>
      <div className="absolute top-40 right-20 w-2 h-2 bg-yellow-400/30 rounded-full animate-pulse delay-300"></div>
      <div className="absolute bottom-32 left-20 w-2 h-2 bg-red-400/30 rounded-full animate-pulse delay-700"></div>
      <div className="absolute bottom-20 right-32 w-3 h-3 bg-blue-400/30 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/10 via-transparent to-zinc-900/10"></div>
    </div>
  );
};

export default Ambient;
