import React from 'react'
import { useParams } from 'react-router-dom'
import Sidebar from '../../Sidebar/Sidebar'
import { FaPlus } from 'react-icons/fa';

const ViewBidsTruck = () => {
    const { truck_id } = useParams();
    return (
        <div>
            <Sidebar />
            <div className="w-full h-16  flex items-center ">
                <div className="w-11/12  h-10 ">
                    <div className="w-full h-10 flex justify-between items-end ml-4">
                        <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">{"Your truck > Flatbed Truck > KL 07 AX 1234"} </h1>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto flex justify-center items-center">
                <div className="w-11/12 bg-white  border border-gray-300 p-4">
                    {/* Top Section */}
                    <div className="flex justify-between items-start border-b border-gray-200 pb-2">
                        <div>
                            <h2 className="text-lg font-semibold">Flatbed Truck, KL 07 AX 1234</h2>
                            <p className="text-gray-600 text-sm">Wt: 4T</p>
                        </div>
                        <div>
                            <p className="text-gray-700 text-sm font-medium">
                                Truck ID: <span className="font-bold">#1234QWERTY</span>
                            </p>
                        </div>
                    </div>


                    <div className="mt-2">
                        <div className="flex items-center gap-2">
                            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                            <p className="text-gray-700">Ernakulam, Kerala</p>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                            <p className="text-gray-700">Kozhikode, Kerala</p>
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
                            <tr className='border-b border-[#6B7280] ' >
                                <td className="w-24 h-14 text-center font-inter text-xs font-bold p-2">18 Sep, 2024</td>
                                <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">Isacc Fleming</td>
                                <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">Frozen Food</td>
                                <td className="w-16 h-14 text-center font-inter text-xs font-bold p-2">Ernakulam</td>
                                <td className="w-16 h-14 text-center font-inter text-xs font-bold p-2">Kozhikode</td>
                                <td className="w-16 h-14 text-center font-inter text-xs font-bold p-2">₹4100</td>
                                <td className="w-10 h-14 text-center font-inter text-xs font-bold p-2"><button className=' bg-[#5B297E] rounded-sm p-2 text-xs w-auto text-white h-8' onClick={() => { navigate('/Transpoter/View') }}>Accept/reject</button></td>

                            </tr>
                            <tr className='border-b border-[#6B7280] ' >
                                <td className="w-24 h-14 text-center font-inter text-xs font-bold p-2">18 Sep, 2024</td>
                                <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">Isacc Fleming</td>
                                <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">Frozen Food</td>
                                <td className="w-16 h-14 text-center font-inter text-xs font-bold p-2">Ernakulam</td>
                                <td className="w-16 h-14 text-center font-inter text-xs font-bold p-2">Kozhikode</td>
                                <td className="w-16 h-14 text-center font-inter text-xs font-bold p-2">₹4100</td>
                                <td className="w-10 h-14 text-center font-inter text-xs font-bold p-2"><button className=' bg-[#5B297E] rounded-sm p-2 text-xs w-auto text-white h-8' onClick={() => { navigate('/Transpoter/View') }}>Accept/reject</button></td>

                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default ViewBidsTruck