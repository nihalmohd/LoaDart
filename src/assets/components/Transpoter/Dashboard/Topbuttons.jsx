import React, { useState } from 'react'
import { IoIosNotifications } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import DataTracking from './DataTracking';
import { IoSearch } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


const Topbuttons = () => {
  const navigate = useNavigate()
    const toggleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };
  return (
    <div className='relative'>
     <div className="md:w-11/12 h-auto  ">
    <div className="w-full md:h-24 flex justify-between items-center">
      <div className="w-full md:w-3/12 h-10  flex justify-between items-center pl-3  ">
        <h1 className='flex justify-center items-center text-lg font-inter font-semibold'>Hello, John <span className='ml-3 text-[#5B297E] text-xl flex relative'> <IoIosNotifications /> <div className="w-3 h-3 bg-red-500 rounded-full ml-3 absolute text-white text-xs text-center flex justify-center items-center">3</div></span></h1>

      </div>
            <div className="w-[550px] h-10 hidden md:grid grid-cols-4 gap-2 pt-3 ">
                <button className="w-32 h-7  border border-[#5B297E] flex justify-center items-center rounded-sm text-[#5B297E] text-xs mb-2" onClick={()=>{navigate('/c/Loads')}} ><IoSearch className='mr-2 font-semibold'/> Serach Load</button>
                <button className="w-32 h-7 bg-[#5B297E] flex justify-center items-center rounded-sm text-white text-xs mb-2"onClick={()=>{navigate('/c/AddLoad')}}><FaPlus className='mr-2 font-semibold' />Add Load</button>
                <button className="w-32 h-7  border border-[#5B297E] flex justify-center items-center rounded-sm text-[#5B297E] text-xs mb-2" onClick={()=>{navigate('/c/Trucks')}}><IoSearch className='mr-2 font-semibold' /> Serach Tuck</button>
                <button className="w-32 h-7 bg-[#5B297E] flex justify-center items-center rounded-sm text-white text-xs mb-2" onClick={()=>{navigate('/c/AddTruck')}}><FaPlus className='mr-2 font-semibold' />Add Truck</button>
            </div>
        </div>
              <div className="w-11/12 h-20  ml-4 md:hidden flex justify-center items-center">
                  <div className="w-full h-10  grid grid-cols-2 gap-2 ">
                <button className="md:w-28 h-6  border border-[#5B297E] flex justify-center items-center rounded-sm text-[#5B297E] text-xs" onClick={()=>{navigate('/Transpoter/Loads')}}><IoSearch className='mr-2 font-semibold' /> Serach Load</button>
                <button className="md:w-28 h-6  border border-[#5B297E] flex justify-center items-center rounded-sm text-[#5B297E] text-xs " onClick={()=>{navigate('/Transpoter/Trucks')}}><IoSearch className='mr-2 font-semibold' /> Serach Tuck</button>
                      <button className="md:w-28 h-6 bg-[#5B297E] flex justify-center items-center rounded-sm text-white text-xs mb-2" onClick={()=>{navigate('/Transpoter/AddLoad')}}><FaPlus className='mr-2 font-semibold' />Add Load</button>
                      <button className="md:w-28 h-6 bg-[#5B297E] flex justify-center items-center rounded-sm text-white text-xs mb-2" onClick={()=>{navigate('/Transpoter/AddTruck')}}><FaPlus className='mr-2 font-semibold' />Add Truck</button>
                  </div>
              </div>
    <DataTracking/>
    </div>

    </div>
  )
}

export default Topbuttons