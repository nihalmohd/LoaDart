import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Sidebar from '../components/Shipper/SideBar/Sidebar'
import TopButtons from '../components/Shipper/Dashboard/TopButtons'

const ShipperSide = () => {
  return (
    <div className='md:flex'>
     <Sidebar/>
     <div className="flex-1" >
     <Routes>
     <Route path="/" element={<TopButtons/>} />
     </Routes>

     </div>
    </div>
  )
}

export default ShipperSide