import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const TransporterProtectedRoute = ({ children }) => {

  const transporterData = useSelector((state) => state.transporter);


  const hasValidData =
    transporterData &&
    transporterData.transporters_id &&
    transporterData.transporters_name &&
    transporterData.company &&
    transporterData.transporters_email &&
    transporterData.transporters_phone &&
    transporterData.users_id &&
    transporterData.users_name &&
    transporterData.users_mobile &&
    transporterData.user_types_id;

  console.log(hasValidData);
  
  return hasValidData ? children : <Navigate to="/" />;
};

export default TransporterProtectedRoute;
