import React, { useState, useEffect } from "react";
import Card from "./Card";

const CardDisplay = ({ user }) => {
  console.log(user);

  /*  useEffect(() => {
    const getCards = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/api/user/${user.username}/cards`
        );
        const data = await response.json();
        console.log(data);
        setCards(data);
      } catch (error) {
        console.error(error);
      }
    };
    getCards();
  }, []); */

  return (
    <div className="text-center align-middle mt-10">
      <button className="bg-[#7e6e45] rounded-xl text-white px-3 py-1">
        <p>Add Card</p>
      </button>
    </div>
  );
};

export default CardDisplay;
