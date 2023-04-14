import { useEffect, useContext } from "react";
import "./App.css";
import { Outlet } from "react-router-dom";
import { UserContext } from "./Context/userContext";

function App() {
  const [user, setUser] = useContext(UserContext);
  let users = [];

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch("/api/auth/getUsers", {
          headers: {
            "Content-Type": "application/json",
          },
        });
        const data = await response.json();
        users = data;
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <div>
      {users}
      <Outlet />
    </div>
  );
}

export default App;
