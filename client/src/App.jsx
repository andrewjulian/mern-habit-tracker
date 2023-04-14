import { useState, useEffect } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";

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
      <Outlet />
    </div>
  );
}

export default App;
