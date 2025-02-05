import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from '../../Sidebar/Sidebar'
import { FaPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { AxiosInstance } from '../../../../Api/axios';

const ViewBidsTruck = () => {
    const { truck_id } = useParams();
    const transporterData = useSelector((state) => state.transporter);
    const [TruckData, setTruckData] = useState([]);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchData(truck_id, transporterData.users_id)
    }, [])

    const fetchData = async (truck_id, user_id) => {
        try {
            const response = await AxiosInstance.get(
                `${import.meta.env.VITE_BASE_URL}/Transpoter/viewAllBidsTruck?trucks_id=${truck_id}&user_id=${user_id}`
            );
            console.log(response,"response");

            if (response.status === 200) {
                setTruckData(response.data.data); 
                setMessage('');
            } else {
                setTruckData([]);
                setMessage('No Trucks found.');
            }
        } catch (error) {
            console.error('Error fetching Trucks:', error);
            setMessage('Failed to Truck data. Please try again.');
        }

    }

    console.log(TruckData, "Truck data");


    return (
        <div>
            <Sidebar />
            <div className="w-full h-16  flex items-center ">
                <div className="w-11/12  h-10 ">
                    <div className="w-full h-10 flex  items-end ml-4">
                    <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">{`Your truck > ${TruckData && TruckData.length > 0 ? (TruckData[0].materials_name) : ("")} >  `} </h1>
                    <h1 className="font-inter font-semibold text-[#5B297E] text-lg">{`  ${TruckData && TruckData.length > 0 ? ( TruckData[0].truck_id) : ("")}`} </h1>
                    </div>
                </div>
            </div>

            {
                TruckData && TruckData.length > 0 ? (
                    <>
                    
            <div className="w-full h-auto flex justify-center items-center">
                <div className="w-11/12 bg-white  border border-gray-300 p-4">
                    {/* Top Section */}
                    <div className="flex justify-between items-start border-b border-gray-200 pb-2">
                        <div>
                            <h2 className="text-lg font-semibold">{TruckData[0].truck_types_name}, {TruckData[0].regNumber}</h2>
                            <p className="text-gray-600 text-sm">Wt: {TruckData[0].truck_capacities_name}</p>
                        </div>
                        <div>
                            <p className="text-gray-700 text-sm font-medium">
                                Truck ID: <span className="font-bold">#{TruckData[0].truck_id}</span>
                            </p>
                        </div>
                    </div>


                    <div className="mt-2">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            <p className="text-gray-700">{TruckData[0].postTrucks_from}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                            <p className="text-gray-700">{TruckData[0].postTrucks_to}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-auto  flex justify-center mt-5">
                <div className="w-11/12 h-full flex justify-center items-center">

                    <table className="min-w-full border border-gray-200 rounded-sm overflow-hidden ">
                        <thead className="bg-[#5B297E] text-white">
                            <tr >
                                <th className="w-20 h-5 text-center text-sm font-extralight px-2">Date</th>
                                <th className="w-20 h-5 text-center text-sm font-extralight px-2">shipper name</th>
                                <th className="w-20 h-5 text-center text-sm font-extralight px-2">Material</th>
                                <th className="w-20 h-5 text-center text-sm font-extralight px-2">From</th>
                                <th className="w-20 h-5 text-center text-sm font-extralight px-2">To</th>
                                <th className="w-20 h-5 text-center text-sm font-extralight px-2">Amount</th>
                                <th className="w-20 h-5 text-center text-sm font-extralight px-2">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-100 text-gray-700">
                            {
                                TruckData.map((item,index)=>(

                            <tr className='border-b border-[#6B7280] ' >
                                <td className="w-24 h-14 text-center font-inter text-xs font-bold p-2">{new Date(item.pickupDate).toISOString().split("T")[0]}</td>
                                <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">{item.users_name}</td>
                                <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">{item.materials_name}</td>
                                <td className="w-16 h-14 text-center font-inter text-xs font-bold p-2">{item.postTrucks_from}</td>
                                <td className="w-16 h-14 text-center font-inter text-xs font-bold p-2">{item.postTrucks_to}</td>
                                <td className="w-16 h-14 text-center font-inter text-xs font-bold p-2">₹{item.bidsLoad_amount}</td>
                                <td className="w-10 h-14 text-center font-inter text-xs font-bold p-2"><button className=' bg-[#5B297E] rounded-sm p-2 text-xs w-auto text-white h-8' onClick={() => { navigate('/Transpoter/View') }}>Accept/reject</button></td>

                            </tr>
                                ))}
                        </tbody>
                    </table>
                </div>

            </div>
                    </>
                    ) : TruckData && TruckData.length === 0 ? (
                        <h1 className="text-center text-gray-500 mt-10">{message}</h1>
                    ) : (
                        <h1 className="text-center mt-10">
                            <span className="loading loading-infinity loading-lg"></span>
                        </h1>
                    )
                }
        </div>
    )
}

export default ViewBidsTruck