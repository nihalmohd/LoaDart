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
import View from '../components/Transpoter/Schedule/View';
import EditProfile from '../components/Transpoter/TranspoterProfile/EditProfile';
import AddLoad from '../components/Transpoter/Loads/AddLoad';
import AddTruck from '../components/Transpoter/Truck/AddTruck';
import PostTruck from '../components/Transpoter/Truck/PostTruck';
import EditDocuments from '../components/Transpoter/TranspoterProfile/EditDocuments';
import EditBasicDetails from '../components/Transpoter/TranspoterProfile/EditBasicDetails';
import Achievments from '../components/Transpoter/Achievments/Achievments';
import TransporterProtectedRoute from '../components/ProtectedRoutes/TransporterProtectedRoute';
import ViewBidsLoad from '../components/Transpoter/Bids/Loads/ViewBidsLoad';
import ViewBidsTruck from '../components/Transpoter/Bids/Trucks/ViewBidsTruck';
import Mybids from '../components/Transpoter/Bids/Loads/Mybids';


const TranspoterSide = () => {
  return (
    <div className="md:flex" >
      <Sidebar />
      <div className="flex-1" >
        <Routes>
        <Route path="/" element={<TransporterProtectedRoute><Topbuttons/></TransporterProtectedRoute>} />
        <Route path="Schedule" element={<TransporterProtectedRoute><ScheduleButton/></TransporterProtectedRoute>} />
        <Route path="TripRequests" element={<TransporterProtectedRoute><TripRequestButtons/></TransporterProtectedRoute>} />
        <Route path="Profile" element={<TransporterProtectedRoute><TransporterProfileDetails/></TransporterProtectedRoute>} />
        <Route path="Loads" element={<TransporterProtectedRoute><SearchLoads/></TransporterProtectedRoute>} />
        <Route path="YourLoads" element={<TransporterProtectedRoute><YourLoads/></TransporterProtectedRoute>} />
        <Route path="Trucks" element={<TransporterProtectedRoute><SearchTruck/></TransporterProtectedRoute>} />
        <Route path="YourTruck" element={<TransporterProtectedRoute><YourTruck/></TransporterProtectedRoute>} />
        <Route path="Marketplace" element={<TransporterProtectedRoute><MarketPlaceTopButtons/></TransporterProtectedRoute>} />
        <Route path="UpgradeMembership" element={<TransporterProtectedRoute><UpgradeMembership/></TransporterProtectedRoute>} />
        <Route path="Help" element={<TransporterProtectedRoute><Help/></TransporterProtectedRoute>} />
        <Route path="Feedback" element={<TransporterProtectedRoute><Feedback/></TransporterProtectedRoute>} />
        <Route path="View" element={<TransporterProtectedRoute><View/></TransporterProtectedRoute>} />
        <Route path="EditProfile" element={<TransporterProtectedRoute><EditProfile/></TransporterProtectedRoute>} />
        <Route path="AddLoad" element={<TransporterProtectedRoute><AddLoad/></TransporterProtectedRoute>} />
        <Route path="AddTruck" element={<TransporterProtectedRoute><AddTruck/></TransporterProtectedRoute>} />
        <Route path="PostTruck/:truck_id" element={<TransporterProtectedRoute><PostTruck/></TransporterProtectedRoute>} />
        <Route path="EditDocuments" element={<TransporterProtectedRoute><EditDocuments/></TransporterProtectedRoute>} />
        <Route path="EditBasicDetails" element={<TransporterProtectedRoute><EditBasicDetails/></TransporterProtectedRoute>} />
        <Route path="Achievments" element={<TransporterProtectedRoute><Achievments/></TransporterProtectedRoute>} />
        <Route path="ViewBidsLoad/:loads_id" element={<TransporterProtectedRoute><ViewBidsLoad/></TransporterProtectedRoute>} />
        <Route path="ViewBidsTruck/:truck_id" element={<TransporterProtectedRoute><ViewBidsTruck/></TransporterProtectedRoute>} />
        <Route path="ViewAllMyLoadBids/:loads_id" element={<TransporterProtectedRoute><Mybids/></TransporterProtectedRoute>} />
        </Routes>
      </div>
    </div>
  );
};

export default TranspoterSide;
