import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { BiCircle } from "react-icons/bi";
import { MdOutlineHighlight } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { BsCircleHalf } from "react-icons/bs";
import { AiFillCloseCircle } from "react-icons/ai";
import { BiSave } from "react-icons/bi";

const CardTasks = ({ task, setCardTasks }) => {
  const [status, setStatus] = useState(task.status);
  const [edit, setEdit] = useState(false);
  const [taskText, setTask] = useState(task.text);
  const [cardId, setCardId] = useState(task.card._id);

  /* const handleStatus = () => {
    if (status === statusButton.length - 1) {
      setStatus(0);
    } else {
      setStatus(status + 1);
    }
  }; */

  const handleStatus = async () => {
    let current = status;
    if (current === statusButton.length - 1) {
      current = 0;
    } else {
      current = status + 1;
    }

    try {
      const response = await fetch(
        `http://localhost:3000/api/task/${task._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            card: cardId,
            text: taskText,
            status: current,
          }),
        }
      );
      const data = await response.json();
      setStatus(current);
      updateTasks(data.task);
    } catch (error) {
      console.error(error);
    }
  };

  const updateTasks = (newTask) => {
    console.log(newTask);
    setCardTasks((prev) => {
      return prev.map((task) => {
        if (task._id === newTask._id) {
          return newTask;
        } else {
          return task;
        }
      });
    });
  };

  const updateTask = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/task/${task._id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            card: cardId,
            text: taskText,
            status: status,
          }),
        }
      );
      const data = await response.json();
      updateTasks(data.task);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleEdit = () => {
    if (edit) {
      //update task

      updateTask();
      setEdit(!edit);
    }
    setEdit(!edit);
  };

  const statusButton = [
    <BiCircle onClick={handleStatus} size={22} className="ml-2 mr-1.5" />,
    <MdOutlineHighlight
      onClick={handleStatus}
      size={22}
      className="ml-2 mr-1.5"
    />,
    <IoPeopleCircleOutline
      onClick={handleStatus}
      size={22}
      className="ml-2 mr-1.5"
    />,
    <BsCircleHalf onClick={handleStatus} size={18} className="ml-2.5 mr-2" />,
    <AiFillCheckCircle
      onClick={handleStatus}
      size={22}
      className="ml-2 mr-1.5"
    />,
    <BsArrowRightCircleFill
      onClick={handleStatus}
      size={18}
      className="ml-2.5 mr-2"
    />,
    <AiFillCloseCircle
      onClick={handleStatus}
      size={20}
      className="ml-2.5 mr-1.5"
    />,
  ];

  const displayStatus = statusButton[status];

  if (edit) {
    return (
      <div>
        <div className="flex align-middle justify-between my-1 py-3 border-b border-[#7e6e45]">
          <div className="flex items-center">
            <input
              className="w-56 h-6 rounded-md border-[#7e6e45] border-2"
              type="text"
              value={taskText}
              onChange={(e) => setTask(e.target.value)}
            />
          </div>
          <BiSave onClick={toggleEdit} color={"#7e6e45"} size={25} />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex align-middle justify-between my-1 py-3 border-b border-[#7e6e45]">
        <div className="flex items-center">
          {displayStatus}
          {task.text}
        </div>
        <BiEdit onClick={toggleEdit} color={"#7e6e45"} size={25} />
      </div>
    </div>
  );
};

export default CardTasks;
