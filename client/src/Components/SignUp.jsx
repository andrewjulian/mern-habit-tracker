import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/refresco.png";

const SignUp = ({ setUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("running");
    try {
      const response = await fetch("http://localhost:3000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
          username,
        }),
      });
      if (response.status === 400) {
        const data = await response.json();
        setErrors([data.message]);
        return;
      } else {
        const data = await response.json();
        setUser(data.user);
      }
    } catch (error) {
      console.log(error);
    }

    setEmail("");
    setPassword("");
    setUsername("");
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
          Create your account!
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="-space-y-px rounded-md shadow-sm">
            <label className="sr-only" htmlFor="email">
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
              id="email"
              value={email}
              className="pl-2 relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-[#605e4d]  placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-[#605e4d] sm:text-sm sm:leading-6"
              placeholder="Email Address"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              name="password"
              id="password"
              value={password}
              className="pl-2 relative block w-full rounded-t-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-[#605e4d]  placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-[#605e4d] sm:text-sm sm:leading-6"
              placeholder="Password"
            />
          </div>
          <div>
            <label className="sr-only" htmlFor="username">
              Username
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="text"
              name="username"
              id="username"
              value={username}
              className="pl-2 relative block w-full rounded-b-md border-0 py-1.5 text-gray-900 ring-1 ring-inset ring-[#605e4d]  placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-[#605e4d] sm:text-sm sm:leading-6"
              placeholder="Create Username"
            />
          </div>
          <button
            className="group relative flex w-full justify-center rounded-md bg-[#7e6e45] px-3 py-2 text-sm font-semibold text-white hover:bg-[#605e4d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7e6e45]"
            type="submit"
          >
            Sign Up!
          </button>
          {errors.length > 0 && (
            <ul style={{ color: "red" }}>
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )}
        </form>
        <div className="text-sm">
          <Link
            to="/login"
            className="font-medium text-[#7e6e45] hover:text-[#605e4d]"
          >
            Already have an account?
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
