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

const CardTasks = ({ task }) => {
  const [status, setStatus] = useState(0);
  const [edit, setEdit] = useState(false);

  console.log("task", task);

  const handleStatus = () => {
    if (status === statusButton.length - 1) {
      setStatus(0);
    } else {
      setStatus(status + 1);
    }
  };

  const toggleEdit = () => {
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
              value={task.task}
              onChange={(e) => task.task(e.target.value)}
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
