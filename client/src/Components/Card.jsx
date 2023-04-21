import React from "react";

const Card = () => {
  return (
    <div className="flex items-center h-screen">
      <div className="w-80 h-80 mx-auto justify-center">
        <div className="w-80 h-80 bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-full h-56 bg-cover bg-center">
            <div className="w-full px-4 py-4 bg-white">
              <h1 className="text-gray-900 font-bold text-2xl">Card Title</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
