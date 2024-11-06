import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineClockCircle, AiOutlineUser, AiOutlineQuestionCircle } from 'react-icons/ai';
import { HiOutlineTruck } from 'react-icons/hi';
import { IoCubeOutline } from "react-icons/io5";
import { LiaStoreAltSolid } from "react-icons/lia";
import { BiMessageError } from "react-icons/bi";
import { LuLogOut } from "react-icons/lu";
import { RxUpdate } from "react-icons/rx";
import { MdOutlineRoute } from "react-icons/md";

function Sidebar() {
    const [isTrucksOpen, setIsTrucksOpen] = useState(false);
    const [activeItem, setActiveItem] = useState(null);


    const toggleTrucks = () => {
        setIsTrucksOpen(!isTrucksOpen);
    };

    const handleMenuItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div className="w-64 h-full bg-white shadow-lg flex flex-col items-center py-6">
         
            <div className="w-9/12 h-full flex justify-end items-end">
                <div className="w-[100px] h-[35px] flex justify-end items-end">
                    <img src="/images/ab6aaab828b7c3f0ef708693166c9def.png" className="w-full h-full object-cover" alt="Logo" />
                </div>
                <div className="w-72 md:w-80 h-full">
                    <div className="w-full h-full flex items-center">
                        <h1 className="font-nexa text-[23px] text-[#5B297E] font-semibold">LoaDart</h1>
                    </div>
                </div>
            </div>

           
            <div className="flex flex-col items-center mb-8 mt-6">
                <img
                    src="\images\e79560b9ae8865c9906e28d4a695c379.png"
                    alt="Profile"
                    className="w-20 h-20 object-cover object-[20%] rounded-full mb-2"
                />
                <h2 className="text-lg font-semibold">John Newman</h2>
                <p className="text-sm text-gray-500">Transporter</p>
            </div>

            
            <nav className="flex flex-col w-full px-6 space-y-4 ml-4">
                <a
                    href="#"
                    onClick={() => handleMenuItemClick('Dashboard')}
                    className={`flex items-center space-x-2 ${activeItem === 'Dashboard' ? 'text-purple-600' : 'text-gray-700'} hover:text-purple-600`}
                >
                    <div className="p-2">
                        <AiOutlineHome />
                    </div>
                    <span className="font-inter">Dashboard</span>
                </a>

                <a
                    href="#"
                    onClick={() => handleMenuItemClick('Schedule')}
                    className={`flex items-center space-x-2 ${activeItem === 'Schedule' ? 'text-purple-600' : 'text-gray-700'} hover:text-purple-600`}
                >
                    <div className="p-2">
                        <AiOutlineClockCircle />
                    </div>
                    <span className="font-inter">Schedule</span>
                </a>

                <a
                    href="#"
                    onClick={() => handleMenuItemClick('Trip Requests')}
                    className={`flex items-center space-x-2 ${activeItem === 'Trip Requests' ? 'text-purple-600' : 'text-gray-700'} hover:text-purple-600`}
                >
                    <div className="p-2">
                        <MdOutlineRoute />
                    </div>
                    <span className="font-inter">Trip Requests</span>
                </a>

                <a
                    href="#"
                    onClick={() => handleMenuItemClick('Profile')}
                    className={`flex items-center space-x-2 ${activeItem === 'Profile' ? 'text-purple-600' : 'text-gray-700'} hover:text-purple-600`}
                >
                    <div className="p-2">
                        <AiOutlineUser />
                    </div>
                    <span className="font-inter">Profile</span>
                </a>

                <a
                    href="#"
                    onClick={() => handleMenuItemClick('Loads')}
                    className={`flex items-center space-x-2 ${activeItem === 'Loads' ? 'text-purple-600' : 'text-gray-700'} hover:text-purple-600`}
                >
                    <div className="p-2">
                        <IoCubeOutline />
                    </div>
                    <span className="font-inter">Loads</span>
                </a>

                
                <div className="flex flex-col space-y-1">
                    <div
                        onClick={() => {
                            toggleTrucks();
                            handleMenuItemClick('Trucks');
                        }}
                        className={`flex items-center space-x-2 ${activeItem === 'Trucks' ? 'text-purple-600' : 'text-gray-700'} hover:text-purple-600 cursor-pointer`}
                    >
                        <div className="p-2 text-purple-600">
                            <HiOutlineTruck />
                        </div>
                        <span className="font-semibold">Trucks</span>
                    </div>
                    {isTrucksOpen && (
                        <div className="pl-10 text-gray-600 space-y-1">
                            <a href="#" className="hover:text-purple-600">Search Truck</a>
                            <a href="#" className="hover:text-purple-600">Your Trucks</a>
                            <a href="#" className="hover:text-purple-600">Post Truck</a>
                        </div>
                    )}
                </div>

                <a
                    href="#"
                    onClick={() => handleMenuItemClick('Marketplace')}
                    className={`flex items-center space-x-2 ${activeItem === 'Marketplace' ? 'text-purple-600' : 'text-gray-700'} hover:text-purple-600`}
                >
                    <div className="p-2">
                        <LiaStoreAltSolid />
                    </div>
                    <span>Marketplace</span>
                </a>

                <a
                    href="#"
                    onClick={() => handleMenuItemClick('Upgrade Membership')}
                    className={`flex items-center space-x-2 ${activeItem === 'Upgrade Membership' ? 'text-purple-600' : 'text-gray-700'} hover:text-purple-600`}
                >
                    <div className="p-2">
                        <RxUpdate />
                    </div>
                    <span>Upgrade Membership</span>
                </a>

                <a
                    href="#"
                    onClick={() => handleMenuItemClick('Help')}
                    className={`flex items-center space-x-2 ${activeItem === 'Help' ? 'text-purple-600' : 'text-gray-700'} hover:text-purple-600`}
                >
                    <div className="p-2">
                        <AiOutlineQuestionCircle />
                    </div>
                    <span>Help</span>
                </a>

                <a
                    href="#"
                    onClick={() => handleMenuItemClick('Feedback')}
                    className={`flex items-center space-x-2 ${activeItem === 'Feedback' ? 'text-purple-600' : 'text-gray-700'} hover:text-purple-600`}
                >
                    <div className="p-2">
                        <BiMessageError />
                    </div>
                    <span>Feedback</span>
                </a>

                <a
                    href="#"
                    onClick={() => handleMenuItemClick('Logout')}
                    className={`flex items-center space-x-2 ${activeItem === 'Logout' ? 'text-purple-600' : 'text-gray-700'} hover:text-purple-600`}
                >
                    <div className="p-2">
                        <LuLogOut />
                    </div>
                    <span>Logout</span>
                </a>
            </nav>
        </div>
    );
}

export default Sidebar;
