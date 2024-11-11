import React, { useState } from 'react';
import { AiOutlineHome, AiOutlineClockCircle, AiOutlineUser, AiOutlineQuestionCircle } from 'react-icons/ai';
import { HiOutlineTruck } from 'react-icons/hi';
import { IoCubeOutline } from "react-icons/io5";
import { LiaStoreAltSolid } from "react-icons/lia";
import { BiMessageError } from "react-icons/bi";
import { LuLogOut } from "react-icons/lu";
import { RxUpdate } from "react-icons/rx";
import { MdOutlineRoute } from "react-icons/md";

import Topbuttons from '../Dashboard/Topbuttons';
import ScheduleButton from '../Schedule/ScheduleButton';
import TripRequestButtons from '../TripRequest/TripRequestButtons';

function Sidebar() {
    const [isTrucksOpen, setIsTrucksOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('Dashboard');


    const toggleTrucks = () => {
        setIsTrucksOpen(!isTrucksOpen);
    };

    const handleMenuItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <div className='flex'>

        <div className=" fixed top-0 left-0 w-[260px] h-full bg-white shadow-lg flex flex-col items-center  z-50 py-6 border-2  overflow-y-scroll overflow-x-hidden  ">
         
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
                    className={`flex items-center space-x-2 ${activeItem === 'Dashboard' ? 'text-[#5B297E]' : 'text-gray-700'} hover:text-[#5B297E]`}
                >
                    <div className="p-2">
                        <AiOutlineHome />
                    </div>
                    <span className="font-inter font-semibold text-sm">Dashboard</span>
                </a>

                <a
                    href="#"
                    onClick={() => handleMenuItemClick('Schedule')}
                    className={`flex items-center space-x-2 ${activeItem === 'Schedule' ? 'text-[#5B297E]' : 'text-gray-700'} hover:text-[#5B297E]`}
                >
                    <div className="p-2">
                        <AiOutlineClockCircle />
                    </div>
                    <span className="font-inter font-semibold text-sm">Schedule</span>
                </a>

                <a
                    href="#"
                    onClick={() => handleMenuItemClick('Trip Requests')}
                    className={`flex items-center space-x-2 ${activeItem === 'Trip Requests' ? 'text-[#5B297E]' : 'text-gray-700'} hover:text-[#5B297E]`}
                >
                    <div className="p-2">
                        <MdOutlineRoute />
                    </div>
                    <span className="font-inter font-semibold text-sm">Trip Requests</span>
                </a>

                <a
                    href="#"
                    onClick={() => handleMenuItemClick('Profile')}
                    className={`flex items-center space-x-2 ${activeItem === 'Profile' ? 'text-[#5B297E]' : 'text-gray-700'} hover:text-[#5B297E]`}
                >
                    <div className="p-2">
                        <AiOutlineUser />
                    </div>
                    <span className="font-inter font-semibold text-sm">Profile</span>
                </a>

                <a
                    href="#"
                    onClick={() => handleMenuItemClick('Loads')}
                    className={`flex items-center space-x-2 ${activeItem === 'Loads' ? 'text-[#5B297E]' : 'text-gray-700'} hover:text-[#5B297E]`}
                >
                    <div className="p-2 ">
                        <IoCubeOutline />
                    </div>
                    <span className="font-inter font-semibold text-sm">Loads</span>
                </a>

                
                <div className="flex flex-col space-y-1">
                    <div
                        onClick={() => {
                            toggleTrucks();
                            handleMenuItemClick('Trucks');
                        }}
                        className={`flex items-center space-x-2 ${activeItem === 'Trucks' ? 'text-[#5B297E]' : 'text-gray-700'} hover:text-[#5B297E] cursor-pointer`}
                    >
                        <div className="p-2 ">
                            <HiOutlineTruck />
                        </div>
                        <span className="font-semibold font-inter text-sm">Trucks</span>
                    </div>
                    {isTrucksOpen && (
                        <div className="pl-10 text-gray-600 space-y-1">
                            <a href="#" className="hover:text-[#5B297E]">Search Truck</a>
                            <a href="#" className="hover:text-[#5B297E]">Your Trucks</a>
                            <a href="#" className="hover:text-[#5B297E]">Post Truck</a>
                        </div>
                    )}
                </div>

                <a
                    href="#"
                    onClick={() => handleMenuItemClick('Marketplace')}
                    className={`flex items-center space-x-2 ${activeItem === 'Marketplace' ? 'text-[#5B297E]' : 'text-gray-700'} hover:text-[#5B297E]`}
                >
                    <div className="p-2">
                        <LiaStoreAltSolid />
                    </div>
                    <span className=' font-inter font-semibold text-sm'>Marketplace</span>
                </a>

                <a
                    href="#"
                    onClick={() => handleMenuItemClick('Upgrade Membership')}
                    className={`flex items-center space-x-2 ${activeItem === 'Upgrade Membership' ? 'text-[#5B297E]' : 'text-gray-700'} hover:text-[#5B297E]`}
                >
                    <div className="p-2">
                        <RxUpdate />
                    </div>
                    <span className=' font-inter font-semibold text-sm'>Upgrade Membership</span>
                </a>

                <a
                    href="#"
                    onClick={() => handleMenuItemClick('Help')}
                    className={`flex items-center space-x-2 ${activeItem === 'Help' ? 'text-[#5B297E]' : 'text-gray-700'} hover:text-[#5B297E]`}
                >
                    <div className="p-2">
                        <AiOutlineQuestionCircle />
                    </div>
                    <span className=' font-inter font-semibold text-sm'>Help</span>
                </a>

                <a
                    href="#"
                    onClick={() => handleMenuItemClick('Feedback')}
                    className={`flex items-center space-x-2 ${activeItem === 'Feedback' ? 'text-[#5B297E]' : 'text-gray-700'} hover:text-[#5B297E]`}
                >
                    <div className="p-2">
                        <BiMessageError />
                    </div>
                    <span className=' font-inter font-semibold text-sm'>Feedback</span>
                </a>

                <a
                    href="#"
                    onClick={() => handleMenuItemClick('Logout')}
                    className={`flex items-center space-x-2 ${activeItem === 'Logout' ? 'text-[#5B297E]' : 'text-gray-700'} hover:text-[#5B297E]`}
                >
                    <div className="p-2">
                        <LuLogOut />
                    </div>
                    <span className=' font-inter font-semibold text-sm'>Logout</span>
                </a>
            </nav>
           
        </div>
        <div className="flex-grow h-full ml-[260px]  overflow-auto ">

                {activeItem === 'Dashboard' && <Topbuttons />}
                {activeItem === 'Schedule' && <ScheduleButton/>}
                {activeItem === 'Trip Requests' && <TripRequestButtons />}
        </div>
        </div>
    );
}

export default Sidebar;
