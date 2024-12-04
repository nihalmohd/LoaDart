import React from 'react'
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { TbEyeFilled } from "react-icons/tb";
import { useNavigate } from 'react-router-dom';

const TripRequest = () => {
    const navigate = useNavigate()
  return (
    <div className="w-full h-auto flex justify-center items-center">
    <div className="w-11/12 h-auto  ">
        <div className="w-full h-10 flex-col items-end">
            <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">Trip request</h1>
        </div>
        <div className="w-full h-auto  grid grid-cols-1 md:grid-cols-3 relative" >
          <div className=" w-full md:w-4/12 h-10 absolute flex justify-end items-center ml-2">
            <div className="w-6 h-6 bg-red-600  rounded-full flex justify-center items-center">
              <h1 className='font-inter text-sm text-white'>2</h1>
            </div>
          </div>
          <div className="w-full h-64 border border-black mt-5 rounded-lg shadow-md">

              <div className="w-full h-28 bg-red-200 rounded-t-md ">
                 <img src="\images\Screenshot 2024-11-11 130820.png" className='w-full h-full object-cover rounded-t-md ' alt="" />
              </div>
                 <div className="w-11/12 h-9 border-b border-[#BC89E0] flex p-2 gap-2 ml-2">
                          <h3 className="text-[#5B297E] text-xs font-bold ">
                              Flatbed Truck, <span className='text-black font-normal'>KL 07 AX 1234</span>
                          </h3>
                          <div className="flex items-center ">
                              <div className="w-full h-full flex justify-center ml-2">
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
                              <div className="w-[120px] h-8 bg-white mt-3 ml-4  flex  justify-center items-center font-inter text-sm text-black rounded-sm shadow   ">View Bids  <span className='ml-2 mt-1 text-lg'><TbEyeFilled /></span> </div>
                              <div className="w-[140px] h-8 bg-[#5B297E] mt-3 ml-3 flex  justify-center items-center font-inter text-sm text-white rounded-sm shadow " onClick={()=>{navigate('/Driver/Loads')}}> Find load</div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default TripRequest