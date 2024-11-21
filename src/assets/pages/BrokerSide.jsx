import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from '../components/Broker/Sidebar/Sidebar';

import ScheduleButton from '../components/Broker/Schedule/ScheduleButton';
import Topbuttons from '../components/Broker/Dashboard/Topbuttons';
import TripRequestButton from '../components/Broker/TripRequest/TripRequestButton';
import BrokerProfileDetails from '../components/Broker/BrokerProfile/BrokerProfileDetails';
import SearchLoads from '../components/Broker/Loads/SearchLoads';
import SearchTruck from '../components/Broker/Trucks/SearchTruck';
import MarketPlaceTopButtons from '../components/Broker/MarketPlace/MarketPlaceTopButtons';
import UpgradeMembership from '../components/Broker/UpgradeMembership/UpgradeMembership';
import Help from '../components/Broker/Help/Help';

const BrokerSide = () => {
  return (
    <div className="md:flex ">
      <Sidebar />
      <div className="flex-1" >
        <Routes>
        <Route path="/" element={<Topbuttons/>} />
          <Route path="Schedule" element={<ScheduleButton />} />
          <Route path="TripRequests" element={<TripRequestButton/>} />
          <Route path="Profile" element={<BrokerProfileDetails/>} />
          <Route path="Loads" element={<SearchLoads />} />
          <Route path="Trucks" element={<SearchTruck />} />
          <Route path="Marketplace" element={<MarketPlaceTopButtons />} />
          <Route path="UpgradeMembership" element={<UpgradeMembership />} />
          <Route path="Help" element={<Help />} />
          <Route path="Feedback" element={<ScheduleButton />} />
        </Routes>
      </div>
    </div>
  );
};

export default BrokerSide;
