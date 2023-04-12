import { useState, useEffect } from "react";
import "./App.css";
import Landing from "./Components/Landing";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import Login from "./Components/Login";

function App() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/auth/getUsers", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        setUser(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      <h1> Welcome {user.username} </h1>
      <SignUp setUser={setUser} />
      <Login setUser={setUser} />
      <Landing />
      <Navbar />
    </div>
  );
}

export default App;
