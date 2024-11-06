import React from 'react'
import Home from './assets/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TranspoterProfile from './assets/components/Transpoter/TranspoterProfile/TranspoterProfile';
import TranspoterDashboard from './assets/pages/TranspoterDashboard';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Transpoter/UpdateProfile" element={<TranspoterProfile />} />
      <Route path="/Transpoter/Dashboard" element={<TranspoterDashboard />} />
      </Routes>
    </Router>
  )
}

export default App

