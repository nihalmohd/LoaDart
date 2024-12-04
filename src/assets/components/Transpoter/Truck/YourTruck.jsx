import React from 'react'
import { FaPlus } from "react-icons/fa6";

import { MdCalendarToday } from "react-icons/md";
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


const YourTruck = () => {
    const navigate = useNavigate()
  return (
    <div>
          <div className="w-full h-16  flex items-center ">
              <div className="w-11/12  h-10 ">
                  <div className="w-full h-10 flex justify-between items-end ml-4">
                      <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">Your Truck</h1>
                      <button className="w-28 h-6 bg-[#5B297E] flex justify-center items-center rounded-sm text-white text-xs mb-2" onClick={()=>{navigate('/Transpoter/AddTruck')}}><FaPlus />Add Truck</button>
                  </div>
              </div>
          </div>
          <div className="w-11/12 h-full  grid md:grid-cols-3 grid-cols-1 gap-3 relative ml-3 mb-10">
              <div className="w-full h-64 border border-black mt-5 rounded-lg shadow-md">

                  <div className="w-full h-28 bg-red-200 rounded-t-md ">
                      <img src="\images\Screenshot 2024-11-11 130820.png" className='w-full h-full object-cover rounded-t-md ' alt="" />
                  </div>
                  <div className="w-11/12 h-9 border-b border-[#BC89E0] flex p-1 gap-2 ml-2">
                      <h3 className="text-[#5B297E] text-[10px] font-bold  mt-2">
                          Flatbed Truck, <span className='text-black font-normal'>KL 07 AX 1234</span>
                      </h3>
                      <div className="flex items-center ">
                          <div className="w-full h-full flex justify-center ml-2 mt-2">
                              <div className="w-3 h-3 bg-[#4BA454] flex justify-center items-center mt-[5px]">
                                  <h1 className=''>
                                      <FaStar className="text-white text-[10px]" />
                                  </h1>
                              </div>
                              <span className="ml-1 text-gray-600 font-medium text-xs mt-1 ">4.8</span>
                          </div>
                          <div className="flex ml-3">
                              <img
                                  src="\images\89fff541e7be716b2438ee7422206a3c.png"
                                  alt="Profile 1"
                                  className="w-6 h-6 rounded-full border border-white -ml-5"
                              />
                              <img
                                  src="\images\4fa2496312a6d998f210d178ad098416.png"
                                  alt="Profile 2"
                                  className="w-6 h-6 rounded-full border border-white -ml-2"
                              />
                              <img
                                  src="\images\ac34bb12a66b13dca881620408c80010.png"
                                  alt="Profile 3"
                                  className="w-6 h-6 rounded-full border border-white -ml-1"
                              />
                          </div>
                      </div>
                  </div>
                  <div className="w-full h-12 ">
                      <div className="flex items-center text-gray-600 mt-2 ml-2">
                          <FaMapMarkerAlt className="text-green-500" />
                          <span className="ml-2 text-black text-[15px]">Kozhikode, Malappuram, Thrissur</span>
                      </div>
                      <p className=" mt-1 ml-2 text-[10px] text-black">Wt: 40T</p>
                  </div>
                  <div className="w-full h-[50px] bg-[#D9D9D9] rounded-b-md  ">
                      <div className="w-full h-full  rounded-b-md flex">
                      <div className="w-[120px] h-8 bg-white mt-3 ml-4  flex border border-[#5B297E] justify-center items-center font-inter text-sm text-[#5B297E] rounded-sm shadow " onClick={()=>{navigate('/Transpoter/PostTruck')}}> Post Truck  </div>
                      <div className="w-[120px] h-8 bg-[#5B297E] mt-3 ml-3 flex  justify-center items-center font-inter text-sm text-white rounded-sm shadow "> Find Load</div>
                      </div>
                  </div>
              </div>
              <div className="w-full h-64 border border-black mt-5 rounded-lg shadow-md">

                  <div className="w-full h-28 bg-red-200 rounded-t-md ">
                      <img src="\images\Screenshot 2024-11-11 130820.png" className='w-full h-full object-cover rounded-t-md ' alt="" />
                  </div>
                  <div className="w-11/12 h-9 border-b border-[#BC89E0] flex p-1 gap-2 ml-2">
                      <h3 className="text-[#5B297E] text-[10px] font-bold  mt-2">
                          Flatbed Truck, <span className='text-black font-normal'>KL 07 AX 1234</span>
                      </h3>
                      <div className="flex items-center ">
                          <div className="w-full h-full flex justify-center ml-2 mt-2">
                              <div className="w-3 h-3 bg-[#4BA454] flex justify-center items-center mt-[5px]">
                                  <h1 className=''>
                                      <FaStar className="text-white text-[10px]" />
                                  </h1>
                              </div>
                              <span className="ml-1 text-gray-600 font-medium text-xs mt-1 ">4.8</span>
                          </div>
                          <div className="flex ml-3">
                              <img
                                  src="\images\89fff541e7be716b2438ee7422206a3c.png"
                                  alt="Profile 1"
                                  className="w-6 h-6 rounded-full border border-white -ml-5"
                              />
                              <img
                                  src="\images\4fa2496312a6d998f210d178ad098416.png"
                                  alt="Profile 2"
                                  className="w-6 h-6 rounded-full border border-white -ml-2"
                              />
                              <img
                                  src="\images\ac34bb12a66b13dca881620408c80010.png"
                                  alt="Profile 3"
                                  className="w-6 h-6 rounded-full border border-white -ml-1"
                              />
                          </div>
                      </div>
                  </div>
                  <div className="w-full h-12 ">
                      <div className="flex items-center text-gray-600 mt-2 ml-2">
                          <FaMapMarkerAlt className="text-green-500" />
                          <span className="ml-2 text-black text-[15px]">Kozhikode, Malappuram, Thrissur</span>
                      </div>
                      <p className=" mt-1 ml-2 text-[10px] text-black">Wt: 40T</p>
                  </div>
                  <div className="w-full h-[50px] bg-[#D9D9D9] rounded-b-md  ">
                      <div className="w-full h-full  rounded-b-md flex">
                          <div className="w-[120px] h-8 bg-white mt-3 ml-4  flex border border-[#5B297E] justify-center items-center font-inter text-sm text-[#5B297E] rounded-sm shadow   "> Post Truck  </div>
                          <div className="w-[120px] h-8 bg-[#5B297E] mt-3 ml-3 flex  justify-center items-center font-inter text-sm text-white rounded-sm shadow "> Find Load</div>
                      </div>
                  </div>
              </div>
          </div>

    </div>
  )
}

export default YourTruck