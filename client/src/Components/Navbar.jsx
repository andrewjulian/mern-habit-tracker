import React from "react";
import logo from "../assets/refresco.png";

const Navbar = ({ user, userLogout }) => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex justify-center text-center align-center">
          <img src={logo} alt="logo" className="w-[100px] h-auto" />
          <h4 className="hidden md:block my-auto text-[25px] font-mono">
            Thoughtful Planning
          </h4>
        </div>
        <div className="my-auto mx-10">
          <button
            onClick={userLogout}
            className="bg-[#7e6e45] text-black px-5 py-2 rounded-xl font-mono  hover:text-white"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
