import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { getCapacity } from '../../../../common/common';
import { AxiosInstance } from '../../../Api/axios';


const PostTruck = () => {
    const navigate = useNavigate()
    const { truck_id } = useParams();
    const transporterData = useSelector((state) => state.transporter);
    const [weight, setWeight] = useState([]);
    const [capacity_id, setCapacityId] = useState("");
    const [from,setFrom] = useState("") 
    const [to,setTo] = useState("")
    const [Date,setDate] = useState("")
    const [Time,setTime] = useState("")
    const [Comment, setComment] = useState("")
    const [errors, setErrors] = useState({});
    

    const validateForm = () => {
      let errors = {};
      if (!Date) errors.Date = "Date  is required";
      if (!Time) errors.Time = "Time is required";
      if (!capacity_id) errors.capacity_id = "Weight capacity is required";
      // if (!Location) errors.Location = "Location is required";
      if (!from) errors.from = "fromis required";
      if (!to) errors.to = "to is required";

      setErrors(errors);
      return Object.keys(errors).length === 0;
  };
  


     useEffect(()=>{
                fetchData();
              },[])
          
              const fetchData = async () => {
                try {
                  const weightData = await getCapacity();
                  setWeight(weightData);
                } catch (error) {
                  console.error("Error fetching data:", error.message);
                }
              };

              const handleSubmit = async () => {
                console.log("Submitting form...");
            
                if (!validateForm()) return;
            
                // Formatting date and time into a single string
                const postTrucks_dateTime = `${Date} ${Time}`;
            
                // Creating the request body
                const formData = {
                    postTrucks_dateTime,
                    postTrucks_from: from,
                    postTrucks_to: to,
                    postTrucks_capacity_id: capacity_id,
                    comments: Comment,
                    truck_id: truck_id // Make sure truck_id is available in your component
                };
            
                console.log("Sending Data:", formData);
            
                try {
                    const response = await AxiosInstance.post('/Transpoter/postTruck', formData);
                    console.log(response);
                    if (response.status === 201) {
                        alert("Truck posted successfully!");
                        navigate('/Transpoter/YourTruck');
                    }
                } catch (error) {
                    console.error("Error submitting data:", error);
                    alert("Failed to post truck.");
                }
            };
            
    return (
        <div className='w-full '>
            <div className="w-11/12 h-full ">
                <div className="w-full  h-16 p-3 ">
                    <div className="w-full h-10 flex justify-between items-end ml-4">
                        <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">Post Truck</h1>
                    </div>
                </div>
                <div className="w-full h-auto  pl-8 md:p-2 mb-10 ">
          <div className="w-full h-full  border border-black rounded-sm">
            <div className="md:w-8/12  p-4 space-y-4 ">
              <div className="w-full h-20 grid grid-cols-2 gap-10">

                <div className=" flex flex-col">
                  <label className="text-xs font-medium text-gray-400 mb-1">Date<span className='text-red-600'>*</span></label>
                  <input
                    onChange={(e)=>{setDate(e.target.value)}}
                    type="Date"
                    className="w-full h-10 border-b border-gray-300 outline-none placeholder:text-black"
                  />
                </div>

                {/* Delivery Location */}
                <div className="flex flex-col">
                  <label className="text-xs font-medium text-gray-400 mb-1">Time</label>
                  <input
                    onChange={(e)=>{setTime(e.target.value)}}

                    type="time"
                    className="w-full h-10 border-b border-gray-300 outline-none placeholder:text-black"
                  />
                </div>
              </div>
              <div className="w-full h-20 grid grid-cols-2 gap-10">

                {/* Pickup Location */}

                <div className="w-full flex flex-col">
                  <label className="text-xs font-medium text-gray-400 mb-1">From Location<span className='text-red-600'>*</span></label>
                  <div className="flex items-center border-b border-gray-300">
                    <input
                    onChange={(e)=>{setFrom(e.target.value)}}
                      type="Text"
                      placeholder="Ernakulam"
                      className="w-full h-10 outline-none placeholder:text-black"
                    />
                  </div>
                </div>

                <div className="w-full flex flex-col">
                  <label className="text-xs font-medium text-gray-400 mb-1">To Location<span className='text-red-600'>*</span></label>
                  <div className="flex items-center border-b border-gray-300">
                    <input
                    onChange={(e)=>{setTo(e.target.value)}}

                      type="Text"
                      placeholder="Kozhikode"
                      className="w-full h-10 outline-none placeholder:text-black"
                    />
                  </div>
                </div>

              </div>
              <div className="w-full h-16 grid md:grid-cols-2 grid-cols-2  gap-20">

                <div className="flex flex-col">
                  <label className="text-xs font-medium text-gray-400 mb-2">
                    Available Weight Capacity<span className="text-red-600">*</span>
                  </label>
                  <select onChange={(e)=>setCapacityId(e.target.value)} className="w-full h-10 border-b border-gray-300   text-black focus:outline-none">
              <option value="">Select weight capacity</option>

              {weight&&weight.length>0?(<>
                {
                  weight.map((item,index)=>( <option key={item.truck_capacities_id} value={item.truck_capacities_id}>{item.truck_capacities_name}</option>))
                }
              </>):(<>no data founed</>)}
            </select>
                </div>
              </div>

              <label className="text-xs font-medium text-gray-400 mb-2">Comments</label>
              <textarea name="" id="" className='w-full h-32 rounded-md border border-black bg-[#F5F4F4] text-sm text-gray-600 font-inter px-2 '>Type your comments or instructions here...</textarea>

              <button  onClick={()=>{handleSubmit()}} className='w-2/12  h-10 mt-3 md:mt-0  border border-[#5B297E] text-white bg-[#5B297E] rounded-sm font-inter flex justify-center items-center text-sm   shadow-md'>Proceed</button>

            </div>
          </div>
        </div>
            </div>
        </div>
    )
}

export default PostTruck
