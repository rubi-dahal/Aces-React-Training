import React from "react";
import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePage from "./pages/SinglePage";
import LearningUseState from "./pages/LearningUseState";
import Signin from "./pages/Signin";
import Create from "./pages/Create";
import { ToastContainer } from "react-toastify";
import Edit from "./pages/Edit";
const App = () => {
  return (
    <div children="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single-page/:id" element={<SinglePage />} />
          <Route path="/learning-use-state" element={<LearningUseState />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/create" element={<Create />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </div>
  );
};

export default App;
