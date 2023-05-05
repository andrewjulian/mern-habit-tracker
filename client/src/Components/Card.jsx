import React, { useState } from "react";
import DatePicker from "react-datepicker";
import CardTasks from "./CardTasks";

const sampleTasks = [
  {
    status: 0,
    text: "Task 1",
  },
  {
    status: 1,
    text: "Task 2",
  },
  {
    status: 2,
    text: "Task 3",
  },
];

const Card = ({ card }) => {
  const displayTasks = sampleTasks.map((task, index) => {
    return <CardTasks key={index} task={task} />;
  });

  return (
    <div className="flex items-center">
      <div className="mx-auto justify-center">
        <div className="w-[350px] h-[500px] bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-full h-56 bg-cover bg-center">
            <div className="w-full px-4 py-4 bg-white">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-gray-600 font-mono text-xl mt-1 mx-3">
                  Today
                </h3>
                <h3 className="text-gray-600 italic font-mono text-xl mt-1 mx-4">
                  Date
                </h3>
              </div>
              <div className=" items-center">
                <div className="flex flex-col align-middle justify-between">
                  {displayTasks}
                </div>
              </div>
              <button className="bg-[#7e6e45] rounded-xl text-white my-3 px-3 py-1">
                Add Task
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
