import { useEffect, useContext } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { UserContext } from "./Context/userContext";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Navbar from "./Components/Navbar";

function App() {
  const [user, setUser] = useContext(UserContext);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setUser(data.user);
          }
        });
    }
  }, []);

  return (
    <div>
      <Navbar />
      {user ? (
        <Landing />
      ) : (
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
