import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardDisplay = ({ user, setUser }) => {
  let displayCards = null;
  if (!user) return null;

  if (user.userCards.length > 0) {
    displayCards = user.userCards.map((card, index) => {
      return <Card key={index} card={card} user={user} setUser={setUser} />;
    });
  } else {
    displayCards = <p>No cards yet!</p>;
  }

  return (
    <div className="text-center align-middle mt-10">
      {displayCards}
      <button className="bg-[#7e6e45] rounded-xl text-white my-7 px-3 py-1">
        <p>Add Card</p>
      </button>
    </div>
  );
};

export default CardDisplay;
