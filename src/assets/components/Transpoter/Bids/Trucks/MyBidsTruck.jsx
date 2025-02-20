import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../../Sidebar/Sidebar'
import { FaPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { AxiosInstance } from '../../../../Api/axios';
import Modal from '../../../Modal/Modal';
import TruckBiddingComponent from './TruckBiddingComponent';

const MyBidsTruck = () => {

      const { truck_id } = useParams();
      const location = useLocation();
      const {regNum, weight, pickupLocation, deliveryLocation, truck_type} = location.state || {};
        const transporterData = useSelector((state) => state.transporter);
        const [TruckData, setTruckData] = useState([]);
        const [negotiatedAmount, setnegotiatedAmount] = useState([]);
        const [message, setMessage] = useState('');
        const [expandedRow, setExpandedRow] = useState(null);
        const [isOpen, setIsOpen] = useState(false)
        const [index, setIndex] = useState(0)
        const navigate = useNavigate();
            const [selected, setSelected] = useState("My truck bids");
        
    
        const openModal = () => {
            setIsOpen(true);
        };
    
        const closeModal = () => {
            setIsOpen(false);
        };
    
    
        const toggleRow = (index) => {
            setExpandedRow(expandedRow === index ? null : index);
        };
    
        useEffect(() => {
            fetchData(truck_id, transporterData.users_id)
        }, [])
    
        const fetchData = async (truck_id, user_id) => {
            try {
                const response = await AxiosInstance.get(
                    `${import.meta.env.VITE_BASE_URL}/Transpoter/getBidsByUserAndTruck?trucks_id=${truck_id}&user_id=${transporterData.users_id}`
                );
                console.log(response, "response");
    
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
    
        const fetchLoadNegotiationData = async (bid_id, user_id) => {
            try {
                const response = await AxiosInstance.get(
                    `${import.meta.env.VITE_BASE_URL}/Transpoter/getNegotiationByUserAndBid?user_id=${user_id}&bid_id=${bid_id}`
                );
                console.log(response);
    
                if (response.status === 200) {
                    setnegotiatedAmount(response.data.negotiation); // Update loadData state
                    setMessage('');
                } else {
                    setnegotiatedAmount([]);
                    setMessage('No loads found.');
                }
            } catch (error) {
                console.error('Error fetching loads:', error);
                setMessage('Failed to load data. Please try again.');
            }
    
        }
    
        console.log(negotiatedAmount);
    
    
        const selectButton = (item) => {
            setSelected(item)
            if (item === "Bids for truck"){
               navigate(-1)
            }
        }
    
    
    
    
    
  return (
    <div>

            <div className="w-full h-16  flex items-center ">
                <Modal isOpen={isOpen} closeModal={closeModal}>
                    <TruckBiddingComponent
                        bidderName={TruckData && TruckData.length > 0 ? TruckData[index].users_name : ""}
                        bidAmount={TruckData && TruckData.length > 0 ? TruckData[index].bidsLoad_amount : ""}
                        itemName={TruckData && TruckData.length > 0 ? TruckData[index].materials_name : ""}
                        weight={TruckData && TruckData.length > 0 ? TruckData[index].truck_capacities_name : ""}
                        origin={TruckData && TruckData.length > 0 ? TruckData[index].pickupLoc : ""}
                        destination={TruckData && TruckData.length > 0 ? TruckData[index].deliveryLoc : ""}
                        date={TruckData && TruckData.length > 0 ? new Date(TruckData[index].pickupDate).toISOString().split("T")[0] : ""}
                        vehicle_reg={TruckData && TruckData.length > 0 ? TruckData[index].regNumber : ""}
                        user_id={TruckData && TruckData.length > 0 ? TruckData[index].users_id : ""}
                        trucks_id={TruckData && TruckData.length > 0 ? TruckData[index].truck_id : ""}
                        loads_id={TruckData && TruckData.length > 0 ? TruckData[index].loads_id : ""}
                        materials_id={TruckData && TruckData.length > 0 ? TruckData[index].materials_id : ""}
                        bidsLoad_id={TruckData && TruckData.length > 0 ? TruckData[index].bidsLoad_id : ""}
                    />
                </Modal>
                <div className="w-11/12  h-10 ">
                    <div className="w-full h-10 flex  items-end ml-4">
                        <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">{`Your truck > ${truck_type} >  `} </h1>
                        <h1 className="font-inter font-semibold text-[#5B297E] text-lg">{`  ${regNum}`} </h1>
                    </div>
                </div>
            </div>

         

                        <div className="w-full h-auto flex justify-center items-center">
                            <div className="w-11/12 bg-white  border border-gray-300 p-4">
                                {/* Top Section */}
                                <div className="flex justify-between items-start border-b border-gray-200 pb-2">
                                    <div>
                                    <h2 className="text-lg font-semibold">{`${truck_type}, ${regNum}`}</h2>
                                        <p className="text-gray-600 text-sm">Wt: {weight}</p>
                                    </div>
                                    <div>
                                        <p className="text-gray-700 text-sm font-medium">
                                            Truck ID: <span className="font-bold">#{truck_id}</span>
                                        </p>
                                    </div>
                                </div>


                                <div className="mt-2">
                                    <div className="flex items-center gap-2">
                                        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                                        <p className="text-gray-700">{pickupLocation}</p>
                                    </div>
                                    <div className="flex items-center gap-2 mt-1">
                                        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                                        <p className="text-gray-700">{deliveryLocation}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-12  flex justify-center items-center mt-1">
                            <div className="w-11/12 h-10 ">
                                <div className="w-full h-10 flex items-center gap-2">
                                    {["Bids for truck", "My truck bids"].map((item) => (
                                        <button
                                            key={item}
                                            onClick={() => selectButton(item)}
                                            className={`border-2 border-[#5B297E] text-sm font-bold px-4 py-1 rounded w-auto h-8 text-center ${selected === item
                                                ? "bg-[#5B297E] text-white"
                                                : "text-[#5B297E]"
                                                }`}
                                        >
                                            {item}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                        {
                TruckData && TruckData.length > 0 ? (
                    <>

                        <div className="w-full h-auto  flex justify-center mt-5">
                            <div className="w-11/12 h-full flex justify-center items-center">

                                <table className="min-w-full border border-gray-200 rounded-sm overflow-hidden ">
                                    <thead className="bg-[#5b297e] text-white">
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
                                        {TruckData.map((item, index) => (
                                            <>
                                                <tr
                                                    key={index}
                                                    className="border-b border-[#6B7280] cursor-pointer"
                                                    onClick={() =>{fetchLoadNegotiationData(item.bidsLoad_id,transporterData.users_id),toggleRow(index )}}
                                                >
                                                    <td className="w-24 h-14 text-center font-inter text-xs font-bold p-2">
                                                        {new Date(item.pickupDate).toISOString().split("T")[0]}
                                                    </td>
                                                    <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">{item.users_name}</td>
                                                    <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">{item.materials_name}</td>
                                                    <td className="w-16 h-14 text-center font-inter text-xs font-bold p-2">{item.pickupLoc}</td>
                                                    <td className="w-16 h-14 text-center font-inter text-xs font-bold p-2">{item.deliveryLoc}</td>
                                                    <td className="w-16 h-14 text-center font-inter text-xs font-bold p-2">₹{item.bidsTruck_amount}</td>
                                                    <td className="w-10 h-14 text-center font-inter text-xs font-bold p-2">
                                                        <button
                                                            className="bg-[#5B297E] rounded-sm p-2 text-xs w-auto text-white h-8"
                                                            onClick={(e) => {
                                                                e.stopPropagation(); // Prevent row click from toggling
                                                                setIndex(index)
                                                                openModal()
                                                            }}
                                                        >
                                                            Accept/reject
                                                        </button>
                                                    </td>
                                                </tr>

                                                {/* Expanded Row (Appears Below the Clicked Row) */}
                                                {expandedRow === index && (
                                                    <tr>
                                                        <td colSpan="7" className="p-4 bg-gray-100">
                                                            <div>
                                                                <p className="text-green-500 text-md">
                                                                    ● <span className="font-semibold text-black text-sm">{item.users_name}</span>
                                                                    <span className="text-[#6B7280]"> bidded </span>
                                                                    <span className="text-[#5b297e] text-sm">₹{item.bidsTruck_amount}</span>
                                                                </p>

                                                                <p className="text-red-600">
                                                                    {negotiatedAmount && Array.isArray(negotiatedAmount) && negotiatedAmount.length > 0 ? (
                                                                        negotiatedAmount.map((negotiated, index) => (
                                                                            <React.Fragment key={index}>
                                                                                ● <span className="text-[#6B7280] text-sm">You rejected</span>
                                                                                <span className="text-sm font-semibold text-black"> {item?.users_name} </span>
                                                                                <span className="text-sm text-black"> bid of </span>
                                                                                <span className="text-[#5b297e]">₹{item?.bidsTruck_amount}</span>
                                                                                <span className="text-sm font-semibold text-black"> and resubmitted bid of </span>
                                                                                <span className="text-[#5b297e] text-sm">₹{negotiated?.amount}</span>
                                                                            </React.Fragment>
                                                                        ))
                                                                    ) : (
                                                                        <p>Negotiation not found</p>
                                                                    )}
                                                                </p>

                                                            </div>
                                                        </td>
                                                    </tr>
                                                )}
                                            </>
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

export default MyBidsTruck