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

  console.log("user", user);

  if (!user)
    return (
      <div>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login setUser={setUser} />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/card" element={<Card />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    );

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="*" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
