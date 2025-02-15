import React from 'react';
import { Routes, Route } from 'react-router-dom';


// import ScheduleButton from '../components/Broker/Schedule/ScheduleButton';
import Topbuttons from '../components/Broker/Dashboard/Topbuttons';
import BrokerProfileDetails from '../components/Broker/BrokerProfile/BrokerProfileDetails';
import EditProfile from '../components/Broker/BrokerProfile/EditProfile';
import EditDocuments from '../components/Broker/BrokerProfile/EditDocuments';
import BrokerProtectedRoute from '../components/ProtectedRoutes/BrokerProtectedRoute';
import EditBasicDetails from '../components/Broker/BrokerProfile/EditBasicDetails';

import ScheduleButton from '../components/Transpoter/Schedule/ScheduleButton';
import TripRequestButtons from '../components/Transpoter/TripRequest/TripRequestButtons';
import SearchLoads from '../components/Transpoter/Loads/SearchLoads';
import SearchTruck from '../components/Transpoter/Truck/SearchTruck';
import YourLoads from '../components/Transpoter/Loads/YourLoads';
import YourTruck from '../components/Transpoter/Truck/YourTruck';
import MarketPlaceTopButtons from '../components/Transpoter/Marketplace/MarketPlaceTopButtons';
import UpgradeMembership from '../components/Transpoter/UpgradeMembership/UpgradeMembership';
import View from '../components/Transpoter/Schedule/View';
import Help from '../components/Transpoter/Help/Help';
import Feedback from '../components/Transpoter/Feedback/Feedback';
import AddLoad from '../components/Transpoter/Loads/AddLoad';
import AddTruck from '../components/Transpoter/Truck/AddTruck';
import PostTruck from '../components/Transpoter/Truck/PostTruck';
import BrokerSidebar from '../components/Broker/Sidebar/BrokerSidebar';

const BrokerSide = () => {
  return (
    <div className="md:flex ">
      <BrokerSidebar />
      <div className="flex-1" >
        <Routes>
        <Route path="/" element={<BrokerProtectedRoute><Topbuttons/></BrokerProtectedRoute>} />
          <Route path="EditBasicDetails" element={<BrokerProtectedRoute><EditBasicDetails/></BrokerProtectedRoute>} />
          <Route path="EditDocuments" element={<BrokerProtectedRoute><EditDocuments/></BrokerProtectedRoute>} />
          <Route path="EditProfile" element={<BrokerProtectedRoute><EditProfile/></BrokerProtectedRoute>} />
          <Route path="Profile" element={<BrokerProtectedRoute><BrokerProfileDetails/></BrokerProtectedRoute>} />
          {/* <Route path="Schedule" element={<BrokerProtectedRoute><ScheduleButton /></BrokerProtectedRoute>} />
          <Route path="TripRequests" element={<BrokerProtectedRoute><TripRequestButtons/></BrokerProtectedRoute>} />
          <Route path="Loads" element={<BrokerProtectedRoute><SearchLoads /></BrokerProtectedRoute>} />
          <Route path="YourLoads" element={<BrokerProtectedRoute><YourLoads /></BrokerProtectedRoute>} />
          <Route path="Trucks" element={<BrokerProtectedRoute><SearchTruck /></BrokerProtectedRoute>} />
          <Route path="YourTruck" element={<BrokerProtectedRoute><YourTruck /></BrokerProtectedRoute>} />
          <Route path="Marketplace" element={<BrokerProtectedRoute><MarketPlaceTopButtons /></BrokerProtectedRoute>} />
          <Route path="UpgradeMembership" element={<BrokerProtectedRoute><UpgradeMembership /></BrokerProtectedRoute>} />
          <Route path="Help" element={<BrokerProtectedRoute><Help /></BrokerProtectedRoute>} />
          <Route path="Feedback" element={<BrokerProtectedRoute><Feedback /></BrokerProtectedRoute>} />
          <Route path="View" element={<BrokerProtectedRoute><View/></BrokerProtectedRoute>} />
          <Route path="AddLoad" element={<BrokerProtectedRoute><AddLoad/></BrokerProtectedRoute>} />
          <Route path="AddTruck" element={<BrokerProtectedRoute><AddTruck/></BrokerProtectedRoute>} />
          <Route path="PostTruck" element={<BrokerProtectedRoute><PostTruck/></BrokerProtectedRoute>} /> */}
        </Routes>
      </div>
    </div>
  );
};

export default BrokerSide;
