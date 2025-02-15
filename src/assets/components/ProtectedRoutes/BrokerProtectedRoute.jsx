import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const BrokerProtectedRoute = ({ children }) => {
  const brokerData = useSelector((state) => state.transporter);

  const hasValidData =
    brokerData &&
    brokerData.brokers_id &&
    brokerData.brokers_name &&
    brokerData.brokers_email &&
    brokerData.brokers_phone &&
    brokerData.users_id &&
    brokerData.users_name &&
    brokerData.users_mobile &&
    brokerData.user_types_id;

  console.log(hasValidData);

  return hasValidData ? children : <Navigate to="/" />;
};

export default BrokerProtectedRoute;
