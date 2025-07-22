import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signin = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const goBack = () => {
    navigate(-1);
  };

  const handleLogin = async () => {
    try {
      const res = await fetch(
        "https://687af359abb83744b7ee4691.mockapi.io/user"
      ); // Replace with your real MockAPI URL
      const users = await res.json();

      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        localStorage.setItem("isAuthenticated", "true");
        localStorage.setItem("userId", user.id);
        localStorage.setItem("userEmail", user.email);
        toast.success("Logged in Successfully!");
        navigate("/");
      } else {
        toast.error("Invalid credentials");
      }
    } catch (err) {
      toast.error("Something went wrong!");
      console.error(err);
    }
  };

  return (
    <div className="relative flex justify-center items-center min-h-screen bg-[#0b0f1a] font-sans">
      <div className="container relative w-[350px] bg-white/5 rounded-[15px] p-6 text-center shadow-md backdrop-blur">
        <button
          onClick={goBack}
          className="w-[30px] h-[30px] absolute top-2 right-2 text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-colors duration-300"
        >
          x
        </button>
        <h2 className="text-white text-2xl font-bold mb-6">LOGIN</h2>

        <div className="input-group mb-4 text-left">
          <label className="block text-sm text-gray-400 mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 rounded bg-white/10 text-white text-sm outline-none"
          />
        </div>

        <div className="input-group mb-6 text-left">
          <label className="block text-sm text-gray-400 mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 rounded bg-white/10 text-white text-sm outline-none"
          />
        </div>

        <button
          onClick={handleLogin}
          className="w-full py-2 rounded-full bg-[#1f2d52] text-white font-bold hover:bg-[#293b6a] transition-colors"
        >
          LOGIN
        </button>

        <div className="footer flex justify-between mt-4 text-sm text-white">
          <Link to="/register" className="text-blue-400 hover:underline">
            REGISTER
          </Link>
          <Link to="#" className="text-blue-400 hover:underline">
            FORGOT PASSWORD
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
