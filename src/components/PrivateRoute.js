import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  console.log("CHILD+++", props);
  const userData = useSelector((state) => state.auth.userData);
  console.log("userData", Object.keys(userData).length === 0);
  if (Object.keys(userData).length === 0) {
    return <Navigate to="/login" replace />;
  }

  return props.element;
};

export default ProtectedRoute;
