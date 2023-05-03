import React from "react";
import Card from "./Card";

const CardDisplay = ({ user }) => {
  const cards = user.cards;
  console.log(cards);

  const displayCards = cards.map((card) => {
    return (
      <div>
        <h1> {card.date}</h1>
      </div>
    );
  });

  return (
    <div className="text-center align-middle mt-10">
      {displayCards}
      <button className="bg-[#7e6e45] rounded-xl text-white px-3 py-1">
        <p>Add Card</p>
      </button>
    </div>
  );
};

export default CardDisplay;
