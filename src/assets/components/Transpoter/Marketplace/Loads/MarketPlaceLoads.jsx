import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AxiosInstance } from '../../../../Api/axios';
import { getCapacity, getMaterials, getTruckTypes } from '../../../../../common/common';
import BiddingModal from './BiddingModal';
import Modal from '../../../Modal/Modal';


const MarketPlaceLoads = () => {
    const [numTrucks, setNumTrucks] = useState(2);
    const [LoadData,setLoadData] = useState([])
    const [materials, setMaterials] = useState([]);
    const [truckType, setTruckType] = useState([]);
    const [weight, setWeight] = useState([]);
    const [pickupLoc, setPickupLoc] = useState("");
    const [deliveryLoc, setDeliveryLoc] = useState("");
    const [pickupDate, setPickupDate] = useState("");
    const [material_id, setMaterialId] = useState("");
    const [capacity_id, setCapacityId] = useState("");
    const [truck_type_id, setTruckTypeId] = useState("");
    const [message, setMessage] = useState('');
    const [isOpen, setIsOpen] = useState(false)
    const [index,setIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };




  const searchLoad = async () => {
    try {
      // Prepare the data for the API request
      const requestBody = {
        "pickupLoc": pickupLoc, // Trim to remove unnecessary spaces
        "deliveryLoc": deliveryLoc,
        "pickupDate": pickupDate || null, // Send null if the date is not set
        "material_id": material_id ? parseInt(material_id) : null, // Convert to number or send null
        "capacity_id": capacity_id ? parseInt(capacity_id) : null, // Convert to number or send null
        "truck_type_id": truck_type_id ? parseInt(truck_type_id) : null, // Convert to number or send null
        "no_of_trucks": numTrucks || null, // Send null if no value
      };

      console.log("Request Body:", requestBody); // Debugging

      const response = await AxiosInstance.post(
        `${import.meta.env.VITE_BASE_URL}/Transpoter/getMatchingLoads`,
        requestBody
      );

      if (response.data?.data && response.data.data.length > 0) {
        setLoadData(response.data.data); // Update load data
        setMessage(""); // Clear previous messages
      } else if (response.data?.message) {
        setLoadData([]); // Clear load data
        setMessage(response.data.message); // Show message from backend
      } else {
        setLoadData([]);
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

      setLoadData([]);
    }
  };





  const handleTruckChange = (value) => {
    setNumTrucks((prev) => Math.max(1, prev + value));
  };

  useEffect(() => {
    fetchData();
    BasicLoad()
  }, [])

  const fetchData = async () => {
    try {
      const materialData = await getMaterials();
      setMaterials(materialData);

      const truckTypeData = await getTruckTypes();
      setTruckType(truckTypeData);

      const weightData = await getCapacity();
      setWeight(weightData);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const BasicLoad = async () => {
    try {


      const response = await AxiosInstance.get(
        `${import.meta.env.VITE_BASE_URL}/Transpoter/getAllLoads?page=1&limit=12`
      );


      if (response.data?.data && response.data.data.length > 0) {
        setLoadData(response.data.data);
        setMessage('');
      } else {
        setLoadData([]);
        setMessage('No load found');
      }
    } catch (error) {
      console.error('Error fetching loads:', error);
      setMessage('Failed to load data. Please try again.');
    }

  }
  console.log(LoadData);



  return (
    <div>
      <div className="w-full  p-4 space-y-4 ">
        <Modal isOpen={isOpen} closeModal={closeModal}>
          <BiddingModal
            materialname={LoadData && LoadData.length > 0 ? LoadData[index].materials_name : ""}
            capacity={LoadData && LoadData.length > 0 ? LoadData[index].truck_capacities_name : ""}
            pickupDate={LoadData && LoadData.length > 0 ? LoadData[index].createdAt : ""}
            pickuploc={LoadData && LoadData.length > 0 ? LoadData[index].pickupLoc : ""}
            deliveryLoc={LoadData && LoadData.length > 0 ? LoadData[index].deliveryLoc : ""}
            load_id={LoadData && LoadData.length > 0 ? LoadData[index].loads_id : ""}
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

          {/* Delivery Location */}
          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-400 mb-1">Delivery Location<span className='text-red-600'></span></label>
            <input
              onChange={(e) => setDeliveryLoc(e.target.value)}
              type="text"
              placeholder="Kozhikode"
              className="w-full h-10 border-b border-gray-300 outline-none placeholder:text-black"
            />
          </div>
        </div>
        <div className="w-full h-20 grid grid-cols-2 gap-10">

          {/* Pickup Location */}

          <div className="w-full flex flex-col">
            <label className="text-xs font-medium text-gray-400 mb-1">Pickup Date<span className='text-red-600'>*</span></label>
            <div className="flex items-center border-b border-gray-300">
              <input
                onChange={(e) => setPickupDate(e.target.value)}
                type="Date"
                placeholder="18-10-2024"
                className="w-full h-10 outline-none placeholder:text-black"
              />
              {/* <MdCalendarToday className="text-gray-500" /> */}
            </div>
          </div>

          {/* Material */}
          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-400 mb-2">
              Materials<span className="text-red-600">*</span>
            </label>
            <select onChange={(e) => setMaterialId(e.target.value)} className="w-full h-10 border-b border-gray-300 text-black focus:outline-none">
              <option value="">Select a cargo type</option>
              {materials && materials.length > 0 ? (<>
                {
                  materials.map((item, index) => (<option key={item.materials_id} value={item.materials_id}>{item.materials_name}</option>))
                }
              </>) : (<>no data founed</>)}
            </select>
          </div>
        </div>
        <div className="w-full h-16 grid md:grid-cols-3 grid-cols-2  gap-20">

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

          <button className='w-5/12  h-10 mt-3 md:mt-0  border border-[#5B297E] text-white bg-[#5B297E] rounded-sm font-inter flex justify-center items-center text-sm   shadow-md' onClick={() => { searchLoad() }}>Submit</button>
        </div>


      </div>
      <div className="w-full h-full  md:grid grid-cols-3 gap-4 relative pl-4 pt-2 mt-2 mb-10"  >

        {LoadData ? (LoadData.length > 0 ? (
          <>
            {LoadData.map((item, index) => (
              <div key={index} className="w-full h-44 border border-black mt-5 rounded-lg shadow-md">
                {/* Header Section */}
                <div className="w-full h-[55px] border-b border-[#BC89E0]">
                  <div className="w-full h-full flex">
                    <div className="w-2/3 h-full">
                      <div className="w-full h-8 flex items-end">
                        <h1 className="text-xs font-inter font-semibold ml-2">
                          {item.materials_name || "No data found"}
                        </h1>
                      </div>
                      <div className="w-full h-5 flex items-center">
                        <h1 className="text-[10px] font-inter ml-2 font-bold">
                          <span className="text-[#6B7280] font-normal">Wt</span>:{" "}
                          {item.truck_capacities_name || "No data found"}
                        </h1>
                      </div>
                    </div>
                    <div className="w-1/2 h-full flex justify-center items-end">
                      <h1 className="text-[10px] font-inter ml-2">
                        <span className="text-[#6B7280]">Date:</span>{" "}
                        {new Date(item.createdAt).toISOString().split("T")[0] || "No data found"}
                      </h1>
                    </div>
                  </div>
                </div>

                {/* Location Section */}
                <div className="w-full h-16 flex">
                  <div className="w-1/12 h-full flex justify-center items-center">
                    <div className="w-5 h-full">
                      <div className="w-2 h-2 bg-green-400 rounded-full ml-2 mt-4"></div>
                      <div className="w-1 h-5 border-dashed border-e ml-2"></div>
                      <div className="w-2 h-2 bg-red-400 rounded-full ml-2"></div>
                    </div>
                  </div>
                  <div className="w-11/12 h-full">
                    <div className="w-full h-1/2 flex items-end">
                      <h1 className="font-inter text-sm">{item.pickupLoc || "No data found"}</h1>
                    </div>
                    <div className="w-full h-1/2 flex items-center">
                      <h1 className="font-inter text-sm">{item.deliveryLoc || "No data found"}</h1>
                    </div>
                  </div>
                </div>

                {/* Footer Section */}
                <div className="w-full h-[55px] bg-[#D9D9D9] rounded-b-md">
                  <div className="w-full h-full rounded-b-md flex">
                    <div className="w-2/3 h-full font-inter text-sm text-black rounded-sm">
                      <div className="w-full h-1/2 flex items-end">
                        <h1 className="font-inter ml-3 font-semibold text-sm">
                          {item.users_name || "No data found"}
                        </h1>
                      </div>
                      <div className="w-full h-1/2">
                        <h1 className="font-inter ml-3 text-xs text-[#6B7280]">
                          {item.user_types_name || "No data found"}
                        </h1>
                      </div>
                    </div>
                    <div onClick={() => { setIndex(index), openModal() }} className="w-1/3 h-8 bg-[#5B297E] mt-3 ml-3 flex justify-center items-center font-inter text-sm text-white rounded-full mr-5">
                      Bid Now
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          // Message when `LoadData.length === 0`
          <h1 className="text-center text-gray-500 mt-10">{message}</h1>
        )
        ) : (
          // Message when `LoadData` is not available
          <h1 className="text-center mt-10">
            <span className="loading loading-infinity loading-lg"></span>
          </h1>
        )}
      </div>

    </div>
  )
}

export default MarketPlaceLoads