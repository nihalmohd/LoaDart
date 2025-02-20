import React, { useEffect, useState } from 'react'
import { FaPhone, FaPhoneAlt, FaStar } from 'react-icons/fa';
import { AxiosInstance } from '../../../../Api/axios';
import { getCapacity, getTruckTypes } from '../../../../../common/common';
import Modal from '../../../Modal/Modal';
import TruckBiddingModal from './TruckBiddingModal';


const MarketPlaceTruck = () => {
  const [numTrucks, setNumTrucks] = useState(2);
  const [TruckData, setTruckData] = useState([])
  const [message, setMessage] = useState('');
  const [pickupLoc, setPickupLoc] = useState("");
  const [deliveryLoc, setDeliveryLoc] = useState("");
  const [pickupDate, setPickupDate] = useState("");
  const [capacity_id, setCapacityId] = useState("");
  const [truck_type_id, setTruckTypeId] = useState("");

  const [truckType, setTruckType] = useState([]);
  const [weight, setWeight] = useState([]);
  const [index,setIndex] = useState(0)
  const [isOpen, setIsOpen] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
const [totalPages, setTotalPages] = useState(1);

  
  

  const handleTruckChange = (value) => {
    setNumTrucks((prev) => Math.max(1, prev + value));
  };
  useEffect(() => {
    fetchData()
    BasicTruck()
  }, [currentPage])

  
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };




  const searchTruck = async () => {
    try {

      const requestBody = {
        postTrucks_from: pickupLoc || null, // Pickup location
        postTrucks_to: deliveryLoc || null, // Delivery location
        postTrucks_dateTime: pickupDate || null, // Pickup date
        postTrucks_capacity_id: capacity_id ? parseInt(capacity_id) : null, // Capacity ID
        truck_type_id: truck_type_id ? parseInt(truck_type_id) : null, // Truck type ID
        no_of_trucks: numTrucks || null // Number of trucks
      };

      console.log("Request Body:", requestBody);

      const response = await AxiosInstance.post(
        `${import.meta.env.VITE_BASE_URL}/Transpoter/getMatchingPostTrucks`,
        requestBody
      );
          console.log(response);
          
      if (response.data?.data && response.data.data.length > 0) {
        setTruckData(response.data.data); 
        setMessage(""); 
      } else if (response.data?.message) {
        setTruckData([]); 
        setMessage(response.data.message); 
      } else {
        setTruckData([]);
        setMessage("No load found.");
      }
    } catch (error) {
      console.error("Error fetching loads:", error);

      // Error handling
      if (error.response && error.response.data?.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage("Failed to load data. Please try again.");
      }

      setTruckData([]);
    }
  };


  const BasicTruck = async () => {
    try {
      const response = await AxiosInstance.get(
        `${import.meta.env.VITE_BASE_URL}/Transpoter/getPaginatedTrucks?page=${currentPage}&limit=12`
      );
  
      if (response.data?.data && response.data.data.length > 0) {
        setTruckData(response.data.data);
        setTotalPages(response.data.totalPages); // Assuming totalPages is part of the response
        setMessage('');
      } else {
        setTruckData([]);
        setMessage('No load found');
      }
    } catch (error) {
      console.error('Error fetching loads:', error);
      setMessage('Failed to load data. Please try again.');
    }
  };
  

  const fetchData = async () => {
    try {
      const truckTypeData = await getTruckTypes();
      setTruckType(truckTypeData);

      const weightData = await getCapacity();
      setWeight(weightData);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  console.log(TruckData, "truck data");

  const handlePagination = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  

  return (
    <div>
      <div className="w-full  p-4 space-y-4 ">

      <Modal isOpen={isOpen} closeModal={closeModal}>
          <TruckBiddingModal
            TruckTypename={TruckData && TruckData.length > 0 ? TruckData[index].truck_types_name : ""}
            capacity={TruckData && TruckData.length > 0 ? TruckData[index].truck_capacities_name : ""}
            regnumber={TruckData && TruckData.length > 0 ? TruckData[index].regNumber : ""}
            pickuploc={TruckData && TruckData.length > 0 ? TruckData[index].postTrucks_from : ""}
            deliveryLoc={TruckData && TruckData.length > 0 ? TruckData[index].postTrucks_to : ""}
            trucks_id={TruckData && TruckData.length > 0 ? TruckData[index].truck_id : ""}
          />
        </Modal>
        <div className="w-full h-20 grid grid-cols-2 gap-10">

          <div className=" flex flex-col">
            <label className="text-xs font-medium text-gray-400 mb-1">Pickup Location<span className='text-red-600'>*</span></label>
            <input
              onChange={(e) => setPickupLoc(e.target.value)}
              type="text"
              placeholder="Ernakulam"
              className="w-full h-10 border-b border-gray-300 outline-none placeholder:text-black"
            />
          </div>


          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-400 mb-1">Delivery Location</label>
            <input
              onChange={(e) => setDeliveryLoc(e.target.value)}
              type="text"
              placeholder="Kozhikode"
              className="w-full h-10 border-b border-gray-300 outline-none placeholder:text-black"
            />
          </div>
        </div>
        <div className="w-full h-20 grid grid-cols-2 gap-10">



          <div className="w-full flex flex-col">
            <label className="text-xs font-medium text-gray-400 mb-1">Pickup Date<span className='text-red-600'>*</span></label>
            <div className="flex items-center border-b border-gray-300">
              <input
                onChange={(e) => setPickupDate(e.target.value)}
                type="Date"
                placeholder="18-10-2024"
                className="w-full h-10 outline-none placeholder:text-black"
              />

            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-400 mb-2">
              Weight<span className="text-red-600">*</span>
            </label>
            <select onChange={(e) => setCapacityId(e.target.value)} className="w-full h-10 border-b border-gray-300   text-black focus:outline-none">
              <option value="">Select weight capacity</option>
              {weight && weight.length > 0 ? (<>
                {
                  weight.map((item, index) => (<option key={item.truck_capacities_id} value={item.truck_capacities_id}>{item.truck_capacities_name}</option>))
                }
              </>) : (<>no data founed</>)}

            </select>
          </div>
        </div>
        <div className="w-full h-16 grid md:grid-cols-2 grid-cols-2  gap-20">


          <div className="flex flex-col relative">
            <label className="text-xs font-medium text-gray-400 mb-2">
              Preferred Truck Types<span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <select onChange={(e) => setTruckTypeId(e.target.value)} className="w-full h-10 border-b border-gray-300 text-black focus:outline-none appearance-none">
                <option value="">Select a truck type</option>
                {truckType && truckType.length > 0 ? (<>
                  {
                    truckType.map((item, index) => (<option key={item.truck_types_id} value={item.truck_types_id}>{item.truck_types_name}</option>))
                  }
                </>) : (<>no data founed</>)}

              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>

          <div className="hidden md:flex flex-col mt-5 md:mt-0">
            <label className="text-xs font-medium text-gray-400 mb-2">No of Trucks<span className='text-red-600'>*</span></label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleTruckChange(-1)}
                className="w-10 h-10 bg-[#5B297E] text-white rounded-md flex items-center justify-center text-xl"
              >
                -
              </button>
              <span className="text-xl">{numTrucks}</span>
              <button
                onClick={() => handleTruckChange(1)}
                className="w-10 h-10 bg-[#5B297E] text-white rounded-md flex items-center justify-center text-xl"
              >
                +
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-full md:flex md:justify-center md:items-center mt-2">
          <div className="md:hidden flex flex-col mt-5 md:mt-0">
            <label className="text-xs font-medium text-gray-600 mb-2">No of Trucks<span className='text-red-600'>*</span></label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleTruckChange(-1)}
                className="w-10 h-10 bg-[#5B297E] text-white rounded-md flex items-center justify-center text-xl"
              >
                -
              </button>
              <span className="text-xl">{numTrucks}</span>
              <button
                onClick={() => handleTruckChange(1)}
                className="w-10 h-10 bg-[#5B297E] text-white rounded-md flex items-center justify-center text-xl"
              >
                +
              </button>
            </div>
          </div>

          <button className='w-5/12  h-10 mt-3 md:mt-0  border border-[#5B297E] text-white bg-[#5B297E] rounded-sm font-inter flex justify-center items-center text-sm   shadow-md ' onClick={searchTruck}>Submit</button>
        </div>


      </div>
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-3 gap-4 relative">
        {TruckData && TruckData.length > 0 ? (
          <>
            {TruckData.map((item, index) => (
              <div key={index} className="w-full h-64 border border-black mt-5 rounded-lg shadow-md">
                {/* Image Section */}
                <div className="w-full h-28 bg-red-200 rounded-t-md">
                  <img
                    src="\images\Screenshot 2024-11-11 130820.png"
                    className="w-full h-full object-cover rounded-t-md"
                    alt="Truck"
                  />
                </div>

                {/* Header Section */}
                <div className="w-11/12 h-9 border-b border-[#BC89E0] flex p-1 gap-2 ml-2">
                  <h3 className="text-[#5B297E] text-[10px] font-bold mt-1">
                    {item.truck_types_name || "no data founded"} <span className="text-black font-normal">{item.regNumber || "no data founded"}</span>
                  </h3>
                </div>

                {/* Location Section */}
                <div className="w-full h-14 flex">
                  <div className="w-1/12 h-full flex justify-center items-center">
                    <div className="w-5 h-full">
                      <div className="w-2 h-2 bg-green-400 rounded-full ml-2 mt-3"></div>
                      <div className="w-1 h-5 border-dashed border-e ml-2"></div>
                      <div className="w-2 h-2 bg-red-400 rounded-full ml-2"></div>
                    </div>
                  </div>
                  <div className="w-11/12 h-full">
                    <div className="w-full h-1/2 flex items-end">
                      <h1 className="font-inter text-sm">{item.postTrucks_from}</h1>
                    </div>
                    <div className="w-full h-1/2 flex items-center">
                      <h1 className="font-inter text-sm">{item.postTrucks_to}</h1>
                    </div>
                  </div>
                </div>

                {/* Footer Section */}
                <div className="w-full h-[50px] bg-[#D9D9D9] rounded-b-md flex gap-1 p-3">
                  {/* <div className="w-full h-full rounded-b-md flex">
              <div className="w-2/3 h-full font-inter text-sm text-black">
                <div className="w-full h-1/2 flex items-end">
                  <h1 className="font-inter ml-3 font-semibold text-sm"> Material : Any</h1>
                </div>
                <div className="w-full h-1/2">
                  <h1 className="font-inter ml-3 text-[9px] text-[#6B7280] font-semibold">Wt:{item.truck_capacities_name || "no data founded"} </h1>
                </div>
              </div>
              <div className="w-1/3 h-8 bg-[#5B297E] mt-3 ml-3 flex justify-center items-center font-inter text-sm text-white rounded-full mr-5">
                Bid Now
              </div>
            </div> */}

                  <div
                    className="w-1/4 h-8 bg-white  flex border border-[#5B297E] justify-center items-center font-inter text-sm text-[#5B297E] rounded-sm shadow cursor-pointer"
                    // onClick={() =>}
                  >
                    <FaPhoneAlt />
                  </div>
                  <div className="w-3/4 h-8 bg-[#5B297E] ml-3 flex justify-center items-center font-inter text-sm text-white rounded-sm shadow cursor-pointer"
                    onClick={() => { setIndex(index), openModal() }}
                  >
                   Bid now
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <h1 className="text-center text-gray-500"><span className="loading loading-infinity loading-lg"></span></h1>
        )}
      </div>
      <div className="mt-5 flex justify-center mb-3">
  <button 
    onClick={() => handlePagination(currentPage - 1)} 
    disabled={currentPage === 1} 
    className="mr-2 px-4 py-2 border rounded text-white bg-[#5B297E]">
    Previous
  </button>
  {[...Array(totalPages)].map((_, i) => (
    <button
      key={i}
      onClick={() => handlePagination(i + 1)}
      className={`px-4 py-2 border rounded text-white ${currentPage === i + 1 ? 'bg-[#5B297E]' : 'bg-gray-300'}`}
    >
      {i + currentPage}
    </button>
  ))}
  <button 
    onClick={() => handlePagination(currentPage + 1)} 
    disabled={currentPage === totalPages} 
    className="ml-2 px-4 py-2 border rounded text-white bg-[#5B297E]">
    Next
  </button>
</div>
    
    </div>
  )
}

export default MarketPlaceTruck