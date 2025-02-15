import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserProtectedRoute = ({ children }) => {
  const userData = useSelector((state) => state.transporter);

  const hasValidData =
    userData &&
    userData.users_id &&
    userData.users_name &&
    userData.users_mobile &&
    userData.user_types_id;

  console.log(hasValidData);

  return hasValidData ? children : <Navigate to="/" />;
};

export default UserProtectedRoute;
