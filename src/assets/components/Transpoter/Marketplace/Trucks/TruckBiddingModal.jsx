import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AxiosInstance } from '../../../../Api/axios';

const TruckBiddingModal = ({ TruckTypename, capacity, regnumber, pickuploc, deliveryLoc, trucks_id }) => {
  const [selectLoad, setselectloadData] = useState("");  // Fix: Correct state setter
  const [message, setMessage] = useState('');
  const [loadData, setloadData] = useState([]); // Fix: Ensure it's an array
  const [amount, setAmount] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const transporterData = useSelector((state) => state.transporter);

  // Fetch loads data
  const getLoads = async () => {
    try {
      const response = await AxiosInstance.get(
        `${import.meta.env.VITE_BASE_URL}/Transpoter/getLoadsByUserId?user_id=${transporterData.users_id}&page=1`
      );

      if (response.status === 200 && Array.isArray(response.data.data)) { // Fix: Ensure it's an array
        setloadData(response.data.data);
        setMessage("");
      } else {
        setloadData([]); // Fix: Avoid undefined issues
        setMessage("No loads found.");
      }
    } catch (error) {
      console.error("Error fetching loads:", error);
      setMessage("Failed to load data. Please try again.");
    }
  };

  useEffect(() => {
    getLoads();
  }, []);

  // Submit bid
  const handleConfirmBidding = async () => {
    if (!amount || !selectLoad) {
      alert("Please enter an amount and select a load.");
      return;
    }

    setLoading(true);

    const bidData = {
      bidsTruck_amount: Number(amount),
      loads_id: selectLoad,
      user_id: transporterData.users_id,
      trucks_id: trucks_id
    };

    try {
      const response = await AxiosInstance.post("/Transpoter/insertBidsTruck", bidData);
       console.log(response);
       
      if (response.status === 201) {
        alert("Bid submitted successfully!");
        setAmount("");
        setselectloadData(""); // Fix: Correct reset
      } else {
        alert("Failed to submit bid. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting bid:", error);
      alert("Error occurred while submitting the bid.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg w-[380px]">
      <div className="w-full h-auto bg-black rounded-t-xl mb-2">
        <img src="\images\Screenshot 2024-11-11 130820.png" className="w-fit h-fit rounded-t-xl" alt="Truck" />
      </div>

      <div className="w-full h-auto p-3 rounded-t-lg border-b border-[#D9D9D9]">
        <div className="w-full h-auto flex">
          <h2 className="text-sm font-nexa font-semibold text-[#5B297E]">{TruckTypename}</h2>
          <h2 className="text-sm font-nexa ml-2">{regnumber}</h2>
        </div>
        <div className="flex justify-between text-xs text-gray-600 mt-1">
          <span>
            Wt: <strong>{capacity}</strong>
          </span>
        </div>
      </div>

      <div className="mt-1 p-3 h-14">
        <p className="flex items-center gap-2">
          <span className="w-2 h-2 text-sm bg-green-500 rounded-full"></span>
          {pickuploc}
        </p>
        <p className="flex items-center gap-2">
          <span className="w-2 h-2 text-sm bg-red-500 rounded-full"></span>
          {deliveryLoc}
        </p>
      </div>

      {/* Load Selection Dropdown */}
      <div className="pt-3 pl-3 pr-3">
        <label className="block text-sm font-medium text-gray-700">Select Load</label>
        <select
          value={selectLoad}
          onChange={(e) => setselectloadData(e.target.value)} // Fix: Correct state setter
          className="w-full border h-10 border-gray-300 rounded mt-1 text-sm focus:outline-none"
        >
          <option value="" disabled>Select a load</option>
          {loadData.length > 0 ? (
            loadData.map((item, index) => (
              <option key={index} value={item.loads_id}>
                {item.materials_name}
              </option>
            ))
          ) : (
            <option disabled>No loads available</option>
          )}
        </select>
      </div>

      {/* Enter Amount Field */}
      <div className="p-3">
        <label className="block text-sm font-medium text-gray-700">Enter your Amount</label>
        <input
          type="number"
          placeholder="eg: ₹3500"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full border border-gray-300 rounded px-3 py-2 mt-1 text-sm font-semibold focus:outline-none"
        />
      </div>

      {/* Confirm Bidding Button */}
      <div className="w-full h-14 bg-[#D9D9D9] flex justify-center items-center rounded-b-xl">
        <button
          className={`w-1/2 mt-2 mb-2 h-10 ${
            loading ? "bg-gray-400 cursor-not-allowed" : "bg-[#5B297E] hover:bg-[#4f276b]"
          } text-white font-inter text-sm rounded`}
          onClick={handleConfirmBidding}
          disabled={loading}
        >
          {loading ? "Submitting..." : "Confirm Bidding"}
        </button>
      </div>
    </div>
  );
}

export default TruckBiddingModal;
