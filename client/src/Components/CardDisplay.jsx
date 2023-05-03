import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardDisplay = ({ user }) => {
  const [cards, setCards] = useState([]);

  console.log(user);

  /* useEffect(() => {
    const fetchCards = async () => {
      try {
        const response = await fetch(`/user/${user._id}/cards`);
        const userCards = await response.json();
        setCards(userCards);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCards();
  }, [user]);

  const displayCards = cards.map((card, index) => {
    return <Card key={index} card={card} />;
  }); */

  return (
    <div className="text-center align-middle mt-10">
      <button className="bg-[#7e6e45] rounded-xl text-white px-3 py-1">
        <p>Add Card</p>
      </button>
    </div>
  );
};

export default CardDisplay;
