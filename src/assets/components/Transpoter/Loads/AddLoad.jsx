import React, { useEffect, useState } from 'react'
import { IoCubeOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { getCapacity, getMaterials, getTruckTypes } from '../../../../common/common';
import { AxiosInstance } from '../../../Api/axios';
import { useSelector } from 'react-redux';


const AddLoad = () => {
  const [numTrucks, setNumTrucks] = useState(1);
      const [materials, setMaterials] = useState([]);
      const [truckType, setTruckType] = useState([]);
      const [weight, setWeight] = useState([]);
      const [pickupLoc, setPickupLoc] = useState("");
      const [deliveryLoc, setDeliveryLoc] = useState("");
      const [pickupDate, setPickupDate] = useState("");
      const [material_id, setMaterialId] = useState("");
      const [capacity_id, setCapacityId] = useState("");
      const [truck_type_id, setTruckTypeId] = useState("");
      const [comments, setComments] = useState("");
      const [errors, setErrors] = useState({});


  const transporterData = useSelector((state) => state.transporter);

  const validateForm = () => {
    let newErrors = {};
    if (!pickupLoc) newErrors.pickupLoc = "Pickup Location is required.";
    if (!deliveryLoc) newErrors.deliveryLoc = "Delivery Location is required.";
    if (!pickupDate) newErrors.pickupDate = "Pickup Date is required.";
    if (!material_id) newErrors.materialId = "Material selection is required.";
    if (!capacity_id) newErrors.capacityId = "Weight selection is required.";
    if (!truck_type_id) newErrors.truckTypeId = "Truck Type selection is required.";
    if (numTrucks <= 0) newErrors.numTrucks = "At least one truck is required.";
    if (comments.trim() && comments.trim().split(/\s+/).length < 3) {
      newErrors.comments = "Comments should contain at least 3 words.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 
  const handleTruckChange = (value) => {
    setNumTrucks((prev) => Math.max(1, prev + value));
  };
  const navigate = useNavigate()

  useEffect(()=>{
        fetchData();
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

      const handleSubmit = async () => {
        if (validateForm()) {
          try {
            const response = await AxiosInstance.post(
              `${import.meta.env.VITE_BASE_URL}/Transpoter/AddLoad`,
              {
                pickupLoc,
                deliveryLoc,
                pickupDate,
                material_id,
                capacity_id,
                truck_type_id,
                comments,
                user_id: transporterData.users_id, 
                no_of_trucks: numTrucks,
              }
            );
      
            if (response.status === 201) {
              console.log("Load added successfully:", response.data);
              alert("Load added successfully")
              navigate("/c/YourLoads")
            } else {
              console.error("Failed to add load:", response.data);
            }
          } catch (error) {
            console.error("Error adding load:", error);
          }
        }
      };
  
  return (
    <div className='w-full '>
      <div className="w-11/12 h-auto ">
        <div className="w-full  h-16 p-3 ">
          <div className="w-full h-10 flex justify-between items-end ml-4">
            <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">Add Load</h1>
            <button className="w-28 h-6 bg-[#5B297E] flex justify-center items-center gap-1 rounded-sm text-white text-xs mb-2" onClick={() => { navigate('/Transpoter/YourLoads') }}><IoCubeOutline className='font-semibold' />Your Loads</button>
          </div>
        </div>
        <div className="w-full h-auto  pl-8 md:p-2 mb-10">
          <div className="w-full h-full  border border-black rounded-sm">
            <div className="w-full  p-4 space-y-4 ">
              <div className="w-full h-20 grid grid-cols-2 gap-10">

                <div className=" flex flex-col">
                  <label className="text-xs font-medium text-gray-400 mb-1">Pickup Location<span className='text-red-600'>*</span></label>
                  <input
                  onChange={(e) => setPickupLoc(e.target.value)}
                    type="text"
                    placeholder="Ernakulam"
                    className="w-full h-10 border-b border-gray-300 outline-none placeholder:text-black"
                  />
                  {errors.pickupLoc && <span className='text-red-500 text-xs'>{errors.pickupLoc}</span>}
                </div>

                {/* Delivery Location */}
                <div className="flex flex-col">
                  <label className="text-xs font-medium text-gray-400 mb-1">Delivery Location<span className='text-red-600'>*</span></label>
                  <input
                   onChange={(e) => setDeliveryLoc(e.target.value)}
                    type="text"
                    placeholder="Kozhikode"
                    className="w-full h-10 border-b border-gray-300 outline-none placeholder:text-black"
                  />
                  {errors.deliveryLoc && <span className='text-red-500 text-xs'>{errors.deliveryLoc}</span>}
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
                    {errors.pickupDate && <span className='text-red-500 text-xs'>{errors.pickupDate}</span>}
                    {/* <MdCalendarToday className="text-gray-500" /> */}
                  </div>
                </div>

                {/* Material */}
                <div className="flex flex-col">
                  <label className="text-xs font-medium text-gray-400 mb-2">
                    Materials<span className="text-red-600">*</span>
                  </label>
                  <select onChange={(e)=>setMaterialId(e.target.value)} className="w-full h-10 border-b border-gray-300 text-black focus:outline-none">
                <option value="">Select a cargo type</option>
              {materials&&materials.length>0?(<>
                {
                  materials.map((item,index)=>( <option key={item.materials_id} value={item.materials_id}>{item.materials_name}</option>))
                }
              </>):(<>no data founed</>)}
            </select>
            {errors.material_id && <span className='text-red-500 text-xs'>{errors.material_id}</span>}
                </div>
              </div>
              <div className="w-full h-16 grid md:grid-cols-3 grid-cols-2  gap-20">

                <div className="flex flex-col">
                  <label className="text-xs font-medium text-gray-400 mb-2">
                    Weight<span className="text-red-600">*</span>
                  </label>
                  <select onChange={(e)=>setCapacityId(e.target.value)} className="w-full h-10 border-b border-gray-300   text-black focus:outline-none">
              <option value="">Select weight capacity</option>

              {weight&&weight.length>0?(<>
                {
                  weight.map((item,index)=>( <option key={item.truck_capacities_id} value={item.truck_capacities_id}>{item.truck_capacities_name}</option>))
                }
              </>):(<>no data founed</>)}
            </select>
            {errors.capacity_id && <span className='text-red-500 text-xs'>{errors.capacity_id}</span>}
                </div>
                <div className="flex flex-col relative">
                  <label className="text-xs font-medium text-gray-400 mb-2">
                    Preferred Truck Types<span className="text-red-600">*</span>
                  </label>
                  <div className="relative">
                  <select onChange={(e)=>setTruckTypeId(e.target.value)} className="w-full h-10 border-b border-gray-300 text-black focus:outline-none appearance-none">
                <option value="">Select a truck type</option>
                {truckType&&truckType.length>0?(<>
                {
                  truckType.map((item,index)=>( <option key={item.truck_types_id} value={item.truck_types_id}>{item.truck_types_name}</option>))
                }
              </>):(<>no data founed</>)}
              </select>
            {errors.truck_type_id && <span className='text-red-500 text-xs'>{errors.truck_type_id}</span>}

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



              </div>
              <label className="text-xs font-medium text-gray-400 mb-2">Comments<span className='text-red-600'></span></label>
              <textarea onChange={(e)=>setComments(e.target.value)} placeholder='Type your comments or instructions here...' name="" id="" className='w-full h-32 rounded-md border border-black bg-[#F5F4F4] text-sm text-gray-600 font-inter px-2 '></textarea>

              <button onClick={handleSubmit} className='w-2/12  h-10 mt-3 md:mt-0  border border-[#5B297E] text-white bg-[#5B297E] rounded-sm font-inter flex justify-center items-center text-sm   shadow-md'>Submit</button>

            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default AddLoad