import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { BiEdit } from "react-icons/bi";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsArrowRightCircleFill } from "react-icons/bs";
import { BsCircleHalf } from "react-icons/bs";

const Card = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [status, setStatus] = useState(0);

  const handleStatus = () => {
    if (status === 2) {
      setStatus(0);
    } else {
      setStatus(status + 1);
    }
  };

  const statusButton = [
    <AiFillCheckCircle onClick={handleStatus} size={22} className="mr-2" />,
    <BsArrowRightCircleFill
      onClick={handleStatus}
      size={22}
      className="mr-2"
    />,
    <BsCircleHalf onClick={handleStatus} size={22} className="mr-2" />,
  ];

  const displayStatus = statusButton[status];

  return (
    <div className="flex items-center h-screen">
      <div className="mx-auto justify-center">
        <div className="w-[350px] h-[500px] bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="w-full h-56 bg-cover bg-center">
            <div className="w-full px-4 py-4 bg-white">
              <div className="flex items-center justify-left">
                <h3 className="text-gray-600 text-2xl mt-1 mr-5">Date: </h3>
                <DatePicker
                  className="text-gray-600 text-2xl mt-1"
                  selected={startDate}
                  onChange={(date) => setStartDate(date)}
                />
              </div>
              <div className=" items-center">
                <h3 className="text-gray-600 text-md my-2 mr-5">Highlight:</h3>
                <div className="flex align-middle justify-between">
                  <div className="flex items-center">
                    {displayStatus}
                    <h1 className="text-decoration-line">
                      The Highlight will go here
                    </h1>
                  </div>
                  <BiEdit color={"#7e6e45"} size={25} />
                </div>
              </div>
              <div className=" items-center">
                <h3 className="text-gray-600 text-md my-2 mr-5">Should Do:</h3>
                <div className="flex align-middle justify-between">
                  <div className="flex items-center">
                    {displayStatus}
                    <h1 className="text-decoration-line">
                      The Highlight will go here
                    </h1>
                  </div>
                  <BiEdit color={"#7e6e45"} size={25} />
                </div>
                <div className="flex align-middle justify-between">
                  <div className="flex items-center">
                    {displayStatus}
                    <h1 className="text-decoration-line">
                      The Highlight will go here
                    </h1>
                  </div>
                  <BiEdit color={"#7e6e45"} size={25} />
                </div>
                <div className="flex align-middle justify-between">
                  <div className="flex items-center">
                    {displayStatus}
                    <h1 className="text-decoration-line">
                      The Highlight will go here
                    </h1>
                  </div>
                  <BiEdit color={"#7e6e45"} size={25} />
                </div>
              </div>
              <div className=" items-center">
                <h3 className="text-gray-600 text-md my-2 mr-5">Could Do:</h3>
                <div className="flex align-middle justify-between">
                  <div className="flex items-center">
                    {displayStatus}
                    <h1 className="text-decoration-line">
                      The Highlight will go here
                    </h1>
                  </div>
                  <BiEdit color={"#7e6e45"} size={25} />
                </div>
                <div className="flex align-middle justify-between">
                  <div className="flex items-center">
                    {displayStatus}
                    <h1 className="text-decoration-line">
                      The Highlight will go here
                    </h1>
                  </div>
                  <BiEdit color={"#7e6e45"} size={25} />
                </div>
                <div className="flex align-middle justify-between">
                  <div className="flex items-center">
                    {displayStatus}
                    <h1 className="text-decoration-line">
                      The Highlight will go here
                    </h1>
                  </div>
                  <BiEdit color={"#7e6e45"} size={25} />
                </div>
              </div>
              <div className=" items-center">
                <h3 className="text-gray-600 text-md my-2 mr-5">Summary:</h3>
                <div className="border border-[#7e6e45]">
                  <textarea className="w-full h-24 p-2">
                    The summary will go here
                  </textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
