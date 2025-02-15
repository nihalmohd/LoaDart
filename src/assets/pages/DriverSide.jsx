import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Topbuttons from '../components/Driver/Dashboard/Topbuttons';
import MarketPlaceTopButtons from '../components/Driver/MarketPlace/MarketPlaceTopButtons';
import Schedule from '../components/Driver/Schedule/Schedule';
import TripRequest from '../components/Driver/TripRequest/TripRequest';
import DriverProfileDetails from '../components/Driver/DriverProfile/DriverProfileDetails';
import SearchLoads from '../components/Driver/Loads/SearchLoads';
import YourTruck from '../components/Driver/Trucks/YourTruck';
import UpgradeMembership from '../components/Driver/UpgradeMembership/UpgradeMembership';
import Help from '../components/Driver/Help/Help';
import Feedback from '../components/Driver/Feedback/Feedback';
import View from '../components/Driver/Schedule/View';
import PostTruck from '../components/Driver/Trucks/PostTruck';
import EditProfile from '../components/Driver/DriverProfile/EditProfile';
import AddTruck from '../components/Driver/Trucks/AddTruck';
import EditDocuments from '../components/Driver/DriverProfile/EditDocuments';
import DriverProtectedRoute from '../components/ProtectedRoutes/DriverProtectedRoute';
import DriverSidebar from '../components/Driver/Sidebar/DriverSidebar';
import EditBasicDetails from '../components/Driver/DriverProfile/EditBasicDetails';

const DriverSide = () => {
  return (
    <div className='md:flex'>
     <DriverSidebar/>
     <div className="flex-1" >
     <Routes>
          <Route path="/" element={<DriverProtectedRoute><Topbuttons /></DriverProtectedRoute>} />
          <Route path="EditDocuments" element={<DriverProtectedRoute><EditDocuments /></DriverProtectedRoute>} />
          <Route path="EditBasicDetails" element={<DriverProtectedRoute><EditBasicDetails /></DriverProtectedRoute>} />
          <Route path="EditProfile" element={<DriverProtectedRoute><EditProfile /></DriverProtectedRoute>} />
          <Route path="Profile" element={<DriverProtectedRoute><DriverProfileDetails /></DriverProtectedRoute>} />
          {/* <Route path="Schedule" element={<Schedule />} />
          <Route path="TripRequests" element={<TripRequest />} />
          <Route path="Marketplace" element={<MarketPlaceTopButtons />} />
          <Route path="Loads" element={<SearchLoads />} />
          <Route path="Trucks" element={<YourTruck />} />
          <Route path="UpgradeMembership" element={<UpgradeMembership />} />
          <Route path="Help" element={<Help />} />
          <Route path="Feedback" element={<Feedback />} />
          <Route path="View" element={<View />} />
          <Route path="AddTruck" element={<AddTruck />} />
          <Route path="PostTruck" element={<PostTruck />} /> */}

     </Routes>

     </div>
    </div>
  )
}

export default DriverSide