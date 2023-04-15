import { useEffect, useContext } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { UserContext } from "./Context/userContext";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Profile from "./Components/Profile";

function App() {
  const [user, setUser] = useContext(UserContext);

  return <div></div>;
}

export default App;
