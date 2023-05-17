import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/refresco.png";

const Login = ({ setUser, setCards }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.success) {
        sessionStorage.setItem("user", data.user);
        setUser(data.user);
        setCards(data.cards);
        navigate("/landing");
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex min-h-full items-center justify-center px-4 py-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-4">
        <img
          className="mx-auto h-[400px] w-auto"
          src={logo}
          alt="Digital: Thoughtful Planning"
        />
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account!
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleLogin}>
          <div>
            <label className="sr-only" htmlFor="username">
              Username
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              required
              name="username"
              id="username"
              value={username}
              className="pl-2 relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-[#605e4d]  placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-[#605e4d] sm:text-sm sm:leading-6"
              placeholder="Create Username"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              required
              name="password"
              id="password"
              value={password}
              className="pl-2 relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-[#605e4d]  placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-[#605e4d] sm:text-sm sm:leading-6"
              placeholder="Password"
            />
          </div>
          <button
            className="group relative flex w-full justify-center rounded-md bg-[#7e6e45] px-3 py-2 text-sm font-semibold text-white hover:bg-[#605e4d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7e6e45]"
            type="submit"
          >
            Sign In!
          </button>
        </form>
        <div className="text-sm">
          <Link
            to="/signup"
            className="font-medium text-[#7e6e45] hover:text-[#605e4d]"
          >
            Need to create an account? Sign Up!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
