import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from '../../Sidebar/Sidebar'
import { FaPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { AxiosInstance } from '../../../../Api/axios';

const ViewBidsLoad = () => {
    const { loads_id } = useParams();
    console.log(loads_id,"loads id");
    
  const transporterData = useSelector((state) => state.transporter);
    const [loadData, setLoadData] = useState([]);
  const [message, setMessage] = useState('');

  

  useEffect(()=>{
    fetchData(loads_id,transporterData.users_id)
  },[])

  const fetchData=async(loads_id,user_id)=>{
    try {
        const response = await AxiosInstance.get(
          `${import.meta.env.VITE_BASE_URL}/Transpoter/viewAllBids?load_id=${loads_id}&user_id=${user_id}`
        );
        console.log(response);
  
        if (response.status === 200) {
          setLoadData(response.data.data); // Update loadData state
          setMessage('');
        } else {
          setLoadData([]);
          setMessage('No loads found.');
        }
      } catch (error) {
        console.error('Error fetching loads:', error);
        setMessage('Failed to load data. Please try again.');
      }

  }

  console.log(loadData,"load data");
  


    return (
        <div>
            <Sidebar />
            <div className="w-full h-16  flex items-center ">
                <div className="w-11/12  h-10 ">
                    <div className="w-full h-10 flex justify_start items-end ml-4">
                        <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">{`Your truck > ${loadData&&loadData.length>0?(loadData[0].materials_name):("")} > `} </h1>
                        <h1 className="font-inter font-semibold text-[#5B297E] text-lg">{` ${loadData&&loadData.length>0?(loadData[0].loads_id):("")}`} </h1>
                    </div>
                </div>
            </div>
            {
    loadData && loadData.length > 0 ? (  // Check if loadData exists and has items
        <>
            <div className="w-full h-auto flex justify-center items-center">
                <div className="w-11/12 bg-white border border-gray-300 p-4">
                    {/* Top Section */}
                    <div className="flex justify-between items-start border-b border-gray-200 pb-2">
                        <div>
                            <h2 className="text-lg font-semibold">{loadData[0].materials_name}</h2>
                            <p className="text-gray-600 text-sm">Wt: {loadData[0].truck_capacities_name}</p>
                        </div>
                        <div>
                            <p className="text-gray-700 text-sm font-medium">
                                Load ID: <span className="font-bold">#{loadData[0].loads_id}</span>
                            </p>
                        </div>
                    </div>

                    <div className="mt-2">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            <p className="text-gray-700">{loadData[0].pickupLoc}</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                            <p className="text-gray-700">{loadData[0].deliveryLoc}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-full h-auto flex justify-center mt-5">
                <div className="w-11/12 h-full flex justify-center items-center">
                    <table className="min-w-full border border-gray-200 rounded-sm overflow-hidden">
                        <thead className="bg-[#5B297E] text-white">
                            <tr>
                                <th className="w-20 h-5 text-center text-sm font-extralight px-2">Date</th>
                                <th className="w-20 h-5 text-center text-sm font-extralight px-2">Driver name</th>
                                <th className="w-20 h-5 text-center text-sm font-extralight px-2">Truck type</th>
                                <th className="w-20 h-5 text-center text-sm font-extralight px-2">Register number</th>
                                <th className="w-20 h-5 text-center text-sm font-extralight px-2">Amount</th>
                                <th className="w-20 h-5 text-center text-sm font-extralight px-2">Action</th>
                            </tr>
                        </thead>
                        <tbody className="bg-gray-100 text-gray-700">
                            {loadData.map((load, index) => (
                                <tr className="border-b border-[#6B7280]" key={index}>
                                    <td className="w-24 h-14 text-center font-inter text-xs font-bold p-2">{load.pickupDate}</td>
                                    <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">{load.users_name}</td>
                                    <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">{load.truck_types_name}</td>
                                    <td className="w-16 h-14 text-center font-inter text-xs font-bold p-2">{load.regNumber}</td>
                                    <td className="w-16 h-14 text-center font-inter text-xs font-bold p-2">₹{load.bidsTruck_amount}</td>
                                    <td className="w-10 h-14 text-center font-inter text-xs font-bold p-2">
                                        <button
                                            className="bg-[#5B297E] rounded-sm p-2 text-xs w-auto text-white h-8"
                                            onClick={() => { navigate('/Transpoter/View') }}
                                        >
                                            Accept/reject
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    ) : loadData && loadData.length === 0 ? (
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

export default ViewBidsLoad