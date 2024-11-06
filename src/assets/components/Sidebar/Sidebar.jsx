import React from 'react';
import { FaHome, FaClock, FaTruck, FaUser, FaBox, FaStore, FaArrowRight, FaQuestionCircle, FaComments, FaSignOutAlt } from 'react-icons/fa';

function Sidebar() {
    return (
        <div className="w-64 h-screen bg-white shadow-lg flex flex-col items-center py-6">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-8">
                <FaTruck className="text-purple-600 text-3xl" />
                <h1 className="text-2xl font-bold text-purple-600">LoaDart</h1>
            </div>

            {/* Profile Section */}
            <div className="flex flex-col items-center mb-8">
                <img
                    src="https://via.placeholder.com/100"
                    alt="Profile"
                    className="w-20 h-20 rounded-full mb-2"
                />
                <h2 className="text-lg font-semibold">John Newman</h2>
                <p className="text-sm text-gray-500">Transporter</p>
            </div>

            {/* Menu Items */}
            <nav className="flex flex-col w-full px-6 space-y-4">
                <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
                    <FaHome />
                    <span>Dashboard</span>
                </a>

                <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
                    <FaClock />
                    <span>Schedule</span>
                </a>

                <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
                    <FaTruck />
                    <span>Trip Requests</span>
                </a>

                <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
                    <FaUser />
                    <span>Profile</span>
                </a>

                <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
                    <FaBox />
                    <span>Loads</span>
                </a>

                {/* Trucks with Sub-menu */}
                <div className="flex flex-col space-y-1">
                    <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
                        <FaTruck className="text-purple-600" />
                        <span className="text-purple-600 font-semibold">Trucks</span>
                    </a>
                    <div className="pl-8 text-gray-600 space-y-1">
                        <a href="#" className="hover:text-purple-600">Search Truck</a>
                        <a href="#" className="hover:text-purple-600">Your Trucks</a>
                        <a href="#" className="hover:text-purple-600">Post Truck</a>
                    </div>
                </div>

                <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
                    <FaStore />
                    <span>Marketplace</span>
                </a>

                <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
                    <FaArrowRight />
                    <span>Upgrade Membership</span>
                </a>

                <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
                    <FaQuestionCircle />
                    <span>Help</span>
                </a>

                <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
                    <FaComments />
                    <span>Feedback</span>
                </a>

                <a href="#" className="flex items-center space-x-2 text-gray-700 hover:text-purple-600">
                    <FaSignOutAlt />
                    <span>Logout</span>
                </a>
            </nav>
        </div>
    );
}

export default Sidebar;
