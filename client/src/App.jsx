import { useState, useEffect } from "react";
import "./App.css";
import Landing from "./Components/Landing";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/home");
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {data.name}
      <SignUp />
      <Landing data={data} />
      <Navbar />
    </div>
  );
}

export default App;
