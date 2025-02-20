import React, { useState } from 'react'
import { FaCheck, FaTimes } from 'react-icons/fa'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../../../../Api/axios';
import Modal from '../../../Modal/Modal';
import LoadNegotiation from './LoadNegotiation';



const LoadBiddingComponent = ({ bidderName, bidAmount, itemName, weight, origin, destination, date, vehicle_reg, user_id, trucks_id, loads_id, materials_id,bidsTruck_id }) => {
     
    const [isOpen, setIsOpen] = useState(false)
    const transporterData = useSelector((state) => state.transporter);
    const navigate = useNavigate()

    const createLoadSchedule = async (LoadScheduleData) => {
        try {
          const response = await AxiosInstance.post(
            `${import.meta.env.VITE_BASE_URL}/Transpoter/insertLoadSchedule`,
            LoadScheduleData 
          );

          if(response.status === 201){
            alert("Truck scheduled sucessfull")
            navigate("/c/Schedule")
          }
      
          console.log("Truck schedule created:", response.data);
          return response.data; 
      
        } catch (error) {
          console.error("Error creating truck schedule:", error);

          throw error; 

        }
      };

      const LoadScheduleData = {
        schedules_date: date,
        pickup_loc: origin,
        delivery_loc: destination,
        materials_id: materials_id,
        user_id: transporterData.users_id,
        users_id: user_id,
        truck_id: trucks_id,
        loads_id: loads_id,
        vehicle_reg: vehicle_reg,
    };

     const rejectBid = async (bidsTruck_id) => {
            try {
                const response = await AxiosInstance.patch(
                    `${import.meta.env.VITE_BASE_URL}/Transpoter/bidsTruckStatus`,
                    { bidsTruck_id }
                );
        
                if (response.status === 200) {
                    console.log('Bid rejected successfully:', response.data);
                    alert("your bid has bee declined ")
                   navigate(-1)
                } else {
                    console.error('Failed to reject bid:', response.data);
                    return null;
                }
            } catch (error) {
                console.error('Error rejecting bid:', error);
                return null;
            }
        };

        const openModal = () => {
            setIsOpen(true);
        };
    
        const closeModal = () => {
            setIsOpen(false);
        };



    


    return (
        <div>
            <div className="bg-white rounded-lg shadow-md w-96  "> {/* Adjust width as needed */}
            <Modal isOpen={isOpen} closeModal={closeModal}>
                    <LoadNegotiation
                        bid_id={bidsTruck_id}
                        bidderName={bidderName}
                        bidAmount={bidAmount}
                    />
                </Modal>
                <div className="flex justify-center items-center mb-2">
                    <div className="w-auto h-10 flex gap-4">
                        <div>
                            <h3 className=" font-semibold">{bidderName} <span className='font-thin '>bidded </span><span className='text-[#5b297e] text-lg font-semibold'>₹{bidAmount}</span></h3>
                        </div>
                    </div>
                </div>
                <div className="w-full h-36 bg-green-300">
                    <img className='w-fit h-fit object-cover' src="\images\Screenshot 2024-11-11 130820.png" alt="" />
                </div>

                <div className="mb-1 mt-3  flex justify-between items-center border border-[##D9D9D9] p-2 px-2">
                    <div className="w-fit h-5 flex ">

                        <p className="text-[#5B297E] text-sm font-semibold ">{itemName},</p>
                        <p className="text-black text-sm font-semibold ">{vehicle_reg}</p>

                    </div>
                </div>


                <div className=" justify-between h-14 p-2"> {/* Changed to space-between */}
                    <div className="flex flex-col"> {/* Added flex-col for origin and destination */}
                        <div className="flex items-center">
                            <div className="rounded-full bg-green-500 w-2 h-2 mr-2"></div>
                            <p className="text-gray-700">{origin}</p>
                        </div>
                        <div className="flex items-center">
                            <div className="rounded-full bg-red-500 w-2 h-2 mr-2"></div>
                            <p className="text-gray-700">{destination}</p>
                        </div>
                    </div>
                    <p className="text-gray-500 text-[9px] mt-1">Wt: <span className='font-semibold text-black'> {weight}</span></p>

                </div>
                <div className="flex space-x-2 justify-center items-center h-14 mt-5 bg-[#D9D9D9] rounded-b-lg p-2">
                    <button onClick={()=>{rejectBid(bidsTruck_id)}} className="bg-[#E30000] hover:bg-red-700 text-white  h-8 w-1/3  flex items-center justify-center gap-2">
                        Decline
                        <FaTimes className="mr-2 mt-1 font-thin" /> {/* Icon before text */}
                    </button>
                    <button onClick={()=>{ openModal()}} className="border border-[#008000] hover:border-[#008000] text-[#008000] hover:text-[#008000] bg-white font-semibold  h-8 w-1/3  flex items-center justify-center">

                        Negotiate
                    </button>
                    <button onClick={() => { createLoadSchedule(LoadScheduleData) }} className="bg-[#008000] hover:bg-[#008000] text-white   h-8 w-1/3  flex items-center justify-center gap-2">
                        Accept

                        <FaCheck className="mr-2 mt-1 font-thin" /> {/* Icon before text */}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LoadBiddingComponent