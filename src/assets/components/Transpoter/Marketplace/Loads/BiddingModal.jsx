import { useEffect, useState } from "react";
import { AxiosInstance } from "../../../../Api/axios";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BiddingModal = ({ materialname, capacity, pickupDate, pickuploc, deliveryLoc, load_id }) => {
  const [amount, setAmount] = useState("");
  const [selectedTruck, setSelectedTruck] = useState("");
  const [message, setMessage] = useState("");
  const [TruckData, setTruckData] = useState([]);
  const [loading, setLoading] = useState(false); // For button loading state

  const transporterData = useSelector((state) => state.transporter);
  const navigate = useNavigate()

  // Fetch trucks list for dropdown
  const getTrucks = async () => {
    try {
      const response = await AxiosInstance.get(
        `${import.meta.env.VITE_BASE_URL}/Transpoter/getTrucksByUserId?user_id=${transporterData.users_id}&trucks_status=${''}`);

      if (response.status === 200) {
        setTruckData(response.data.data);
        setMessage("");
      } else {
        setTruckData([]);
        setMessage("No trucks found.");
      }
    } catch (error) {
      console.error("Error fetching trucks:", error);
      setMessage("Failed to load truck data. Please try again.");
    }
  };

  useEffect(() => {
    getTrucks();
  }, []);

  // Function to submit the bid
  const handleConfirmBidding = async () => {
    if (!amount || !selectedTruck) {
      alert("Please enter amount and select a truck.");
      return;
    }

    setLoading(true); // Show loading state

    const bidData = {
      bidsLoad_amount: Number(amount),
      load_id: load_id,
      user_id: transporterData.users_id,
      trucks_id: selectedTruck
    };

    try {
      const response = await AxiosInstance.post("/Transpoter/insertBidsLoad", bidData);

      if (response.status === 201) {
        alert("Bid submitted successfully!");
        setAmount(""); // Reset amount
        setSelectedTruck(""); // Reset truck selection
      } else {
        alert("Failed to submit bid. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting bid:", error);
      alert("Error occurred while submitting the bid.");
    } finally {
      setLoading(false); // Hide loading state
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg w-[380px]">
      <div className="w-full h-auto p-3 rounded-t-lg border-b border-[#D9D9D9]">
        <h2 className="text-sm font-semibold font-inter ml-2">{materialname}</h2>
        <div className="flex justify-between text-xs text-gray-600 px-2">
          <span>
            Wt: <strong>{capacity}</strong>
          </span>
          <span>
            Date: <strong>{new Date(pickupDate).toISOString().split("T")[0]}</strong>
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

      {/* Truck Selection Dropdown */}
      <div className="pt-3 pl-3 pr-3">
        <label className="block text-sm font-medium text-gray-700">Select Truck</label>
        <select
          value={selectedTruck}
          onChange={(e) => setSelectedTruck(e.target.value)}
          className="w-full border h-10 border-gray-300 rounded mt-1 text-sm focus:outline-none"
        >
          <option value="" disabled>Select a truck</option>
          {TruckData && TruckData.length > 0 ? (
            TruckData.map((item) => (
              <option key={item.truck_id} value={item.truck_id}>
                {item.truck_types_name}, {item.regNumber}
              </option>
            ))
          ) : (
            <option disabled>No trucks available</option>
          )}
        </select>
      </div>

      {/* Enter Amount Field */}
      <div className="p-3">
        <label className="block text-sm font-medium text-gray-700">Enter your Amount</label>
        <input
          type="number"
          placeholder="₹3500"
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
};

export default BiddingModal;
