import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { AxiosInstance } from '../../../../Api/axios';

const ScheduleTruckTable = () => {
    const navigate = useNavigate()

    const transporterData = useSelector((state) => state.transporter);
    const [TruckSchedules, setTruckSchedules] = useState([]);
    const [selectedDate,setSelectedDate] = useState("")
    

    useEffect(() => {
        if (transporterData?.users_id) {
            fetchTruckSchedules(transporterData.users_id);
        }
    }, [selectedDate]);

    const fetchTruckSchedules = async (user_id) => {
        try {
            const response = await AxiosInstance.get(
                `${import.meta.env.VITE_BASE_URL}/Transpoter/truckschedules?user_id=${user_id}&date_filter=${selectedDate}`
            );
               
               
            if (response.status === 200) {
                setTruckSchedules(response.data.schedules || []);
            } else {
                console.error('Failed to fetch load schedules:', response.data);
            }
        } catch (error) {
            console.error('Error fetching load schedules:', error);
        }
    };
    console.log(TruckSchedules);
    
  return (
    <div>
        <div className="w-full  mx-auto r">
        <div className="w-full h-20  grid grid-cols-4 gap-3">
        <div className="w-full h-10 border-2 border-[#5b297e] rounded-md mt-5 felx justify-center items-center">
                    <select onChange={(e)=>{setSelectedDate(e.target.value)}} name="" id="" className='bg-transparent w-full h-full flex justify-center items-center focus:outline-none '>
                    <option value="">All</option>
                    <option value="last_day">Last Day</option>
                    <option value="last_30_days">Last 30 Days</option>
                    <option value="last_6_months">Last 6 month</option>
                    <option value="last_year">Last Year</option>
                    </select>
                </div>
               
            </div>
              <div className="w-full h-full flex justify-center items-center">

                  <table className="min-w-full border border-gray-200 rounded-sm overflow-hidden ">
                      <thead className="bg-[#5B297E] text-white ">
                          <tr>
                              <th className="w-20 h-5 text-center text-sm font-extralight px-2">Date</th>
                              <th className="w-24 h-5 text-center text-sm font-extralight px-2">Vehicle Registration</th>
                              <th className="w-20 h-5 text-center text-sm font-extralight px-2">Pickup Location</th>
                              <th className="w-16 h-5 text-center text-sm font-extralight px-2">Delivery location</th>
                              <th className="w-10 h-5 text-center text-sm font-extralight px-2"></th>
                          </tr>
                      </thead>
                      <tbody className="bg-gray-100 text-gray-700">
                        {
                            TruckSchedules.length>0?(
                                TruckSchedules.map((item,index)=>(

                          <tr className="bg-[#D9D9D9] border-b border-black">
                              <td className="w-24 h-14 text-center font-inter text-xs font-bold p-2">{new Date(item.truckSchedules_date).toISOString().split("T")[0]}</td>
                              <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">{item.vehicle_reg}</td>
                              <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">{item.pickup_loc}</td>
                              <td className="w-16 h-14 text-center font-inter text-xs font-bold p-2">{item.delivery_loc}</td>
                              <td className="w-10 h-14 text-center font-inter text-xs font-bold p-2"><button className=' text-sm bg-black rounded-sm w-16 text-white h-10 ' onClick={()=>{navigate('/c/View')}}>View</button></td>

                          </tr>
                                ))


                            ):(
                                <p>No load schedules found.</p>
                            )
                        }
                         
                      </tbody>
                  </table>
              </div>
          </div>
    </div>
  )
}

export default ScheduleTruckTable