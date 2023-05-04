import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardDisplay = ({ user }) => {
  const displayCards = user.userCards.map((card) => {
    return <Card key={card._id} card={card} />;
  });

  return (
    <div className="text-center align-middle mt-10">
      <div className="flex flex-row justify-center my-10">{displayCards}</div>

      <button className="bg-[#7e6e45] rounded-xl text-white px-3 py-1">
        <p>Add Card</p>
      </button>
    </div>
  );
};

export default CardDisplay;
