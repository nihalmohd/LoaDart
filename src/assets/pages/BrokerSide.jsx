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
import Feedback from '../components/Broker/Feedback/Feedback';
import View from '../components/Broker/Schedule/View';
import YourLoads from '../components/Broker/Loads/YourLoads';
import YourTruck from '../components/Broker/Trucks/YourTruck';
import EditProfile from '../components/Broker/BrokerProfile/EditProfile';
import AddLoad from '../components/Broker/Loads/AddLoad';
import AddTruck from '../components/Broker/Trucks/AddTruck';
import PostTruck from '../components/Broker/Trucks/PostTruck';
import EditDocuments from '../components/Broker/BrokerProfile/EditDocuments';

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
          <Route path="YourLoads" element={<YourLoads />} />
          <Route path="Trucks" element={<SearchTruck />} />
          <Route path="YourTruck" element={<YourTruck />} />
          <Route path="Marketplace" element={<MarketPlaceTopButtons />} />
          <Route path="UpgradeMembership" element={<UpgradeMembership />} />
          <Route path="Help" element={<Help />} />
          <Route path="Feedback" element={<Feedback />} />
          <Route path="View" element={<View/>} />
          <Route path="EditProfile" element={<EditProfile/>} />
          <Route path="AddLoad" element={<AddLoad/>} />
          <Route path="AddTruck" element={<AddTruck/>} />
          <Route path="PostTruck" element={<PostTruck/>} />
          <Route path="EditDocuments" element={<EditDocuments/>} />
        </Routes>
      </div>
    </div>
  );
};

export default BrokerSide;
