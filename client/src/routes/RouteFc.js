import React from "react";
import { Routes, Route } from "react-router-dom";
import Forgot from "../pages/Auth/Forgot";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Project from "../pages/Project";
import Resource from "../pages/Resource";
import ProtectedRoute from "./ProductedRoute";

function RouteFC() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/resource" element={<Resource />} />
        </Route>
      </Routes>
    </>
  );
}

export default RouteFC;
