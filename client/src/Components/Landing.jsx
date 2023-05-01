import React from "react";
import CardDisplay from "./CardDisplay";

const Landing = () => {
  return (
    <div className="m-[15px]">
      <h1 className="text-center font-mono text-3xl font-bold  text-gray-900">
        Welcome to Digital
      </h1>
      <h1 className="text-center font-mono my-[4px] text-xl font-bold tracking-tight text-gray-900">
        Your Thoughtful Planning Tool
      </h1>
      <CardDisplay />
    </div>
  );
};

export default Landing;
