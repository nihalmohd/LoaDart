import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const DriverProtectedRoute = ({ children }) => {
  const driverData = useSelector((state) => state.transporter);

  const hasValidData =
    driverData &&
    driverData.drivers_id &&
    driverData.drivers_name &&
    driverData.drivers_email &&
    driverData.drivers_phone &&
    driverData.users_id &&
    driverData.users_name &&
    driverData.users_mobile &&
    driverData.user_types_id;

  console.log(hasValidData);

  return hasValidData ? children : <Navigate to="/" />;
};

export default DriverProtectedRoute;
