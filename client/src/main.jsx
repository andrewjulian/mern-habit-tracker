import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Error from "./Components/Error";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login";
import Landing from "./Components/Landing";
import SignUp from "./Components/SignUp";
import Navbar from "./Components/Navbar";
import { UserProvider } from "./Context/userContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: "/", element: <Login /> },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <SignUp /> },
      {
        path: "/home",
        element: <Navbar />,
        children: [{ path: "/home/landing", element: <Landing /> }],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  </React.StrictMode>
);
