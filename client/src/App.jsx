import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
//import { UserContext } from "./Context/userContext";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  if (user) {
    console.log("user app", user);
    console.log("userCards app", user.userCards);
  }

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      setUser(user);
    }
  }, []);

  /* useEffect(() => {
    const fetchUser = async () => {
      try {
        const user = JSON.parse(sessionStorage.getItem("user"));
        console.log("session user", user);
        const response = await fetch(
          `http://localhost:3000/api/user/${user._id}/cards`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const data = await response.json();
        console.log("data", data);
        if (data.success) {
          setUser(data.user);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []); */

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
