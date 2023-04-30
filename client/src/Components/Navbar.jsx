import React from "react";

const Navbar = ({ user, userLogout }) => {
  return (
    <div className="flex justify-between">
      <h1>Hello, {user.username}! </h1>
      <button onClick={userLogout} className="bg-blue-500 text-white">
        Logout
      </button>
    </div>
  );
};

export default Navbar;
