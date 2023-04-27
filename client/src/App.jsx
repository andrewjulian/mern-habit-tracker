import { useEffect, useContext, useNavigate } from "react";
import "./App.css";
import { UserContext } from "./Context/userContext";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Card from "./Components/Card";

function App() {
  const [user, setUser] = useContext(UserContext);

  function logout() {
    try {
      const logoutrequest = async () => {
        const res = await fetch("http://localhost:3000/api/auth/logout");
        const data = await res.json();
        if (data) {
          localStorage.removeItem("token");
          setUser(null);
          useNavigate("/");
          console.log("logout");
        }
      };
      logoutrequest();
    } catch (error) {
      console.log(error);
    }
  }

  console.log("user", user);

  useEffect(() => {
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const login = async () => {
          await fetch("http://localhost:3000/api/auth/userAuth")
            .then((res) => res.json())
            .then((data) => {
              if (data.success) {
                setUser(data.user);
              }
            });
        };
        login();
      }
    } catch (error) {
      console.log(error);
    }
  }, [setUser, user]);

  if (!user)
    return (
      <div>
        <Routes>
          <Route path="/landing" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/card" element={<Card />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    );

  return (
    <div>
      <Navbar logout={logout} />
      <Routes>
        <Route path="*" element={<Landing />} />
      </Routes>
    </div>
  );
}

export default App;
