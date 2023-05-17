import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
const sessionUser = sessionStorage.getItem("user");

function App() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [cards, setCards] = useState(null);

  console.log("user out", user);
  console.log("cards out", cards);

  const loadUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/user/${id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setUser(data.user);
      setCards(data.cards);
      console.log("data", data);
      console.log("user", data.user);
      console.log("cards", data.cards);
      setLoading(false); // set loading to false when data is loaded
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (sessionUser) {
      loadUser(sessionUser);
    } else {
      setLoading(false);
      setUser(null);
      setCards(null);
    }
  }, []);

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
          <Route
            path="/login"
            element={<Login setUser={setUser} setCards={setCards} />}
          />
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    );

  return (
    <div>
      <Navbar user={user} userLogout={userLogout} />
      <Routes>
        <Route
          path="/landing"
          element={<Landing user={user} cards={cards} setUser={setUser} />}
        />
        <Route path="*" element={<Navigate to="/landing" />} />
      </Routes>
    </div>
  );
}

export default App;
