import React, { useState } from "react";
import DatePicker from "react-datepicker";

const Card = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <div className="flex items-center h-screen">
      <div className="mx-auto justify-center">
        <div className="w-[350px] h-[500px] bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-full h-56 bg-cover bg-center">
            <div className="w-full px-4 py-4 bg-white">
              <h1 className="text-gray-900 font-bold text-2xl">Card Title</h1>
              <div className="flex items-center justify-left">
                <h3 className="text-gray-600 text-md mt-1 mr-5">Date: </h3>
                <DatePicker
                  className="text-gray-600 text-md mt-1"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
