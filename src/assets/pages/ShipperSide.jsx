import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Sidebar from '../components/Shipper/SideBar/Sidebar'
import TopButtons from '../components/Shipper/Dashboard/TopButtons'
import MarketPlaceTopButtons from '../components/Shipper/MarketPlace/MarketPlaceTopButtons';
import Schedule from '../components/Shipper/Schedule/Schedule';
import TripRequest from '../components/Shipper/TripRequest/TripRequest';
import ShipperProfileDetails from '../components/Shipper/ShipperProfile/ShipperProfileDetails';

import SearchTruck from '../components/Shipper/Trucks/SearchTruck';
import Yourloads from '../components/Shipper/Loads/YourLoads';


const ShipperSide = () => {
  return (
    <div className='md:flex'>
     <Sidebar/>
     <div className="flex-1" >
     <Routes>
     <Route path="/" element={<TopButtons/>} />
     <Route path="Schedule" element={<Schedule/>} />
     <Route path="TripRequests" element={<TripRequest/>} />
     <Route path="Profile" element={<ShipperProfileDetails/>} />
     <Route path="Marketplace" element={<MarketPlaceTopButtons/>} />
     <Route path="Loads" element={<Yourloads/>} />
     <Route path="YourLoads" element={<Yourloads/>} />
     <Route path="Trucks" element={<SearchTruck />} />
     <Route path="YourTrucks" element={<SearchTruck />} />
     </Routes>

     </div>
    </div>
  )
}

export default ShipperSide