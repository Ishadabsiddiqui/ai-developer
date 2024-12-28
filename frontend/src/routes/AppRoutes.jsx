import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Login from "../screen/Login";
import Register from "../screen/Register";
import Home from "../screen/Home";
import Project from "../screen/Project";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/project" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
