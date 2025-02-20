import React, { useEffect, useState } from 'react'
import { FaPlus } from "react-icons/fa6";

import { MdCalendarToday } from "react-icons/md";
import { FaMapMarkerAlt, FaStar } from 'react-icons/fa';
import { FaPhoneAlt } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AxiosInstance } from '../../../Api/axios';


const YourTruck = () => {
    const [selected, setSelected] = useState("All");
    const [status, setStatus] = useState("")
    const [TruckData, setTruckData] = useState([]);
    const [message, setMessage] = useState('');
    const navigate = useNavigate()
    const transporterData = useSelector((state) => state.transporter);

    const getTrucks = async () => {
        try {
            const response = await AxiosInstance.get(
                `${import.meta.env.VITE_BASE_URL}/Transpoter/getTrucksByUserId?user_id=${transporterData.users_id}&trucks_status=${status}`
            );
            console.log(response);

            if (response.status === 200) {
                console.log(response.data.data);
                setTruckData(response.data.data); // Update loadData state
                setMessage('');
            } else {
                setTruckData([]);
                setMessage('No loads found.');
            }
        } catch (error) {
            console.error('Error fetching loads:', error);
            setMessage('Failed to load data. Please try again.');
        }
    };

    console.log(TruckData, "response");

    useEffect(() => {
        getTrucks()
    }, [status])

    const selectButton = (item) => {
        setSelected(item)
        if (item === "All"){
            setStatus("")
            
        }else if (item === "Added") {
            setStatus(1)
        } else {
            setStatus(5)
        }
    }

   const ViewALLBidsTruck = (trucks_id,regNum,weight, pickupLocation, deliveryLocation,truck_type) =>{
    navigate(`/c/ViewBidsTruck/${trucks_id}`,{
        state: { regNum, weight, pickupLocation, deliveryLocation, truck_type },

    })
   }

    return (
        <div>
            <div className="w-full h-16  flex items-center ">
                <div className="w-11/12  h-10 ">
                    <div className="w-full h-10 flex justify-between items-end ml-4">
                        <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">Your Truck</h1>
                        <button className="w-28 h-6 bg-[#5B297E] flex justify-center items-center rounded-sm text-white text-xs mb-2" onClick={() => { navigate('/c/AddTruck') }}><FaPlus />Add Truck</button>
                    </div>
                </div>
            </div>

            <div className="w-full h-20 flex items-center gap-2 ml-3">
                {["All", "Added", "Posted"].map((item) => (
                    <button
                        key={item}
                        onClick={() => selectButton(item)}
                        className={`border-2 border-[#5B297E] font-bold px-4 py-1 rounded-full w-auto h-10 text-center ${selected === item
                                ? "bg-[#5B297E] text-white"
                                : "text-[#5B297E]"
                            }`}
                    >
                        {item}
                    </button>
                ))}
            </div>
            <div className="w-11/12 h-full  grid md:grid-cols-3 grid-cols-1 gap-3 relative ml-3 mb-10">
                {
                    TruckData ? (
                        TruckData.length > 0 ? (
                            <>
                                {TruckData.map((item, index) => (

                                    <div className="w-full h-64 border border-black mt-5 rounded-lg shadow-md">

                                        <div className="w-full h-28 bg-red-200 rounded-t-md ">
                                            <img src="\images\Screenshot 2024-11-11 130820.png" className='w-full h-full object-cover rounded-t-md ' alt="" />
                                        </div>
                                        <div className="w-11/12 h-9 border-b border-[#BC89E0] flex p-1 gap-2 ml-2">
                                            <h3 className="text-[#5B297E] text-[10px] font-bold  mt-2">
                                                {item.truck_types_name} <span className='text-black font-normal'>{item.regNumber}</span>
                                            </h3>
                                            {/* <div className="flex items-center ">
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
                      </div> */}
                                        </div>
                                        <div className="w-full h-12 ">
                                            <div className="flex items-center text-gray-600 mt-2 ml-2">
                                                <FaMapMarkerAlt className="text-green-500" />
                                                <span className="ml-2 text-black text-[15px]">{item.location}</span>
                                            </div>
                                            <p className=" mt-1 ml-2 text-[10px] text-black">Wt: {item.truck_capacities_name}</p>
                                        </div>
                                        <div className="w-full h-[50px] bg-[#D9D9D9] rounded-b-md  ">
                                            <div className="w-full h-full  rounded-b-md flex">
                                                {item && (
                                                    <>
                                                        {item.trucks_status === "1" ? (
                                                            <>
                                                                <div
                                                                    className="w-[120px] h-8 bg-white mt-3 ml-4 flex border border-[#5B297E] justify-center items-center font-inter text-sm text-[#5B297E] rounded-sm shadow cursor-pointer"
                                                                    onClick={() => navigate(`/c/PostTruck/${item.truck_id}`)}
                                                                >
                                                                    Post Truck
                                                                </div>
                                                                <div className="w-[120px] h-8 bg-[#5B297E] mt-3 ml-3 flex justify-center items-center font-inter text-sm text-white rounded-sm shadow cursor-pointer"
                                                                onClick={() => navigate(`/c/Marketplace`)}
                                                                >
                                                                    Find Load
                                                                </div>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <div
                                                                    className="w-[120px] h-8 bg-white mt-3 ml-4 flex border border-[#5B297E] justify-center items-center font-inter text-sm text-[#5B297E] rounded-sm shadow cursor-pointer"
                                                                    onClick={() => ViewALLBidsTruck(item.truck_id,item.regNumber,item.truck_capacities_name,item.postTrucks_from,item.postTrucks_to,item.truck_types_name)}
                                                                >
                                                                    View Bids
                                                                </div>
                                                                <div className="w-[120px] h-8 bg-[#5B297E] mt-3 ml-3 flex justify-center items-center font-inter text-sm text-white rounded-sm shadow cursor-pointer"
                                                                onClick={() => navigate(`/c/Marketplace`)}
                                                                >
                                                                Find Load
                                                                </div>
                                                            </>
                                                        )}
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </>
                        ) : ( // Message when `LoadData.length === 0`
                            <h1 className="text-center text-gray-500 mt-10">{message}</h1>
                        )
                    ) : (
                        <h1 className="text-center mt-10">
                            <span className="loading loading-infinity loading-lg"></span>
                        </h1>
                    )}
            </div>

        </div>
    )
}

export default YourTruck