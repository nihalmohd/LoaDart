import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Transpoter/Sidebar/Sidebar'; // Add Transpoter Sidebar
import TranspoterProfile from '../components/Transpoter/TranspoterProfile/TranspoterProfile';
import Dashboard from '../components/Transpoter/Dashboard/Dashboard';
import Topbuttons from '../components/Transpoter/Dashboard/Topbuttons';
import ScheduleButton from '../components/Transpoter/Schedule/ScheduleButton';
import TripRequestButtons from '../components/Transpoter/TripRequest/TripRequestButtons';
import TransporterProfileDetails from '../components/Transpoter/TranspoterProfile/TransporterProfileDetails';
import YourLoads from '../components/Transpoter/Loads/YourLoads';
import SearchLoads from '../components/Transpoter/Loads/SearchLoads';
import SearchTruck from '../components/Transpoter/Truck/SearchTruck';
import YourTruck from '../components/Transpoter/Truck/YourTruck';
import MarketPlaceTopButtons from '../components/Transpoter/Marketplace/MarketPlaceTopButtons';
import UpgradeMembership from '../components/Transpoter/UpgradeMembership/UpgradeMembership';
import Help from '../components/Transpoter/Help/Help';
import Feedback from '../components/Transpoter/Feedback/Feedback';


const TranspoterSide = () => {
  return (
    <div className="flex" >
      <Sidebar />
      <div className="flex-1" >
        <Routes>
        <Route path="/" element={<Topbuttons/>} />
        <Route path="Schedule" element={<ScheduleButton/>} />
        <Route path="TripRequests" element={<TripRequestButtons/>} />
        <Route path="Profile" element={<TransporterProfileDetails/>} />
        <Route path="Loads" element={<SearchLoads/>} />
        <Route path="YourLoads" element={<YourLoads/>} />
        <Route path="Trucks" element={<SearchTruck/>} />
        <Route path="YourTruck" element={<YourTruck/>} />
        <Route path="Marketplace" element={<MarketPlaceTopButtons/>} />
        <Route path="UpgradeMembership" element={<UpgradeMembership/>} />
        <Route path="Help" element={<Help/>} />
        <Route path="Feedback" element={<Feedback/>} />
        </Routes>
      </div>
    </div>
  );
};

export default TranspoterSide;
