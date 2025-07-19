import React from "react";
import "./App.css";
import Home from "./components/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SinglePage from "./components/SinglePage";
import LearningUseState from "./components/LearningUseState";
import Signin from "./components/Signin";
const App = () => {
  return (
    <div children="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/single-page/:id" element={<SinglePage />} />
          <Route path="/learning-use-state" element={<LearningUseState />} />
          <Route path="/signin" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
