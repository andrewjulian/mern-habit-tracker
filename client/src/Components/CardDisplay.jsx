import React from "react";
import Card from "./Card";

const CardDisplay = ({ user }) => {
  console.log(user);
  return (
    <div className="text-center align-middle mt-10">
      <button className="bg-[#7e6e45] rounded-xl text-white px-3 py-1">
        <p>Add Card</p>
      </button>
    </div>
  );
};

export default CardDisplay;
