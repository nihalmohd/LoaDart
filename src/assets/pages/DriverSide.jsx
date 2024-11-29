import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Sidebar from '../components/Driver/Sidebar/Sidebar';
import Topbuttons from '../components/Driver/Dashboard/Topbuttons';
import MarketPlaceTopButtons from '../components/Driver/MarketPlace/MarketPlaceTopButtons';
import Schedule from '../components/Driver/Schedule/Schedule';
import TripRequest from '../components/Driver/TripRequest/TripRequest';
import DriverProfileDetails from '../components/Driver/DriverProfile/DriverProfileDetails';
import SearchLoads from '../components/Driver/Loads/SearchLoads';
import YourTruck from '../components/Driver/Trucks/YourTruck';
import UpgradeMembership from '../components/Driver/UpgradeMembership/UpgradeMembership';
import Help from '../components/Driver/Help/Help';

const DriverSide = () => {
  return (
    <div className='md:flex'>
     <Sidebar/>
     <div className="flex-1" >
     <Routes>
     <Route path="/" element={<Topbuttons/>} />
     <Route path="Schedule" element={<Schedule/>} />
     <Route path="TripRequests" element={<TripRequest/>} />
     <Route path="Profile" element={<DriverProfileDetails/>} />
     <Route path="Marketplace" element={<MarketPlaceTopButtons/>} />
     <Route path="Loads" element={<SearchLoads/>} />
     <Route path="Trucks" element={<YourTruck />} />
     <Route path="UpgradeMembership" element={<UpgradeMembership/>} />
     <Route path="Help" element={<Help/>} />
     {/* <Route path="Feedback" element={<Feedback/>} /> */}
     {/* <Route path="View" element={<View/>} /> */}
     </Routes>

     </div>
    </div>
  )
}

export default DriverSide