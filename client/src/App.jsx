import { useState, useEffect } from "react";
import "./App.css";
import Landing from "./Components/Landing";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";

function App() {
  //const [data, setData] = useState({});
  const [user, setUser] = useState({});

  /* const fetchData = async () => {
    try {
      const response = await fetch("/api/home");
      const data = await response.json();
      setData(data);
    } catch (error) {
      console.error(error);
    }
  }; */

  const fetchUser = async () => {
    try {
      const response = await fetch("/api/user");
      const data = await response.json();
      setUser(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
    //fetchData();
  }, []);

  return (
    <div>
      <h1> Welcome {user.username} </h1>
      <SignUp setUser={setUser} />
      <Landing />
      <Navbar />
    </div>
  );
}

export default App;
