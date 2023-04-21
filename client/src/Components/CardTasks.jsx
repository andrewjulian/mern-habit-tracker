import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { BiCircle } from "react-icons/bi";
import { MdOutlineHighlight } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { IoPeopleCircleOutline } from "react-icons/io5";
import { BsCircleHalf } from "react-icons/bs";
import { BsXCircle } from "react-icons/bs";

const CardTasks = () => {
  const [status, setStatus] = useState(0);

  const handleStatus = () => {
    if (status === statusButton.length - 1) {
      setStatus(0);
    } else {
      setStatus(status + 1);
    }
  };

  const statusButton = [
    <BiCircle onClick={handleStatus} size={22} className="ml-2 mr-1.5" />,
    <MdOutlineHighlight
      onClick={handleStatus}
      size={22}
      className="ml-2 mr-1.5"
    />,
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
    <IoPeopleCircleOutline
      onClick={handleStatus}
      size={22}
      className="ml-2 mr-1.5"
    />,
    <BsCircleHalf onClick={handleStatus} size={18} className="ml-2.5 mr-2" />,
    <BsXCircle onClick={handleStatus} size={18} className="ml-2.5 mr-2" />,
  ];

  const displayStatus = statusButton[status];
  return (
    <div>
      <div className="flex align-middle justify-between my-1 py-3 border-b border-[#7e6e45]">
        <div className="flex items-center">
          {displayStatus}
          <h1>The Highlight will go here</h1>
        </div>
        <BiEdit color={"#7e6e45"} size={25} />
      </div>
    </div>
  );
};

export default CardTasks;
