import React from 'react'
import Home from './assets/pages/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App

