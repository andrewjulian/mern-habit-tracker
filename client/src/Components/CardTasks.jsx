import React, { useState } from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsCircleHalf } from "react-icons/bs";
import { BiCircle } from "react-icons/bi";
import { BsXCircle } from "react-icons/bs";
import { MdOutlineHighlight } from "react-icons/md";
import { IoPeopleCircleOutline } from "react-icons/io5";

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
    <BiCircle onClick={handleStatus} size={22} className="mr-2" />,
    <MdOutlineHighlight onClick={handleStatus} size={22} className="mr-2" />,
    <AiFillCheckCircle onClick={handleStatus} size={22} className="mr-2" />,
    <BsArrowRightCircleFill
      onClick={handleStatus}
      size={22}
      className="mr-2"
    />,
    <IoPeopleCircleOutline onClick={handleStatus} size={22} className="mr-2" />,
    <BsCircleHalf onClick={handleStatus} size={22} className="mr-2" />,
    <BsXCircle onClick={handleStatus} size={22} className="mr-2" />,
  ];

  const displayStatus = statusButton[status];
  return (
    <div>
      <div className="flex align-middle justify-between my-1">
        <div className="flex items-center">
          {displayStatus}
          <h1 className="text-decoration-line">The Highlight will go here</h1>
        </div>
        <BiEdit color={"#7e6e45"} size={25} />
      </div>
    </div>
  );
};

export default CardTasks;
