import React, { useState } from "react";
import DatePicker from "react-datepicker";
import CardTasks from "./CardTasks";

const Card = () => {
  const [startDate, setStartDate] = useState(new Date());

  /* const displayTasks = tasks.map((task, index) => {
    return <CardTasks key={index} task={task} />;
  }); */

  return (
    <div className="flex items-center h-screen">
      <div className="mx-auto justify-center">
        <div className="w-[350px] h-[500px] bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-full h-56 bg-cover bg-center">
            <div className="w-full px-4 py-4 bg-white">
              <div className="flex items-center justify-left mb-3">
                <h3 className="text-gray-600 text-2xl mt-1 mr-5">Date: </h3>
                <DatePicker
                  className="text-gray-600 text-2xl mt-1"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              {/* <div className=" items-center">
                <div className="flex flex-col align-middle justify-between">
                  {displayTasks}
                </div>
              </div> */}
              <button>
                <p>Add Task</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
