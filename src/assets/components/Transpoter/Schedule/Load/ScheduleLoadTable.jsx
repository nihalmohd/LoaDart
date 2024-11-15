import React from 'react'

const ScheduleLoadTable = () => {
  return (
      <div>
          <div className="w-full  mx-auto r">
            <div className="w-full h-20  grid grid-cols-4 gap-3">
                <div className="w-full h-10 border-2 border-[#5B297E] rounded-md mt-5 felx justify-center items-center">
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
                      <tbody className="bg-gray-100 text-gray-700">
                          <tr className="bg-[#D9D9D9]">
                              <td className="w-24 h-14 text-center font-inter text-xs font-bold p-2">18 Sep, 2024</td>
                              <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">Frozen food</td>
                              <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">Ernakulam</td>
                              <td className="w-16 h-14 text-center font-inter text-xs font-bold p-2">Kozhikode</td>
                              <td className="w-10 h-14 text-center font-inter text-xs font-bold p-2"><button className=' text-sm bg-black rounded-sm w-16 text-white h-10 '>View</button></td>

                          </tr>
                          <tr>
                          <td className="w-24 h-14 text-center font-inter text-xs font-bold p-2">18 Sep, 2024</td>
                          <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">Frozen food</td>
                              <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">Ernakulam</td>
                              <td className="w-16 h-14 text-center font-inter text-xs font-bold p-2">Kozhikode</td>
                              <td className="w-10 h-14 text-center font-inter text-xs font-bold p-2"><button className=' text-sm bg-black rounded-sm w-16 text-white h-10 '>View</button></td>

                          </tr>
                          <tr className="bg-[#D9D9D9]">
                          <td className="w-24 h-14 text-center font-inter text-xs font-bold p-2">18 Sep, 2024</td>
                          <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">Frozen food</td>
                              <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">Ernakulam</td>
                              <td className="w-16 h-14 text-center font-inter text-xs font-bold p-2">Kozhikode</td>
                              <td className="w-10 h-14 text-center font-inter text-xs font-bold p-2"><button className=' text-sm bg-black rounded-sm w-16 text-white h-10 '>View</button></td>

                          </tr>
                          <tr>
                          <td className="w-24 h-14 text-center font-inter text-xs font-bold p-2">18 Sep, 2024</td>
                          <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">Frozen food</td>
                              <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">Ernakulam</td>
                              <td className="w-16 h-14 text-center font-inter text-xs font-bold p-2">Kozhikode</td>
                              <td className="w-10 h-14 text-center font-inter text-xs font-bold p-2"><button className=' text-sm bg-black rounded-sm w-16 text-white h-10 '>View</button></td>

                          </tr>
                          <tr className="bg-[#D9D9D9]">
                          <td className="w-24 h-14 text-center font-inter text-xs font-bold p-2">18 Sep, 2024</td>
                          <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">Frozen food</td>
                              <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">Ernakulam</td>
                              <td className="w-16 h-14 text-center font-inter text-xs font-bold p-2">Kozhikode</td>
                              <td className="w-10 h-14 text-center font-inter text-xs font-bold p-2"><button className=' text-sm bg-black rounded-sm w-16 text-white h-10 '>View</button></td>

                          </tr>
                          <tr>
                          <td className="w-24 h-14 text-center font-inter text-xs font-bold p-2">18 Sep, 2024</td>
                          <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">Frozen food</td>
                              <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">Ernakulam</td>
                              <td className="w-16 h-14 text-center font-inter text-xs font-bold p-2">Kozhikode</td>
                              <td className="w-10 h-14 text-center font-inter text-xs font-bold p-2"><button className=' text-sm bg-black rounded-sm w-16 text-white h-10 '>View</button></td>

                          </tr>
                          <tr className="bg-[#D9D9D9]">
                          <td className="w-24 h-14 text-center font-inter text-xs font-bold p-2">18 Sep, 2024</td>
                          <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">Frozen food</td>
                              <td className="w-20 h-14 text-center font-inter text-xs font-bold p-2">Ernakulam</td>
                              <td className="w-16 h-14 text-center font-inter text-xs font-bold p-2">Kozhikode</td>
                              <td className="w-10 h-14 text-center font-inter text-xs font-bold p-2"><button className=' text-sm bg-black rounded-sm w-16 text-white h-10 '>View</button></td>

                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </div>
  )
}

export default ScheduleLoadTable