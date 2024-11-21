import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Transpoter/Sidebar/Sidebar'; // Add Transpoter Sidebar
import TranspoterProfile from '../components/Transpoter/TranspoterProfile/TranspoterProfile';
import Dashboard from '../components/Transpoter/Dashboard/Dashboard';
import Topbuttons from '../components/Transpoter/Dashboard/Topbuttons';

const TranspoterSide = () => {
  return (
    <div className="flex" >
      <Sidebar />
      <div className="flex-1" >
        <Routes>
        <Route path="*" element={<Topbuttons/>} />
        </Routes>
      </div>
    </div>
  );
};

export default TranspoterSide;
