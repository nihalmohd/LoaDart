import React from 'react'
import Home from './assets/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TranspoterProfile from './assets/components/Transpoter/TranspoterProfile/TranspoterProfile';
import TranspoterDashboard from './assets/pages/TranspoterDashboard';
import BrokerProfile from './assets/components/Broker/BrokerProfile/BrokerProfile';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Transpoter/UpdateProfile" element={<TranspoterProfile />} />
      <Route path="/Broker/UpdateProfile" element={<BrokerProfile />} />
      <Route path="/Transpoter" element={<TranspoterDashboard />} />
      </Routes>
    </Router>
  )
}

export default App

