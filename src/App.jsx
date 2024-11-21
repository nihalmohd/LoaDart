import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './assets/pages/Home';
import TranspoterProfile from './assets/components/Transpoter/TranspoterProfile/TranspoterProfile';
import BrokerSide from './assets/pages/BrokerSide';
import TranspoterSide from './assets/pages/TranspoterSide';
import BrokerProfile from './assets/components/Broker/BrokerProfile/BrokerProfile';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Transpoter/*" element={<TranspoterSide />} />
        <Route path="/Transpoter/UpdateProfile" element={<TranspoterProfile />} />
        <Route path="/Broker/*" element={<BrokerSide />} />
        <Route path="/Broker/UpdateProfile" element={<BrokerProfile/>} />
      </Routes>
    </Router>
  );
};

export default App;
