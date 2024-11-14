import React, { useState } from 'react'

import { MdCalendarToday } from "react-icons/md";
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";

const SearchTruck = () => {
    const [numTrucks, setNumTrucks] = useState(2);
    const handleTruckChange = (value) => {
        setNumTrucks((prev) => Math.max(1, prev + value));
    };

    return (
        <div>
            <div className="w-11/12 h-full ml-2  ">
                <div className="w-full h-10  flex items-end ">
                    <div className="w-4/12  h-10 ">
                        <div className="w-full h-10 flex-col items-end ml-4">
                            <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">Search Truck</h1>
                        </div>
                    </div>
                </div>
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
                type="Date"
                placeholder="18-10-2024"
                className="w-full h-10 outline-none placeholder:text-black"
              />
              {/* <MdCalendarToday className="text-gray-500" /> */}
            </div>
          </div>

          {/* Material */}
          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-600 mb-2">
              Materials<span className="text-red-600">*</span>
                            </label>
                            <select className="w-full h-10 border-b border-gray-300 text-black focus:outline-none">
                                <option value="">Select a cargo type</option>
                                <option value="Auto Parts">Auto Parts</option>
                                <option value="Bardana Jute">Bardana Jute</option>
                                <option value="Building materials">Building materials</option>
                                <option value="Cement">Cement</option>
                                <option value="Chemicals">Chemicals</option>
                                <option value="Coal and Ash">Coal and Ash</option>
                                <option value="Container">Container</option>
                                <option value="Cotten">Cotten</option>
                                <option value="Cotton Seed">Cotton Seed</option>
                                <option value="Electronics Consumer Durables">Electronics Consumer Durables</option>
                                <option value="Fertilizers">Fertilizers</option>
                                <option value="Fruits and Vegetables">Fruits and Vegetables</option>
                                <option value="Furniture and Wood Products">Furniture and Wood Products</option>
                                <option value="House Hold Goods">House Hold Goods</option>
                                <option value="Industrial Equipments">Industrial Equipments</option>
                                <option value="Iron Sheets or Bars or Scraps">Iron Sheets or Bars or Scraps</option>
                                <option value="Liquids in Drums">Liquids in Drums</option>
                                <option value="Liquids or Oil">Liquids or Oil</option>
                                <option value="Machinery new">Machinery new</option>
                                <option value="Machinery old">Machinery old</option>
                                <option value="Medicals">Medicals</option>
                                <option value="Metals">Metals</option>
                                <option value="Mill Jute Oil">Mill Jute Oil</option>
                                <option value="others">Others</option>
                                <option value="Packaging & Containers">Packaging & Containers</option>
                                <option value="Packed Food">Packed Food</option>
                                <option value="Pen">Pen</option>
                                <option value="Plastic">Plastic</option>
                                <option value="Plastic Pipes Or Other products">Plastic Pipes Or Other Products</option>
                                <option value="Powder Bages">Powder Bags</option>
                                <option value="Printed Books or Paper Rolls">Printed Books or Paper Rolls</option>
                                <option value="Refrigerated goods">Refrigerated Goods</option>
                                <option value="Rice or wheat or Agriculture Products">Rice, Wheat, or Agriculture Products</option>
                                <option value="Scrap">Scrap</option>
                                <option value="Spices">Spices</option>
                                <option value="Textails">Textiles</option>
                                <option value="Tyre and Rubber Products">Tyre and Rubber Products</option>
                                <option value="Vehicles or Car">Vehicles or Car</option>

            </select>
          </div>
        </div>
        <div className="w-full h-16 grid grid-cols-3 gap-20">

          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-600 mb-2">
              Weight<span className="text-red-600">*</span>
            </label>
                            <select className="w-full h-10 border-b border-gray-300   text-black focus:outline-none">
                                <option value="">Select weight capacity</option>
                                <option value="Above 40 MT">Above 40 MT</option>
                                <option value="Above 30 MT">Above 30 MT</option>
                                <option value="Upto 28 MT">Upto 28 MT</option>
                                <option value="Upto 25 MT">Upto 25 MT</option>
                                <option value="Upto 20 MT">Upto 20 MT</option>
                                <option value="Upto 17 MT">Upto 17 MT</option>
                                <option value="Upto 15 MT">Upto 15 MT</option>
                                <option value="Upto 12 MT">Upto 12 MT</option>
                                <option value="Upto 9 MT">Upto 9 MT</option>
                                <option value="Upto 7 MT">Upto 7 MT</option>
                                <option value="Upto 5 MT">Upto 5 MT</option>
                                <option value="Upto 3 MT">Upto 3 MT</option>
                                <option value="Upto 1 MT">Upto 1 MT</option>
                                <option value="Below 1 MT">Below 1 MT</option>

                            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-600 mb-2">
              Preferred Truck Types<span className="text-red-600">*</span>
            </label>
            <select className="w-full h-10 border-b border-gray-300 text-black  focus:outline-none">
            <option value="">Select a truck type</option>
                                <option value="Canter Jumbo">Canter Jumbo</option>
                                <option value="Canters 17feet / 4 Wheel">Canters 17feet / 4 Wheel</option>
                                <option value="Canters 17feet / 6 Wheel">Canters 17feet / 6 Wheel</option>
                                <option value="Canters 3MT / 4 Wheel">Canters 3MT / 4 Wheel</option>
                                <option value="Car Carrier (Close Body)">Car Carrier (Close Body)</option>
                                <option value="Car Carrier (Open Body)">Car Carrier (Open Body)</option>
                                <option value="Container Close Body 40 Feet">Container Close Body 40 Feet</option>
                                <option value="Container Close Body 32 Feet">Container Close Body 32 Feet</option>
                                <option value="Container Close Body 20 Feet">Container Close Body 20 Feet</option>
                                <option value="Container Trucks">Container Trucks</option>
                                <option value="Container Close Body 24 Feet">Container Close Body 24 Feet</option>
                                <option value="Flat Bed Trailers 32 Feet">Flat Bed Trailers 32 Feet</option>
                                <option value="Flat Bed Trailers 40 Feet">Flat Bed Trailers 40 Feet</option>
                                <option value="Hydraulic Trailers">Hydraulic Trailers</option>
                                <option value="LCV (Light Commercial Vehicle)">LCV (Light Commercial Vehicle)</option>
                                <option value="Low Bed Trailer">Low Bed Trailer</option>
                                <option value="Multi Axle Trailer">Multi Axle Trailer</option>
                                <option value="Over Dimensional Cargo Truck">Over Dimensional Cargo Truck</option>
                                <option value="Pick Up">Pick Up</option>
                                <option value="Refrigerated / AC Containers">Refrigerated / AC Containers</option>
                                <option value="Scooter Body Trucks">Scooter Body Trucks</option>
                                <option value="Semi Low Bed Trailer">Semi Low Bed Trailer</option>
                                <option value="Tanker Truck (12 Wheel)">Tanker Truck (12 Wheel)</option>
                                <option value="Tanker Truck (14 Wheel)">Tanker Truck (14 Wheel)</option>
                                <option value="Tanker Truck 10 Wheel">Tanker Truck 10 Wheel</option>
                                <option value="Tanker Truck 6 Wheel">Tanker Truck 6 Wheel</option>
                                <option value="Tata 407 2.5MT / 4 Wheel">Tata 407 2.5MT / 4 Wheel</option>
                                <option value="Trailer 28MT 18 Wheel">Trailer 28MT 18 Wheel</option>
                                <option value="Trailer 4923">Trailer 4923</option>
                                <option value="Truck 32MT / 16 wheel">Truck 32MT / 16 wheel</option>
                                <option value="Truck 25MT / 14 Wheel">Truck 25MT / 14 Wheel</option>
                                <option value="Truck 21MT / 12 wheel">Truck 21MT / 12 wheel</option>
                                <option value="Truck 20MT / 12 Wheel">Truck 20MT / 12 Wheel</option>
                                <option value="Truck 16MT / 10 Wheel">Truck 16MT / 10 Wheel</option>
                                <option value="Truck 15MT / 10 Wheel">Truck 15MT / 10 Wheel</option>
                                <option value="Truck 9MT / 6 Wheel">Truck 9MT / 6 Wheel</option>
                                <option value="Vehicle/ Car Carrier">Vehicle/ Car Carrier</option>

            </select>
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
        <div className="w-full h-full flex justify-end items-center mt-2">
          <button className='w-3/12  h-8  border border-[#5B297E] text-white bg-[#5B297E] rounded-md font-inter flex justify-center items-center text-sm   shadow-sm'>Submit</button>
        </div>
      </div>

                <div className="w-full h-full  grid md:grid-cols-3 grid-cols-1 gap-3 relative ml-3 mb-10">


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
                                <div className="w-[120px] h-8 bg-white mt-3 ml-4  flex border border-[#5B297E] justify-center items-center font-inter text-sm text-[#5B297E] rounded-sm shadow   "><span className='ml-2 mr-2 text-sm'><FaPhoneAlt /></span> Call  </div>
                                <div className="w-[120px] h-8 bg-[#5B297E] mt-3 ml-3 flex  justify-center items-center font-inter text-sm text-white rounded-sm shadow "> Book Now</div>
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
                                <div className="w-[120px] h-8 bg-white mt-3 ml-4  flex border border-[#5B297E] justify-center items-center font-inter text-sm text-[#5B297E] rounded-sm shadow   "><span className='ml-2 mr-2 text-sm'><FaPhoneAlt /></span> Call  </div>
                                <div className="w-[120px] h-8 bg-[#5B297E] mt-3 ml-3 flex  justify-center items-center font-inter text-sm text-white rounded-sm shadow "> Book Now</div>
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
                                <div className="w-[120px] h-8 bg-white mt-3 ml-4  flex border border-[#5B297E] justify-center items-center font-inter text-sm text-[#5B297E] rounded-sm shadow   "><span className='ml-2 mr-2 text-sm'><FaPhoneAlt /></span> Call  </div>
                                <div className="w-[120px] h-8 bg-[#5B297E] mt-3 ml-3 flex  justify-center items-center font-inter text-sm text-white rounded-sm shadow "> Book Now</div>
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
                                <div className="w-[120px] h-8 bg-white mt-3 ml-4  flex border border-[#5B297E] justify-center items-center font-inter text-sm text-[#5B297E] rounded-sm shadow   "><span className='ml-2 mr-2 text-sm'><FaPhoneAlt /></span> Call  </div>
                                <div className="w-[120px] h-8 bg-[#5B297E] mt-3 ml-3 flex  justify-center items-center font-inter text-sm text-white rounded-sm shadow "> Book Now</div>
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
                                <div className="w-[120px] h-8 bg-white mt-3 ml-4  flex border border-[#5B297E] justify-center items-center font-inter text-sm text-[#5B297E] rounded-sm shadow   "><span className='ml-2 mr-2 text-sm'><FaPhoneAlt /></span> Call  </div>
                                <div className="w-[120px] h-8 bg-[#5B297E] mt-3 ml-3 flex  justify-center items-center font-inter text-sm text-white rounded-sm shadow "> Book Now</div>
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
                                <div className="w-[120px] h-8 bg-white mt-3 ml-4  flex border border-[#5B297E] justify-center items-center font-inter text-sm text-[#5B297E] rounded-sm shadow   "><span className='ml-2 mr-2 text-sm'><FaPhoneAlt /></span> Call  </div>
                                <div className="w-[120px] h-8 bg-[#5B297E] mt-3 ml-3 flex  justify-center items-center font-inter text-sm text-white rounded-sm shadow "> Book Now</div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default SearchTruck