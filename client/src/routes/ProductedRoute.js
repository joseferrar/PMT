import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import HomeLayout from "../components/Layouts/HomeLayout";

const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const isLogin = localStorage.getItem("login");
  if (!isLogin) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <HomeLayout>
      <Outlet />
    </HomeLayout>
  );
};

export default ProtectedRoute;
