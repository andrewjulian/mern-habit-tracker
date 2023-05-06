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
  const [showModal, setShowModal] = useState(false);
  const [newTask, setNewTask] = useState("");

  const displayTasks = sampleTasks.map((task, index) => {
    return <CardTasks key={index} task={task} />;
  });

  const addNewTask = () => {
    console.log("add task");
    setShowModal(false);
  };

  return (
    <div className="flex items-center">
      <div className="mx-auto justify-center">
        <div className="w-[350px] h-[500px] bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-full h-56 bg-cover bg-center">
            <div className="w-full px-4 py-4 bg-white">
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-gray-600 font-mono text-xl mt-1 mx-2">
                  Today
                </h3>
                <h3 className="text-gray-600 italic font-mono text-xl mt-1 mx-2">
                  Date: 01/01/2023
                </h3>
              </div>
              <div className=" items-center">
                <div className="flex flex-col align-middle justify-between">
                  {displayTasks}
                </div>
              </div>
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="bg-[#7e6e45] rounded-xl text-white my-3 px-3 py-1"
              >
                Add Task
              </button>
              {showModal ? (
                <>
                  <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                      {/*content*/}
                      <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-center p-5 border-b border-solid border-slate-200 rounded-t">
                          <h3 className="text-3xl font-semibold ">Add Task</h3>
                        </div>
                        {/*body*/}
                        <form
                          onSubmit={addNewTask}
                          className="relative p-6 flex-auto"
                        >
                          <input
                            type="text"
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            placeholder="Add new task..."
                            value={newTask}
                            onChange={(e) => setNewTask(e.target.value)}
                          />

                          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                              className="text-black hover:text-red-600 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() => setShowModal(false)}
                            >
                              Close
                            </button>
                            <button
                              type="submit"
                              className="bg-[#7e6e45] rounded-xl text-white px-3 py-1  active:bg-[#7e6e45] font-bold uppercase text-sm  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                            >
                              Save Changes
                            </button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                  <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
