import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
//import { UserContext } from "./Context/userContext";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import { UserContext } from "./Context/userContext";
const sessionUser = sessionStorage.getItem("user");

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // add loading state
  const navigate = useNavigate();

  const loadUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/user/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log("data", data);
      setUser(data);
      setLoading(false); // set loading to false when data is loaded
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log("useeffect", user);
    loadUser(sessionUser);
  }, [setUser]);

  const userLogout = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/user/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      console.log(data.message);
      sessionStorage.removeItem("user");
      setUser(null);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <div>Loading...</div>; // conditionally render loading state

  if (!user)
    return (
      <div>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    );

  return (
    <div>
      <Navbar user={user} userLogout={userLogout} />
      <Routes>
        <Route path="/landing" element={<Landing user={user} />} />
        <Route path="*" element={<Navigate to="/landing" />} />
      </Routes>
    </div>
  );
}

export default App;
