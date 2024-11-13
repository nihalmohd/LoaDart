import React, { useState } from 'react'
import {  FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { IoMdSearch } from "react-icons/io";
import { MdCalendarToday } from "react-icons/md";

const MarketPlaceTruck = () => {
    const [numTrucks, setNumTrucks] = useState(2);
    const handleTruckChange = (value) => {
      setNumTrucks((prev) => Math.max(1, prev + value));
    };
  return (
    <div>
     <div className="w-full max-w-2xl p-4 space-y-4">
              <div className="w-full h-20 grid grid-cols-2 gap-10">

                  <div className=" flex flex-col">
                      <label className="text-xs font-medium text-gray-400 mb-1">Pickup Location<span className='text-red-600'>*</span></label>
                      <input
                          type="text"
                          placeholder="Ernakulam"
                          className="w-full h-10 border-b border-gray-300 outline-none placeholder:text-black"
                      />
                  </div>

                  {/* Delivery Location */}
                  <div className="flex flex-col">
                      <label className="text-xs font-medium text-gray-400 mb-1">Delivery Location<span className='text-red-600'>*</span></label>
                      <input
                          type="text"
                          placeholder="Kozhikode"
                          className="w-full h-10 border-b border-gray-300 outline-none placeholder:text-black"
                      />
                  </div>
              </div>
              <div className="w-full h-20 grid grid-cols-2 gap-10">

                  {/* Pickup Location */}

                  <div className="w-full flex flex-col">
                      <label className="text-xs font-medium text-gray-400 mb-1">Pickup Date<span className='text-red-600'>*</span></label>
                      <div className="flex items-center border-b border-gray-300">
                          <input
                              type="text"
                              placeholder="18-10-2024"
                              className="w-full h-10 outline-none placeholder:text-black"
                          />
                          <MdCalendarToday className="text-gray-500" />
                      </div>
                  </div>

                  {/* Material */}
                  <div className="w-full flex flex-col">
                      <label className="text-xs font-medium text-gray-400 mb-1">Material<span className='text-red-600'>*</span></label>
                      <input
                          type="text"
                          placeholder="Frozen food"
                          className="w-full h-10 border-b border-gray-300 outline-none placeholder:text-black"
                      />
                  </div>
              </div>

              {/* Weight */}
              {/* Pickup Date */}
              <div className="md:flex justify-between ">

                  <div className="w-full h-full ">
                      <label className="text-xs font-medium text-gray-600 ">Weight <span className='text-red-600'>*</span></label>
                      <div className="flex gap-2">
                          {["<1T", "1-3T", "3-5T", "5-10T", "10-20T", ">20T"].map((weight, index) => (
                              <button
                                  key={index}
                                  className="px-3 py-1 border  border-black text-black rounded-full text-sm hover:bg-[#5B297E] hover:text-white transition"
                              >
                                  {weight}
                              </button>
                          ))}
                      </div>
                  </div>
                  <div className="flex flex-col mt-5 md:mt-0">
                      <label className="text-xs font-medium text-gray-600 mb-2">No of Trucks<span className='text-red-600'>*</span></label>
                      <div className="flex items-center gap-2">
                          <button
                              onClick={() => handleTruckChange(-1)}
                              className="w-10 h-10 bg-[#5B297E] text-white rounded-md flex items-center justify-center text-xl"
                          >
                              -
                          </button>
                          <span className="text-xl">{numTrucks}</span>
                          <button
                              onClick={() => handleTruckChange(1)}
                              className="w-10 h-10 bg-[#5B297E] text-white rounded-md flex items-center justify-center text-xl"
                          >
                              +
                          </button>
                      </div>
                  </div>
              </div>

              {/* Number of Trucks */}

              {/* Preferred Trucks */}
              <div className="flex flex-col">
                  <label className="text-xs font-medium text-gray-600 mb-2">
                      Preferred Truck Types<span className="text-red-600">*</span>
                  </label>
                  <select className="w-full h-10 border-b border-gray-300  px-3 text-gray-700 focus:outline-none">
                      <option value="">Select a truck type</option>
                      <option value="Container">Container</option>
                      <option value="Trailer">Trailer</option>
                      <option value="Truck">Truck</option>
                      <option value="HYVA">HYVA</option>
                      <option value="LCV">LCV</option>
                      <option value="Tanker">Tanker</option>
                  </select>
              </div>
          </div>
      <div className="w-full h-screen grid grid-cols-3 gap-4 relative">
         

  <div className="w-full h-64 border border-black mt-5 rounded-lg shadow-md">

    <div className="w-full h-28 bg-red-200 rounded-t-md ">
      <img src="\images\Screenshot 2024-11-11 130820.png" className='w-full h-full object-cover rounded-t-md ' alt="" />
    </div>
    <div className="w-11/12 h-9 border-b border-[#BC89E0] flex p-1 gap-2 ml-2 ">
    <h3 className="text-[#5B297E] text-[10px] font-bold mt-1">
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
    <div className="w-full h-14  flex ">
              <div className="w-1/12 h-full  flex justify-center items-center">
                <div className="w-5 h-full  ">
                  <div className="w-2 h-2 bg-green-400 rounded-full ml-2 mt-3"></div>
                  <div className="w-1 h-5 border-dashed border-e ml-2"></div>
                  <div className="w-2 h-2 bg-red-400 rounded-full ml-2"></div>
                </div>
              </div>
              <div className="w-11/12 h-full ">
                  <div className="w-full h-1/2  flex items-end">
                    <h1 className='font-inter text-sm '>Ernakulam, Kerala</h1>
                  </div>
                  <div className="w-full h-1/2  flex items-center">
                  <h1 className='font-inter text-sm '>Kozhikode, Kerala</h1>
                  </div>
              </div>
            </div>

    <div className="w-full h-[50px] bg-[#D9D9D9] rounded-b-md  ">
              <div className="w-full h-full  rounded-b-md flex">
              <div className="w-2/3 h-full     font-inter text-sm text-black rounded-sm   ">
                  <div className="w-full h-1/2  flex  items-end">
                        <h1 className='font-inter ml-3 font-semibold text-sm '>Material : Any</h1>
                  </div>
                  <div className="w-full h-1/2 ">
                        <h1 className='font-inter ml-3  text-[9px] text-[#6B7280] font-semibold '>Wt:40T or above</h1>
                    </div>
               </div>
              <div className="w-1/3 h-8 bg-[#5B297E] mt-3 ml-3 flex  justify-center items-center font-inter text-sm text-white   rounded-full mr-5 ">Book Now</div>        
              </div>
            </div>
              </div>
              <div className="w-full h-64 border border-black mt-5 rounded-lg shadow-md">

<div className="w-full h-28 bg-red-200 rounded-t-md ">
  <img src="\images\Screenshot 2024-11-11 130820.png" className='w-full h-full object-cover rounded-t-md ' alt="" />
</div>
<div className="w-11/12 h-9 border-b border-[#BC89E0] flex p-1 gap-2 ml-2">
<h3 className="text-[#5B297E] text-[10px] font-bold  mt-1">
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
<div className="w-full h-14  flex ">
          <div className="w-1/12 h-full  flex justify-center items-center">
            <div className="w-5 h-full  ">
              <div className="w-2 h-2 bg-green-400 rounded-full ml-2 mt-3"></div>
              <div className="w-1 h-5 border-dashed border-e ml-2"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full ml-2"></div>
            </div>
          </div>
          <div className="w-11/12 h-full ">
              <div className="w-full h-1/2  flex items-end">
                <h1 className='font-inter text-sm '>Ernakulam, Kerala</h1>
              </div>
              <div className="w-full h-1/2  flex items-center">
              <h1 className='font-inter text-sm '>Kozhikode, Kerala</h1>
              </div>
          </div>
        </div>

<div className="w-full h-[50px] bg-[#D9D9D9] rounded-b-md  ">
          <div className="w-full h-full  rounded-b-md flex">
          <div className="w-2/3 h-full     font-inter text-sm text-black rounded-sm   ">
              <div className="w-full h-1/2  flex  items-end">
                    <h1 className='font-inter ml-3 font-semibold text-sm '>Material : Any</h1>
              </div>
              <div className="w-full h-1/2 ">
                    <h1 className='font-inter ml-3  text-[9px] text-[#6B7280] font-semibold '>Wt:40T or above</h1>
                </div>
           </div>
          <div className="w-1/3 h-8 bg-[#5B297E] mt-3 ml-3 flex  justify-center items-center font-inter text-sm text-white   rounded-full mr-5 ">Book Now</div>        
          </div>
        </div>
          </div>
          <div className="w-full h-64 border border-black mt-5 rounded-lg shadow-md">

<div className="w-full h-28 bg-red-200 rounded-t-md ">
  <img src="\images\Screenshot 2024-11-11 130820.png" className='w-full h-full object-cover rounded-t-md ' alt="" />
</div>
<div className="w-11/12 h-9 border-b border-[#BC89E0] flex p-1 gap-2 ml-2">
<h3 className="text-[#5B297E] text-[10px] font-bold mt-1">
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
<div className="w-full h-14  flex ">
          <div className="w-1/12 h-full  flex justify-center items-center">
            <div className="w-5 h-full  ">
              <div className="w-2 h-2 bg-green-400 rounded-full ml-2 mt-3"></div>
              <div className="w-1 h-5 border-dashed border-e ml-2"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full ml-2"></div>
            </div>
          </div>
          <div className="w-11/12 h-full ">
              <div className="w-full h-1/2  flex items-end">
                <h1 className='font-inter text-sm '>Ernakulam, Kerala</h1>
              </div>
              <div className="w-full h-1/2  flex items-center">
              <h1 className='font-inter text-sm '>Kozhikode, Kerala</h1>
              </div>
          </div>
        </div>

<div className="w-full h-[50px] bg-[#D9D9D9] rounded-b-md  ">
          <div className="w-full h-full  rounded-b-md flex">
          <div className="w-2/3 h-full     font-inter text-sm text-black rounded-sm   ">
              <div className="w-full h-1/2  flex  items-end">
                    <h1 className='font-inter ml-3 font-semibold text-sm '>Material : Any</h1>
              </div>
              <div className="w-full h-1/2 ">
                    <h1 className='font-inter ml-3  text-[9px] text-[#6B7280] font-semibold '>Wt:40T or above</h1>
                </div>
           </div>
          <div className="w-1/3 h-8 bg-[#5B297E] mt-3 ml-3 flex  justify-center items-center font-inter text-sm text-white   rounded-full mr-5 ">Book Now</div>        
          </div>
        </div>
          </div>
          <div className="w-full h-64 border border-black mt-5 rounded-lg shadow-md">

<div className="w-full h-28 bg-red-200 rounded-t-md ">
  <img src="\images\Screenshot 2024-11-11 130820.png" className='w-full h-full object-cover rounded-t-md ' alt="" />
</div>
<div className="w-11/12 h-9 border-b border-[#BC89E0] flex p-1 gap-2 ml-2">
<h3 className="text-[#5B297E] text-[10px] font-bold mt-1">
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
<div className="w-full h-14  flex ">
          <div className="w-1/12 h-full  flex justify-center items-center">
            <div className="w-5 h-full  ">
              <div className="w-2 h-2 bg-green-400 rounded-full ml-2 mt-3"></div>
              <div className="w-1 h-5 border-dashed border-e ml-2"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full ml-2"></div>
            </div>
          </div>
          <div className="w-11/12 h-full ">
              <div className="w-full h-1/2  flex items-end">
                <h1 className='font-inter text-sm '>Ernakulam, Kerala</h1>
              </div>
              <div className="w-full h-1/2  flex items-center">
              <h1 className='font-inter text-sm '>Kozhikode, Kerala</h1>
              </div>
          </div>
        </div>

<div className="w-full h-[50px] bg-[#D9D9D9] rounded-b-md  ">
          <div className="w-full h-full  rounded-b-md flex">
          <div className="w-2/3 h-full     font-inter text-sm text-black rounded-sm   ">
              <div className="w-full h-1/2  flex  items-end">
                    <h1 className='font-inter ml-3 font-semibold text-sm '>Material : Any</h1>
              </div>
              <div className="w-full h-1/2 ">
                    <h1 className='font-inter ml-3  text-[9px] text-[#6B7280] font-semibold '>Wt:40T or above</h1>
                </div>
           </div>
          <div className="w-1/3 h-8 bg-[#5B297E] mt-3 ml-3 flex  justify-center items-center font-inter text-sm text-white   rounded-full mr-5 ">Book Now</div>        
          </div>
        </div>
          </div>
          <div className="w-full h-64 border border-black mt-5 rounded-lg shadow-md">

<div className="w-full h-28 bg-red-200 rounded-t-md ">
  <img src="\images\Screenshot 2024-11-11 130820.png" className='w-full h-full object-cover rounded-t-md ' alt="" />
</div>
<div className="w-11/12 h-9 border-b border-[#BC89E0] flex p-1 gap-2 ml-2">
<h3 className="text-[#5B297E] text-[10px] font-bold mt-1 ">
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
<div className="w-full h-14  flex ">
          <div className="w-1/12 h-full  flex justify-center items-center">
            <div className="w-5 h-full  ">
              <div className="w-2 h-2 bg-green-400 rounded-full ml-2 mt-3"></div>
              <div className="w-1 h-5 border-dashed border-e ml-2"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full ml-2"></div>
            </div>
          </div>
          <div className="w-11/12 h-full ">
              <div className="w-full h-1/2  flex items-end">
                <h1 className='font-inter text-sm '>Ernakulam, Kerala</h1>
              </div>
              <div className="w-full h-1/2  flex items-center">
              <h1 className='font-inter text-sm '>Kozhikode, Kerala</h1>
              </div>
          </div>
        </div>

<div className="w-full h-[50px] bg-[#D9D9D9] rounded-b-md  ">
          <div className="w-full h-full  rounded-b-md flex">
          <div className="w-2/3 h-full     font-inter text-sm text-black rounded-sm   ">
              <div className="w-full h-1/2  flex  items-end">
                    <h1 className='font-inter ml-3 font-semibold text-sm '>Material : Any</h1>
              </div>
              <div className="w-full h-1/2 ">
                    <h1 className='font-inter ml-3  text-[9px] text-[#6B7280] font-semibold '>Wt:40T or above</h1>
                </div>
           </div>
          <div className="w-1/3 h-8 bg-[#5B297E] mt-3 ml-3 flex  justify-center items-center font-inter text-sm text-white   rounded-full mr-5 ">Book Now</div>        
          </div>
        </div>
          </div>
          <div className="w-full h-64 border border-black mt-5 rounded-lg shadow-md">

<div className="w-full h-28 bg-red-200 rounded-t-md ">
  <img src="\images\Screenshot 2024-11-11 130820.png" className='w-full h-full object-cover rounded-t-md ' alt="" />
</div>
<div className="w-11/12 h-9 border-b border-[#BC89E0] flex p-1 gap-2 ml-2">
<h3 className="text-[#5B297E] text-[10px] font-bold mt-1">
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
<div className="w-full h-14  flex ">
          <div className="w-1/12 h-full  flex justify-center items-center">
            <div className="w-5 h-full  ">
              <div className="w-2 h-2 bg-green-400 rounded-full ml-2 mt-3"></div>
              <div className="w-1 h-5 border-dashed border-e ml-2"></div>
              <div className="w-2 h-2 bg-red-400 rounded-full ml-2"></div>
            </div>
          </div>
          <div className="w-11/12 h-full ">
              <div className="w-full h-1/2  flex items-end">
                <h1 className='font-inter text-sm '>Ernakulam, Kerala</h1>
              </div>
              <div className="w-full h-1/2  flex items-center">
              <h1 className='font-inter text-sm '>Kozhikode, Kerala</h1>
              </div>
          </div>
        </div>

<div className="w-full h-[50px] bg-[#D9D9D9] rounded-b-md  ">
          <div className="w-full h-full  rounded-b-md flex">
          <div className="w-2/3 h-full     font-inter text-sm text-black rounded-sm   ">
              <div className="w-full h-1/2  flex  items-end">
                    <h1 className='font-inter ml-3 font-semibold text-sm '>Material : Any</h1>
              </div>
              <div className="w-full h-1/2 ">
                    <h1 className='font-inter ml-3  text-[9px] text-[#6B7280] font-semibold '>Wt:40T or above</h1>
                </div>
           </div>
          <div className="w-1/3 h-8 bg-[#5B297E] mt-3 ml-3 flex  justify-center items-center font-inter text-sm text-white   rounded-full mr-5 ">Book Now</div>        
          </div>
        </div>
          </div>
</div>

    </div>
  )
}

export default MarketPlaceTruck