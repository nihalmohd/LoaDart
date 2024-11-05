import React from 'react'
import Home from './assets/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Transpoter from './assets/components/Signup/Transpoter';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

