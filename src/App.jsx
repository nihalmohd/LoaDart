import React from 'react'
import Home from './assets/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TranspoterProfile from './assets/components/Transpoter/TranspoterProfile/TranspoterProfile';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Transpoter/UpdateProfile" element={<TranspoterProfile />} />
      </Routes>
    </Router>
  )
}

export default App

