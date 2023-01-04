import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import HomeLayout from "../components/Layouts/HomeLayout";

const ProtectedRoute = () => {
  return (
    <HomeLayout>
      <Outlet />
    </HomeLayout>
  );
};

export default ProtectedRoute;
