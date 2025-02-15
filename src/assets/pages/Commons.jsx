import React from 'react'
import DriverSidebar from '../components/Driver/Sidebar/DriverSidebar';
import Sidebar from '../components/Transpoter/Sidebar/Sidebar'
import ShipperSidebar from '../components/Shipper/SideBar/ShipperSidebar';
import BrokerSidebar from '../components/Broker/Sidebar/BrokerSidebar';
import { Route, Routes } from 'react-router-dom';
import UserProtectedRoute from '../components/ProtectedRoutes/UserProtectedRoute';
import ScheduleButton from '../components/Transpoter/Schedule/ScheduleButton';
import TripRequestButtons from '../components/Transpoter/TripRequest/TripRequestButtons';
import SearchLoads from '../components/Transpoter/Loads/SearchLoads';
import YourLoads from '../components/Transpoter/Loads/YourLoads';
import YourTruck from '../components/Transpoter/Truck/YourTruck';
import SearchTruck from '../components/Transpoter/Truck/SearchTruck';
import MarketPlaceTopButtons from '../components/Transpoter/Marketplace/MarketPlaceTopButtons';
import UpgradeMembership from '../components/Transpoter/UpgradeMembership/UpgradeMembership';
import Help from '../components/Transpoter/Help/Help';
import Feedback from '../components/Transpoter/Feedback/Feedback';
import View from '../components/Transpoter/Schedule/View';
import AddLoad from '../components/Transpoter/Loads/AddLoad';
import AddTruck from '../components/Transpoter/Truck/AddTruck';
import PostTruck from '../components/Transpoter/Truck/PostTruck';
import Achievments from '../components/Transpoter/Achievments/Achievments';
import ViewBidsLoad from '../components/Transpoter/Bids/Loads/ViewBidsLoad';
import ViewBidsTruck from '../components/Transpoter/Bids/Trucks/ViewBidsTruck';
import Mybids from '../components/Transpoter/Bids/Loads/Mybids';
import MyBidsTruck from '../components/Transpoter/Bids/Trucks/MyBidsTruck';
import { useSelector } from 'react-redux';



const Commons = () => {
    const transporterData = useSelector((state) => state.transporter);


    let SidebarComponent = null;
    
    if (transporterData && transporterData.user_types_id) {
   
        switch (transporterData.user_types_id) {
            case "1":
                SidebarComponent = <DriverSidebar />;
                break;
            case "2":
                SidebarComponent = <Sidebar />;
                break;
            case "3":
                SidebarComponent = <BrokerSidebar />;
                break;
            case "4":
                SidebarComponent = <ShipperSidebar />;
                break;
            default:
                SidebarComponent = <div>No Sidebar Available</div>;
        }
    }

    return (
        <div className="md:flex">
           {SidebarComponent ? SidebarComponent : <div>Debug: No Sidebar Assigned</div>}
            <div className="flex-1">
                <Routes>
                    <Route path="Schedule" element={<UserProtectedRoute><ScheduleButton /></UserProtectedRoute>} />
                    <Route path="TripRequests" element={<UserProtectedRoute><TripRequestButtons /></UserProtectedRoute>} />
                    <Route path="Loads" element={<UserProtectedRoute><SearchLoads /></UserProtectedRoute>} />
                    <Route path="YourLoads" element={<UserProtectedRoute><YourLoads /></UserProtectedRoute>} />
                    <Route path="Trucks" element={<UserProtectedRoute><SearchTruck /></UserProtectedRoute>} />
                    <Route path="YourTruck" element={<UserProtectedRoute><YourTruck /></UserProtectedRoute>} />
                    <Route path="Marketplace" element={<UserProtectedRoute><MarketPlaceTopButtons /></UserProtectedRoute>} />
                    <Route path="UpgradeMembership" element={<UserProtectedRoute><UpgradeMembership /></UserProtectedRoute>} />
                    <Route path="Help" element={<UserProtectedRoute><Help /></UserProtectedRoute>} />
                    <Route path="Feedback" element={<UserProtectedRoute><Feedback /></UserProtectedRoute>} />
                    <Route path="View" element={<UserProtectedRoute><View /></UserProtectedRoute>} />
                    <Route path="AddLoad" element={<UserProtectedRoute><AddLoad /></UserProtectedRoute>} />
                    <Route path="AddTruck" element={<UserProtectedRoute><AddTruck /></UserProtectedRoute>} />
                    <Route path="PostTruck/:truck_id" element={<UserProtectedRoute><PostTruck /></UserProtectedRoute>} />
                    <Route path="Achievments" element={<UserProtectedRoute><Achievments /></UserProtectedRoute>} />
                    <Route path="ViewBidsLoad/:loads_id" element={<UserProtectedRoute><ViewBidsLoad /></UserProtectedRoute>} />
                    <Route path="ViewBidsTruck/:truck_id" element={<UserProtectedRoute><ViewBidsTruck /></UserProtectedRoute>} />
                    <Route path="ViewAllMyLoadBids/:loads_id" element={<UserProtectedRoute><Mybids /></UserProtectedRoute>} />
                    <Route path="ViewAllMyTruckBids/:truck_id" element={<UserProtectedRoute><MyBidsTruck /></UserProtectedRoute>} />
                </Routes>
            </div>
        </div>
    );
};

export default Commons;