import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { AxiosInstance } from '../../../../Api/axios';
import { getCapacity, getMaterials, getTruckTypes } from '../../../../../common/common';


const MarketPlaceLoads = () => {
    const [numTrucks, setNumTrucks] = useState(2);
    const [LoadData,setLoadData] = useState([])
    const [materials, setMaterials] = useState([]);
    const [truckType, setTruckType] = useState([]);
    const [weight, setWeight] = useState([]);
    const [message, setMessage] = useState('');
    const handleTruckChange = (value) => {
      setNumTrucks((prev) => Math.max(1, prev + value));
    };

    useEffect(()=>{
      
      
      
      
      fetchData();
      BasicLoad()
    },[])

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

    const BasicLoad = async() =>{
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
    console.log(materials,"Meterials");
    console.log(truckType,"TruckType");
    console.log(weight,"Wight");
    
    
  return (
    <div>
      <div className="w-full  p-4 space-y-4 ">
        <div className="w-full h-20 grid grid-cols-2 gap-10">

          <div className=" flex flex-col">
            <label className="text-xs font-medium text-gray-400 mb-1">Pickup Location<span className='text-red-600'>*</span></label>
            <input
              type="text"
              placeholder="Ernakulam"
              className="w-full h-10 border-b border-gray-300 outline-none placeholder:text-black"
            />
          </div>

          {/* Delivery Location */}
          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-400 mb-1">Delivery Location<span className='text-red-600'></span></label>
            <input
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
            <select className="w-full h-10 border-b border-gray-300 text-black focus:outline-none">
                <option value="">Select a cargo type</option>
              {materials&&materials.length>0?(<>
                {
                  materials.map((item,index)=>( <option key={item.materials_id} value={item.materials_id}>{item.materials_name}</option>))
                }
              </>):(<>no data founed</>)}
            </select>
          </div>
        </div>
        <div className="w-full h-16 grid md:grid-cols-3 grid-cols-2  gap-20">

          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-400 mb-2">
              Weight<span className="text-red-600">*</span>
            </label>
            <select className="w-full h-10 border-b border-gray-300   text-black focus:outline-none">
              <option value="">Select weight capacity</option>

              {weight&&weight.length>0?(<>
                {
                  weight.map((item,index)=>( <option key={item.truck_capacities_id} value={item.truck_capacities_id}>{item.truck_capacities_name}</option>))
                }
              </>):(<>no data founed</>)}
            </select>
          </div>
          <div className="flex flex-col relative">
            <label className="text-xs font-medium text-gray-400 mb-2">
              Preferred Truck Types<span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <select className="w-full h-10 border-b border-gray-300 text-black focus:outline-none appearance-none">
                <option value="">Select a truck type</option>
                {truckType&&truckType.length>0?(<>
                {
                  truckType.map((item,index)=>( <option key={item.truck_types_id} value={item.truck_types_id}>{item.truck_types_name}</option>))
                }
              </>):(<>no data founed</>)}
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

          <button className='w-5/12  h-10 mt-3 md:mt-0  border border-[#5B297E] text-white bg-[#5B297E] rounded-sm font-inter flex justify-center items-center text-sm   shadow-md'>Submit</button>
        </div>


      </div>
       <div className="w-full h-full  md:grid grid-cols-3 gap-4 relative pl-4 pt-2 mt-2 mb-10"  >

       {LoadData && LoadData.length > 0 ? (
  <>
    {LoadData.map((item, index) => (
      <div key={index} className="w-full h-44 border border-black mt-5 rounded-lg shadow-md">
        <div className="w-full h-[55px]  border-b border-[##BC89E0]">
          <div className="w-full h-full flex ">
            <div className="w-2/3 h-full">
              <div className="w-full h-8 flex items-end">
                <h1 className="text-xs font-inter font-semibold ml-2">{item.materials_name || "no data founded "}</h1>
              </div>
              <div className="w-full h-5 flex items-center">
                <h1 className="text-[10px] font-inter ml-2 font-bold">
                  <span className="text-[#6B7280] font-normal">wt</span>: {item.truck_capacities_name || "no data founded "}
                </h1>
              </div>
            </div>
            <div className="w-1/2 h-full flex justify-center items-end">
              <h1 className="text-[10px] font-inter ml-2">
                <span className="text-[#6B7280]">Date :</span> {new Date(item.createdAt).toISOString().split("T")[0] || "no data founded "}
              </h1>
            </div>
          </div>
        </div>
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
              <h1 className="font-inter text-sm">{item.pickupLoc || "no data founded "}</h1>
            </div>
            <div className="w-full h-1/2 flex items-center">
              <h1 className="font-inter text-sm">{item.deliveryLoc || "no data founded"}</h1>
            </div>
          </div>
        </div>
        <div className="w-full h-[55px] bg-[#D9D9D9] rounded-b-md">
          <div className="w-full h-full rounded-b-md flex">
            <div className="w-2/3 h-full font-inter text-sm text-black rounded-sm">
              <div className="w-full h-1/2 flex items-end">
                <h1 className="font-inter ml-3 font-semibold text-sm">{item.users_name || "no data founded"}</h1>
              </div>
              <div className="w-full h-1/2">
                <h1 className="font-inter ml-3 text-xs text-[#6B7280]">{item.user_types_name || "no data founded"}</h1>
              </div>
            </div>
            <div className="w-1/3 h-8 bg-[#5B297E] mt-3 ml-3 flex justify-center items-center font-inter text-sm text-white rounded-full mr-5">
              Bid Now
            </div>
          </div>
        </div>
      </div>
    ))}
  </>
) : (
  <>
    <h1><span className="loading loading-infinity loading-lg"></span></h1>
  </>
)}
     </div>

    </div>
  )
}

export default MarketPlaceLoads