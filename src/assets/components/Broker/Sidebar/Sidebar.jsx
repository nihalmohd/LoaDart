import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiOutlineHome, AiOutlineClockCircle, AiOutlineUser, AiOutlineQuestionCircle } from 'react-icons/ai';
import { HiOutlineTruck } from 'react-icons/hi';
import { IoCubeOutline } from "react-icons/io5";
import { LiaStoreAltSolid } from "react-icons/lia";
import { BiMessageError } from "react-icons/bi";
import { LuLogOut } from "react-icons/lu";
import { RxUpdate } from "react-icons/rx";
import { MdOutlineRoute } from "react-icons/md";
import { IoMdMenu } from "react-icons/io";
import { FaArrowLeft } from "react-icons/fa";



const Sidebar = () => {
    const [isTrucksOpen, setIsTrucksOpen] = useState(false);
    const [isProfilesOpen, setIsProfilesOpen] = useState(false);
    const [isTruck, setIsTruck] = useState(false);
    const [isLoad, setIsLoad] = useState(false);
    const [activeItem, setActiveItem] = useState('Dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const navigate = useNavigate()


    const menuRoutes = {
        Dashboard: '/Broker',
        Schedule: '/Broker/Schedule',
        TripRequests: '/Broker/TripRequests',
        Profile: '/Broker/Profile',
        Marketplace: '/Broker/Marketplace',
        Loads: '/Broker/Loads',
        Trucks: '/Broker/Trucks',
        UpgradeMembership: '/Broker/UpgradeMembership',
        Help: '/Broker/Help',
        Feedback: '/Broker/Feedback',
        Logout: '/Broker/Logout',
    };
    
    const handleMenuItemClick = (item) => {
        setActiveItem(item);
        const route = menuRoutes[item]; 
        if (route) {
            navigate(route);
        }
    };
    
    const toggleTrucks = () => {
        setIsTrucksOpen(!isTrucksOpen);
    };

    const toggleProfile = () => {
        setIsProfilesOpen(!isProfilesOpen);
    };
    const toggleLoads = () => {
        setIsLoad(!isLoad);
    };


    const handleSlidbar = ()=>{
        setIsSidebarOpen(!isSidebarOpen)
    } 

  return (
    <div className='md:flex'>
            <div className=" md:hidden w-full h-10 flex justify-end items-center ">
            <div className="w-full h-full lg:hidden flex justify-end  items-center pr-2  ">
                          <button className="w-12 h-12 flex justify-center items-center " onClick={()=>{handleSlidbar()}}>
                              <h1 className="text-3xl"><IoMdMenu /></h1>
                          </button>
             </div>                 
            </div>

        <div className={`fixed top-0 left-0 h-full bg-white shadow-lg transform ${isSidebarOpen ? 'translate-x-0 ' : '-translate-x-full'} md:translate-x-0  transition-transform duration-300 w-[260px] md:flex flex-col items-center z-50 md:py-6 border-2 overflow-y-scroll overflow-x-hidden `}

        >
            <div className="md:hidden flex w-full h-10">
                <div className="w-10 h-10  flex justify-center items-center" onClick={()=>{handleSlidbar()}}>
                    <h1 className=' text-xl font-bold font-inter text-black'><FaArrowLeft /></h1>
                </div>
            </div>
            <div className="md:ml-0 ml-10 w-9/12 h-10 flex justify-end items-end ">
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
                    src="\images\a65c1d620968b90cdb9521e683536cdc.png"
                    alt="Profile"
                    className="w-20 h-20 object-cover object-[20%] rounded-full mb-2"
                />
                <h2 className="text-lg font-semibold">Stephen Hills</h2>
                <p className="text-sm text-gray-500">Broker</p>
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
                    onClick={() => handleMenuItemClick('TripRequests')}
                    className={`flex items-center space-x-2 ${activeItem === 'TripRequests' ? 'text-[#5B297E]' : 'text-gray-700'} hover:text-[#5B297E]`}
                >
                    <div className="p-2">
                        <MdOutlineRoute />
                    </div>
                    <span className="font-inter font-semibold text-sm">Trip Requests</span>
                </a>

                <div className="flex flex-col space-y-1">
                    <div
                        onClick={() => {
                            toggleProfile();
                            handleMenuItemClick('Profile');
                        }}
                        className={`flex items-center space-x-2 ${activeItem === 'Profile' ? 'text-[#5B297E]' : 'text-gray-700'} hover:text-[#5B297E] cursor-pointer`}
                    >
                        <div className="p-2 ">
                            <AiOutlineUser />
                        </div>
                        <span className="font-semibold font-inter text-sm">Profile</span>
                    </div>
                    {isProfilesOpen && (
                        <div className="pl-10 text-gray-600 space-y-2 ">
                            <a href="#" className="hover:text-[#5B297E] font-inter text-sm flex justify-start text-start items-center text-gray-700 font-semibold " >Basic Details <span></span></a>
                            <a href="#" className="hover:text-[#5B297E] font-inter text-sm flex justify-start text-start items-center text-gray-700 font-semibold">Upload Details</a>
                            
                        </div>
                    )}
                </div>

                <div className="flex flex-col space-y-1">
                    <div
                        onClick={() => {
                            toggleLoads();
                            handleMenuItemClick('Loads');
                        }}
                        className={`flex items-center space-x-2 ${activeItem === 'Loads' ? 'text-[#5B297E]' : 'text-gray-700'} hover:text-[#5B297E] cursor-pointer`}
                    >
                        <div className="p-2 ">
                            <IoCubeOutline />
                        </div>
                        <span className="font-semibold font-inter text-sm">Loads</span>
                    </div>
                    {isLoad && (
                        <div className="pl-10 text-gray-600 space-y-2 ">
                            <a 
                            onClick={() => {
                            handleMenuItemClick('Loads');
                            }}
                            href="#" className="hover:text-[#5B297E] font-inter text-sm flex justify-start text-start items-center text-gray-700 font-semibold " >Search Loads <span></span></a>
                            
                        </div>
                    )}
                </div>

                
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
                            <a href="#" className="hover:text-[#5B297E] font-inter text-sm  flex justify-start text-start items-center text-gray-700 font-semibold" onClick={()=>{handleMenuItemClick('Trucks')} }>Search Truck</a>
                            
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
                    onClick={() => handleMenuItemClick('UpgradeMembership')}
                    className={`flex items-center space-x-2 ${activeItem === 'UpgradeMembership' ? 'text-[#5B297E]' : 'text-gray-700'} hover:text-[#5B297E]`}
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
        <div className=" flex-grow h-full md:ml-[260px]  overflow-hidden ">
        </div>
        </div>
  )
}

export default Sidebar