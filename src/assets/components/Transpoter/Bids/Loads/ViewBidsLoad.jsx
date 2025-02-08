import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Sidebar from '../../Sidebar/Sidebar'
import { FaPlus } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { AxiosInstance } from '../../../../Api/axios';
import LoadBiddingComponent from './LoadBiddingComponent';
import Modal from '../../../Modal/Modal';

const ViewBidsLoad = () => {
    const { loads_id } = useParams();

    const transporterData = useSelector((state) => state.transporter);
    const [loadData, setLoadData] = useState([]);
    const [negotiatedAmount, setnegotiatedAmount] = useState([]);
    const [message, setMessage] = useState('');

    const [expandedRow, setExpandedRow] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const [index, setIndex] = useState(0)
    const navigate = useNavigate();

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
        fetchData(loads_id, transporterData.users_id)
    }, [])

    const fetchData = async (loads_id, user_id) => {
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

    console.log(loadData, "load data");


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




    return (
        <div>
            <Sidebar />
            <div className="w-full h-16  flex items-center ">
                <Modal isOpen={isOpen} closeModal={closeModal}>
                    <LoadBiddingComponent
                        bidderName={loadData && loadData.length > 0 ? loadData[index].users_name : ""}
                        bidAmount={loadData && loadData.length > 0 ? loadData[index].bidsTruck_amount : ""}
                        itemName={loadData && loadData.length > 0 ? loadData[index].truck_types_name : ""}
                        weight={loadData && loadData.length > 0 ? loadData[index].truck_capacities_name : ""}
                        origin={loadData && loadData.length > 0 ? loadData[index].pickupLoc : ""}
                        destination={loadData && loadData.length > 0 ? loadData[index].deliveryLoc : ""}
                        date={loadData && loadData.length > 0 ? new Date(loadData[index].pickupDate).toISOString().split("T")[0] : ""}
                        vehicle_reg={loadData && loadData.length > 0 ? loadData[index].regNumber : ""}
                        user_id={loadData && loadData.length > 0 ? loadData[index].users_id : ""}
                        trucks_id={loadData && loadData.length > 0 ? loadData[index].trucks_id : ""}
                        loads_id={loadData && loadData.length > 0 ? loadData[index].loads_id : ""}
                        materials_id={loadData && loadData.length > 0 ? loadData[index].materials_id : ""}
                        bidsTruck_id={loadData && loadData.length > 0 ? loadData[index].bidsTruck_id : ""}
                    />
                </Modal>
                <div className="w-11/12  h-10 ">
                    <div className="w-full h-10 flex justify_start items-end ml-4">
                        <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">{`Your Load > ${loadData && loadData.length > 0 ? (loadData[0].materials_name) : ("")} > `} </h1>
                        <h1 className="font-inter font-semibold text-[#5B297E] text-lg">{` ${loadData && loadData.length > 0 ? (loadData[0].loads_id) : ("")}`} </h1>
                    </div>
                </div>
            </div>
            {
                loadData && loadData.length > 0 ? (
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
                                            <>
                                                <tr
                                                    key={index}
                                                    className="border-b border-gray-500 cursor-pointer"
                                                    onClick={() => { fetchLoadNegotiationData(load.bidsTruck_id, transporterData.users_id), toggleRow(index) }}
                                                >
                                                    <td className="w-24 h-14 text-center text-xs font-bold p-2">
                                                        {new Date(load.pickupDate).toISOString().split("T")[0]}
                                                    </td>
                                                    <td className="w-20 h-14 text-center text-xs font-bold p-2">{load.users_name}</td>
                                                    <td className="w-20 h-14 text-center text-xs font-bold p-2">{load.truck_types_name}</td>
                                                    <td className="w-16 h-14 text-center text-xs font-bold p-2">{load.regNumber}</td>
                                                    <td className="w-16 h-14 text-center text-xs font-bold p-2">₹{load.bidsTruck_amount}</td>
                                                    <td className="w-10 h-14 text-center text-xs font-bold p-2">
                                                        <button
                                                            className="bg-[#5B297E] rounded-sm p-2 text-xs w-auto text-white h-8"
                                                            onClick={(e) => {
                                                                setIndex(index)
                                                                openModal()
                                                            }}
                                                        >
                                                            Accept / Reject
                                                        </button>
                                                    </td>
                                                </tr>

                                                {/* Expanded Row (Appears Below the Clicked Row) */}
                                                {expandedRow === index && (
                                                    <tr>
                                                        <td colSpan="7" className="p-4 bg-gray-100">
                                                            <div>
                                                                <p className="text-green-500 text-md">
                                                                    ● <span className="font-semibold text-black text-sm">{load.users_name}</span>
                                                                    <span className="text-[#6B7280]"> bidded </span>
                                                                    <span className="text-[#5b297e] text-sm">₹{load.bidsTruck_amount}</span>
                                                                </p>

                                                                <p className="text-red-600">
                                                                    {negotiatedAmount && Array.isArray(negotiatedAmount) && negotiatedAmount.length > 0 ? (
                                                                        negotiatedAmount.map((item, index) => (
                                                                            <React.Fragment key={index}>
                                                                                ● <span className="text-[#6B7280] text-sm">You rejected</span>
                                                                                <span className="text-sm font-semibold text-black"> {load?.users_name} </span>
                                                                                <span className="text-sm text-black"> bid of </span>
                                                                                <span className="text-[#5b297e]">₹{load?.bidsTruck_amount}</span>
                                                                                <span className="text-sm font-semibold text-black"> and resubmitted bid of </span>
                                                                                <span className="text-[#5b297e] text-sm">₹{item?.amount}</span>
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