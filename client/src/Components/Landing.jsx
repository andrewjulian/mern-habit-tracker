import React, { useEffect } from "react";

const Landing = () => {
  const fetchUser = async () => {
    try {
      const response = await fetch("http://localhost:3000/api/user/user", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <div>
      <h1>Hi!</h1>
    </div>
  );
};

export default Landing;
