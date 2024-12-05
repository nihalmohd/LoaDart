import React from 'react';
import { Routes, Route } from 'react-router-dom';


import Sidebar from '../components/Shipper/SideBar/Sidebar'
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
     <Route path="UpgradeMembership" element={<UpgradeMembership/>} />
     <Route path="Help" element={<Help/>} />
     <Route path="Feedback" element={<Feedback/>} />
     <Route path="View" element={<View/>} />
     <Route path="EditProfile" element={<EditProfile/>} />
     <Route path="AddLoad" element={<AddLoad/>} />
     <Route path="EditDocuments" element={<EditDocuments/>} />
     </Routes>

     </div>
    </div>
  )
}

export default ShipperSide