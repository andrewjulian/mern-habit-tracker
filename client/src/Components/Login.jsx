import React, { useState, useContext } from "react";
import { UserContext } from "../Context/userContext";

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await response.json();
      console.log(data);

      setUsername("");
      setPassword("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          type="text"
          name="username"
          id="username"
          value={username}
        />
        <label htmlFor="password">Password</label>
        <input
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          name="password"
          id="password"
          value={password}
        />
        <button type="submit">Login</button>
      </form>
      <a href="/signup">Don't have an accout? Register</a>
    </div>
  );
};

export default Login;
