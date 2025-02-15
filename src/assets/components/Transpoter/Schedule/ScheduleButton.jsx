import React, { useState } from 'react';
import { HiOutlineTruck } from 'react-icons/hi';
import { IoCubeOutline } from "react-icons/io5";
import ScheduleLoadTable from './Load/ScheduleLoadTable';
import ScheduleTruckTable from './Truck/ScheduleTruckTable';
import Sidebar from '../Sidebar/Sidebar';

const ScheduleButton = () => {
    const [selectedDiv, setSelectedDiv] = useState("left");

    return (
        <>
        <div className="w-full h-auto flex justify-center items-center">
            <div className="w-11/12 h-auto ">
                <div className="w-full h-10 flex-col items-end">
                    <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">Schedule</h1>
                </div>
                <div className="w-full h-24 flex justify-center items-center">
                    <div className="w-full h-20 flex">
                    
                        <div
                            className={`w-1/2 h-16 flex justify-center items-center ${selectedDiv === 'left' ? 'bg-[#5B297E]' : 'bg-transparent border border-black'}`}
                            onClick={() => setSelectedDiv('left')}
                        >
                            <div className="w-48 h-10  flex">
                                <div className="w-1/2 h-10  flex justify-end items-center">
                                    <h1
                                        className={`font-inter text-lg ${
                                            selectedDiv === 'right' ? 'text-[#747474]' : 'text-white'
                                        }`}
                                    >
                                        <IoCubeOutline />
                                    </h1>
                                </div>
                                <div className="w-36 h-10  flex justify-start items-center ml-1">
                                    <h1
                                        className={`font-inter text-base font-semibold ${
                                            selectedDiv === 'right' ? 'text-[#747474]' : 'text-white'
                                        }`}
                                    >
                                        Loads
                                    </h1>
                                </div>
                            </div>
                        </div>

                       
                        <div
                            className={`w-1/2 h-16 flex justify-center items-center ${selectedDiv === 'right' ? 'bg-[#5B297E]' : 'bg-transparent border border-black'}`}
                            onClick={() => setSelectedDiv('right')}
                        >
                            <div className="w-48 h-10  flex">
                                <div className="w-1/2 h-10  flex justify-end items-center">
                                    <h1
                                        className={`font-inter text-lg ${
                                            selectedDiv === 'left' ? 'text-[#747474]' : 'text-white'
                                        }`}
                                    >
                                        <HiOutlineTruck />
                                    </h1>
                                </div>
                                <div className="w-36 h-10 flex justify-start items-center ml-1">
                                    <h1
                                        className={`font-inter text-base font-semibold ${
                                            selectedDiv === 'left' ? 'text-[#747474]' : 'text-white'
                                        }`}
                                    >
                                        Trucks
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full h-auto mb-10 ">
                    {selectedDiv === 'left' && <ScheduleLoadTable />}
                    {selectedDiv === 'right' && <ScheduleTruckTable />}
                </div>
            </div>
        </div>
        </>
    );
};

export default ScheduleButton;
