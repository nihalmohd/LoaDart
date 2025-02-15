import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Sidebar from '../components/Shipper/SideBar/ShipperSidebar'
import TopButtons from '../components/Shipper/Dashboard/TopButtons'
import MarketPlaceTopButtons from '../components/Shipper/MarketPlace/MarketPlaceTopButtons';
import Schedule from '../components/Shipper/Schedule/Schedule';
import TripRequest from '../components/Shipper/TripRequest/TripRequest';
import ShipperProfileDetails from '../components/Shipper/ShipperProfile/ShipperProfileDetails';
import Yourloads from '../components/Shipper/Loads/YourLoads';
import SearchTruck from '../components/Shipper/Trucks/SearchTruck';
import UpgradeMembership from '../components/Shipper/UpgradeMembership/UpgradeMembership';
import Help from '../components/Shipper/Help/Help';
import Feedback from '../components/Shipper/Feedback/Feedback';
import View from '../components/Shipper/Schedule/View';
import EditProfile from '../components/Shipper/ShipperProfile/EditProfile';
import AddLoad from '../components/Shipper/Loads/AddLoad';
import EditDocuments from '../components/Shipper/ShipperProfile/EditDocuments';
import ShipperProtectedRoute from '../components/ProtectedRoutes/ShipperProtectedRoute';
import ShipperSidebar from '../components/Shipper/SideBar/ShipperSidebar';
import EditBasicDetails from '../components/Shipper/ShipperProfile/EditBasicDetails';


const ShipperSide = () => {
  return (
    <div className='md:flex'>
     <ShipperSidebar/>
     <div className="flex-1" >
     <Routes>
     <Route path="/" element={<ShipperProtectedRoute><TopButtons/></ShipperProtectedRoute>} />
     <Route path="EditDocuments" element={<ShipperProtectedRoute><EditDocuments/></ShipperProtectedRoute>} />
     <Route path="EditBasicDetails" element={<ShipperProtectedRoute><EditBasicDetails/></ShipperProtectedRoute>} />
     <Route path="EditProfile" element={<ShipperProtectedRoute><EditProfile/></ShipperProtectedRoute>} />
     <Route path="Profile" element={<ShipperProtectedRoute><ShipperProfileDetails/></ShipperProtectedRoute>} />
     {/* <Route path="Schedule" element={<Schedule/>} />
     <Route path="TripRequests" element={<TripRequest/>} />
     <Route path="Marketplace" element={<MarketPlaceTopButtons/>} />
     <Route path="Loads" element={<Yourloads/>} />
     <Route path="YourLoads" element={<Yourloads/>} />
     <Route path="Trucks" element={<SearchTruck />} />
     <Route path="YourTrucks" element={<SearchTruck />} />
     <Route path="UpgradeMembership" element={<UpgradeMembership/>} />
     <Route path="Help" element={<Help/>} />
     <Route path="Feedback" element={<Feedback/>} />
     <Route path="View" element={<View/>} />
     <Route path="AddLoad" element={<AddLoad/>} /> */}
     </Routes>

     </div>
    </div>
  )
}

export default ShipperSide