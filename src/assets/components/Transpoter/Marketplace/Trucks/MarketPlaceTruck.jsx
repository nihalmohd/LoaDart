import React from 'react'
import {  FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { IoMdSearch } from "react-icons/io";

const MarketPlaceTruck = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-center gap-6 p-2 flex-wrap ">
              <div className="flex flex-col">
                  <label className="text-[10px] text-gray-500 mb-1 ml-2">Add pickup location</label>
                  <div className="flex items-center gap-2 w-60 h-10 bg-gray-100 border border-gray-300 rounded-md px-3">
                      <FaMapMarkerAlt className="text-green-500" />
                      <input
                          type="text"
                          placeholder="Ernakulam"
                          className="w-full bg-gray-100 outline-none"
                      />
                  </div>
              </div>


              <div className="flex flex-col">
                  <label className="text-[10px] text-gray-500 mb-1 ml-2">Add delivery location</label>
                  <div className="flex items-center gap-2 w-60 h-10 bg-gray-100 border border-gray-300 rounded-md px-3">
                      <FaMapMarkerAlt className="text-red-500" />
                      <input
                          type="text"
                          placeholder="Kozhikode"
                          className="w-full bg-gray-100 outline-none"
                      />
                  </div>
              </div>


              <div className="flex flex-col">
                  <label className="text-[10px] text-gray-500 mb-1 ml-2">Date</label>
                  <div className="flex items-center gap-2 w-60 h-10 bg-gray-100 border border-gray-300 rounded-md px-3 text-gray-500">
                      <input
                          type="date"
                          placeholder="14-10-2024 - 16-10-2024"
                          className="w-full bg-gray-100 outline-none"
                      />
                      {/* <MdCalendarToday className="text-gray-500" /> */}
                  </div>
              </div>


              <div className="flex flex-col">
                  <label className="text-[10px] text-gray-500 mb-1 ml-2">Weight Capacity</label>
                  <select className="w-60 h-10 bg-gray-100 border border-gray-300 rounded-md px-3 outline-none text-gray-500">
                      <option value="">Select weight capacity</option>
                      <option value="500kg">500 kg</option>
                      <option value="1000kg">1000 kg</option>
                      <option value="1500kg">1500 kg</option>
                      <option value="2000kg">2000 kg</option>
                  </select>
              </div>


              <div className="flex flex-col">
                  <label className="text-[10px] text-gray-500 mb-1 ml-2">Trucks</label>
                  <select className="w-60 h-10 bg-gray-100 border border-gray-300 rounded-md px-3 outline-none text-gray-500">
                      <option value="">Select number of trucks</option>
                      <option value="1">1 Truck</option>
                      <option value="2">2 Trucks</option>
                      <option value="3">3 Trucks</option>
                      <option value="4">4 Trucks</option>
                  </select>
              </div>

              <button className="w-28 h-10 bg-[#5B297E] text-white rounded-md flex items-center justify-center gap-2 mt-5">
                  <span><IoMdSearch /></span>
                  Search
              </button>
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