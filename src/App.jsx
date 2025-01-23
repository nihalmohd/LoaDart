import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import TranspoterProfile from './assets/components/Transpoter/TranspoterProfile/TranspoterProfile';
import BrokerSide from './assets/pages/BrokerSide';
import TranspoterSide from './assets/pages/TranspoterSide';
import BrokerProfile from './assets/components/Broker/BrokerProfile/BrokerProfile';
import ShipperSide from './assets/pages/ShipperSide';
import ShipperProfile from './assets/components/Shipper/ShipperProfile/ShipperProfile';
import DriverProfile from './assets/components/Driver/DriverProfile/DriverProfile';
import DriverSide from './assets/pages/DriverSide';
import Transpoter from './assets/components/Signup/Transpoter';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/TransporterSignUp" element={<Transpoter/>} />
        <Route path="/BrokerSignUp" element={<Home />} />
        <Route path="/ShipperSignUp" element={<Home />} />
        <Route path="/DriverSignUp" element={<Home />} /> */}
        <Route path="/Transpoter/*" element={<TranspoterSide />} />
        <Route path="/Transpoter/UpdateProfile/:mobileNumber" element={<TranspoterProfile />} />
        <Route path="/Broker/*" element={<BrokerSide />} />
        <Route path="/Broker/UpdateProfile/:mobileNumber" element={<BrokerProfile/>} />
        <Route path="/Shipper/*" element={<ShipperSide/>} />
        <Route path="/Shipper/UpdateProfile/:mobileNumber" element={<ShipperProfile/>} />
        <Route path="/Driver/*" element={<DriverSide/>} />
        <Route path="/Driver/UpdateProfile/:mobileNumber" element={<DriverProfile/>} />
      </Routes>
    </Router>
  );
};

export default App;
