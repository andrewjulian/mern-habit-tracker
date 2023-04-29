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

  /*  const handleLogin = (userId) => {
    // Store the user's ID in sessionStorage
    sessionStorage.setItem("userId", userId);

    // Retrieve the user object from the server using their ID
    fetch(`/api/users/${userId}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error(error));
  }; */

  /* const handleLogout = () => {
    // Remove the user's ID from sessionStorage
    sessionStorage.removeItem("userId");

    // Clear the user object in state
    setUser(null);
  }; */

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
      <Navbar />
      <Routes>
        <Route path="*" element={<Landing user={user} />} />
      </Routes>
    </div>
  );
}

export default App;
