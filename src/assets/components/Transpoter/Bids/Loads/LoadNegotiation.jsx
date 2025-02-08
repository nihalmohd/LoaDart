import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../../../../Api/axios';

const LoadNegotiation = ({bid_id, bidderName, bidAmount}) => {
  const transporterData = useSelector((state) => state.transporter);
  const [negotiatedValue,setNegotiatedValue] = useState("")
  const navigate = useNavigate()

  const negotiateBid = async (bidId, userId, amount) => {
    try {
      if(amount===""){
        alert("please enter amount ")
        return 
      }
        const response = await AxiosInstance.post(
            "/Transpoter/negotiations",
            {
                bid_id: bidId,
                user_id: userId,
                amount: amount,
            },
        );
        console.log(response);
        
        if (response.status === 201 ) {
            alert("negotiation completed")
            console.log("Negotiation successful:", response.data);
            navigate(-1); // Navigate back on success
        } else {
            console.error("Negotiation failed:", response.data);
        }

        return response.data;
    } catch (error) {
        console.error("Error in Negotiation:", error.response?.data || error.message);
        throw error;
    }
};

  return (

      <div className="bg-white w-96 rounded-lg shadow-lg ">
        {/* Header */}
        <div className="flex items-center justify-center ">

          <p className="font-bold text-sm">
            {bidderName} <span className="text-gray-600 font-thin text-sm">bidded</span>{" "}
            <span className="text-[#5b297e] text-sm font-bold">₹{bidAmount}</span>
          </p>
        </div>

        {/* Input Field */}

        <div className="w-full h-28  p-5 mt-1">
        <label className="block mb-2 text-gray-600 text-xs font-medium">
          Enter your Amount
        </label>
        <input
        onChange={(e)=>{setNegotiatedValue(e.target.value)}}
          type="number"
          placeholder="Enter amount"
          value={negotiatedValue}
          className="w-full border border-black rounded-md p-2 text-lg font-medium  focus:outline-none"
        />

        </div>

        {/* Buttons */}
        <div className="w-full h-16 bg-[#D9D9D9] p-3 rounded-b-lg">
        <div className="flex justify-between">
          <button
            className="bg-red-600 text-white py-2 px-4 rounded-md w-1/2 mr-2"
            onClick={()=>{navigate(-1)}}
          >
            Cancel
          </button>
          <button
            className="bg-[#5b297e] text-white py-2 px-4 rounded-md w-1/2 "
            onClick={()=>{negotiateBid(bid_id,transporterData.users_id,negotiatedValue)}}
          >
            Confirm
          </button>
        </div>
        </div>
      </div>

  )
}

export default LoadNegotiation