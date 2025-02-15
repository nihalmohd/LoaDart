import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ShipperProtectedRoute = ({ children }) => {
  const shipperData = useSelector((state) => state.transporter);

  const hasValidData =
    shipperData &&
    shipperData.shippers_id &&
    shipperData.shippers_name &&
    shipperData.shippers_email &&
    shipperData.shippers_phone &&
    shipperData.users_id &&
    shipperData.users_name &&
    shipperData.users_mobile &&
    shipperData.user_types_id;

  console.log(hasValidData);

  return hasValidData ? children : <Navigate to="/" />;
};

export default ShipperProtectedRoute;
