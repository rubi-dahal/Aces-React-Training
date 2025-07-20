// Dashboard.jsx
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("mockToken");
    if (!token) {
      navigate("/login");
    }
  }, []);

  return <h2>Welcome to your dashboard!</h2>;
};

export default Dashboard;
