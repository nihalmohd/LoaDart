import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { AxiosInstance } from '../../../../Api/axios';

const ScheduleLoadTable = () => {
    const navigate = useNavigate()

    const transporterData = useSelector((state) => state.transporter);
    const [loadSchedules, setLoadSchedules] = useState([]);

    useEffect(() => {
        if (transporterData?.users_id) {
            fetchLoadSchedules(transporterData.users_id);
        }
    }, []);

    const fetchLoadSchedules = async (user_id) => {
        try {
            const response = await AxiosInstance.get(
                `${import.meta.env.VITE_BASE_URL}/Transpoter/loadschedules?users_id=${user_id}`
            );

            if (response.status === 200) {
                setLoadSchedules(response.data.data || []);
            } else {
                console.error('Failed to fetch load schedules:', response.data);
            }
        } catch (error) {
            console.error('Error fetching load schedules:', error);
        }
    };
    console.log(loadSchedules);
    

  return (
      <div>
          <div className="w-full  mx-auto r">
            <div className="w-full h-20  grid grid-cols-4 gap-3">
                <div className="w-full h-10 border-2 border-[#5b297e] rounded-md mt-5 felx justify-center items-center">
                    <select name="" id="" className='bg-transparent w-full h-full flex justify-center items-center focus:outline-none '>
                    <option value="Last Day">Last Day</option>
                    <option value="Last 15 Days">Last 15 Days</option>
                    <option value="Last 30 Days">Last 30 Days</option>
                    <option value="Last Quater">Last Quater</option>
                    <option value="Last Year">Last Year</option>
                    </select>
                </div>
                
            </div>
              <div className="w-full h-full flex justify-center items-center">

                  <table className="min-w-full border border-gray-200 rounded-sm overflow-hidden ">
                      <thead className="bg-[#5B297E] text-white">
                          <tr>
                              <th className="w-20 h-5 text-center text-sm font-extralight px-2">Date</th>
                              <th className="w-20 h-5 text-center text-sm font-extralight px-2">Material</th>
                              <th className="w-20 h-5 text-center text-sm font-extralight px-2">Pickup Location</th>
                              <th className="w-20 h-5 text-center text-sm font-extralight px-2">Delivery location</th>
                              <th className="w-20 h-5 text-center text-sm font-extralight px-2"></th>
                          </tr>
                      </thead>
                      <tbody className="bg-gray-100 text-gray-700 border-b border-black">

                        {
                            loadSchedules.length > 0 ? (
                                loadSchedules.map((item,index)=>(

                          <tr className="bg-[#D9D9D9]">
                              <td className="w-24 h-14 text-center font-inter text-xs font-bold p-2">{new Date(item.schedules_date).toISOString().split("T")[0]}</td>
                              <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">{item.materials_name}</td>
                              <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">{item.pickup_loc}</td>
                              <td className="w-16 h-14 text-center font-inter text-xs font-bold p-2">{item.delivery_loc}</td>
                              <td className="w-10 h-14 text-center font-inter text-xs font-bold p-2"><button className=' text-sm bg-black rounded-sm w-16 text-white h-10' onClick={()=>{navigate('/c/View')}}>View</button></td>

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

export default ScheduleLoadTable