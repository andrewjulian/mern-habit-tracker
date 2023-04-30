import { useEffect, useContext, useNavigate, useState } from "react";
import "./App.css";
//import { UserContext } from "./Context/userContext";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Card from "./Components/Card";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userFromSessionStorage = sessionStorage.getItem("user");
    if (userFromSessionStorage) {
      setUser(JSON.parse(userFromSessionStorage));
    }
  }, []);

  const userLogout = () => {
    sessionStorage.removeItem("user");
    setUser(null);
    const logout = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/user/logout");
        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
  };

  if (!user)
    return (
      <div>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="/card" element={<Card />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    );

  return (
    <div>
      <Navbar user={user} userLogout={userLogout} />
      <Routes>
        <Route path="*" element={<Landing user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
