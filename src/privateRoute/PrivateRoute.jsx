import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { selectAuth } from "../redux/auth/authSlice";

const PrivateRoute = () => {
  const { isAuthenticated } = useSelector(selectAuth);
  console.log("isauthenticated",isAuthenticated)
  return isAuthenticated === true ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
