import React from 'react';
import { Routes, Route } from 'react-router-dom';

const DriverSide = () => {
  return (
    <div className='md:flex'>
     {/* <Sidebar/> */}
     <div className="flex-1" >
     <Routes>
     {/* <Route path="/" element={<TopButtons/>} /> */}
     {/* <Route path="Schedule" element={<Schedule/>} /> */}
     {/* <Route path="TripRequests" element={<TripRequest/>} /> */}
     {/* <Route path="Profile" element={<ShipperProfileDetails/>} /> */}
     {/* <Route path="Marketplace" element={<MarketPlaceTopButtons/>} /> */}
     {/* <Route path="Loads" element={<Yourloads/>} /> */}
     {/* <Route path="YourLoads" element={<Yourloads/>} /> */}
     {/* <Route path="Trucks" element={<SearchTruck />} /> */}
     {/* <Route path="YourTrucks" element={<SearchTruck />} /> */}
     {/* <Route path="UpgradeMembership" element={<UpgradeMembership/>} /> */}
     {/* <Route path="Help" element={<Help/>} /> */}
     {/* <Route path="Feedback" element={<Feedback/>} /> */}
     {/* <Route path="View" element={<View/>} /> */}
     </Routes>

     </div>
    </div>
  )
}

export default DriverSide