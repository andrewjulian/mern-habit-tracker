import React from "react";

const Navbar = ({ logout }) => {
  return (
    <div className="flex justify-between">
      <h1>Navbar</h1>
      <button className="bg-blue-500 text-white" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Navbar;
