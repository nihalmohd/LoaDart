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
                <div className="w-full h-10 border-2 border-[#5B297E] rounded-md mt-5 felx justify-center items-center">
                    <select name="" id="" className='bg-transparent w-full h-full flex justify-center items-center focus:outline-none '>
                    <option value="">Materials</option>
                          <option value="Auto Parts">Auto Parts</option>
                          <option value="Bardana Jute">Bardana Jute</option>
                          <option value="Building materials">Building materials</option>
                          <option value="Cement">Cement</option>
                          <option value="Chemicals">Chemicals</option>
                          <option value="Coal and Ash">Coal and Ash</option>
                          <option value="Container">Container</option>
                          <option value="Cotten">Cotten</option>
                          <option value="Cotton Seed">Cotton Seed</option>
                          <option value="Electronics Consumer Durables">Electronics Consumer Durables</option>
                          <option value="Fertilizers">Fertilizers</option>
                          <option value="Fruits and Vegetables">Fruits and Vegetables</option>
                          <option value="Furniture and Wood Products">Furniture and Wood Products</option>
                          <option value="House Hold Goods">House Hold Goods</option>
                          <option value="Industrial Equipments">Industrial Equipments</option>
                          <option value="Iron Sheets or Bars or Scraps">Iron Sheets or Bars or Scraps</option>
                          <option value="Liquids in Drums">Liquids in Drums</option>
                          <option value="Liquids or Oil">Liquids or Oil</option>
                          <option value="Machinery new">Machinery new</option>
                          <option value="Machinery old">Machinery old</option>
                          <option value="Medicals">Medicals</option>
                          <option value="Metals">Metals</option>
                          <option value="Mill Jute Oil">Mill Jute Oil</option>
                          <option value="others">Others</option>
                          <option value="Packaging & Containers">Packaging & Containers</option>
                          <option value="Packed Food">Packed Food</option>
                          <option value="Pen">Pen</option>
                          <option value="Plastic">Plastic</option>
                          <option value="Plastic Pipes Or Other products">Plastic Pipes Or Other Products</option>
                          <option value="Powder Bages">Powder Bags</option>
                          <option value="Printed Books or Paper Rolls">Printed Books or Paper Rolls</option>
                          <option value="Refrigerated goods">Refrigerated Goods</option>
                          <option value="Rice or wheat or Agriculture Products">Rice, Wheat, or Agriculture Products</option>
                          <option value="Scrap">Scrap</option>
                          <option value="Spices">Spices</option>
                          <option value="Textails">Textiles</option>
                          <option value="Tyre and Rubber Products">Tyre and Rubber Products</option>
                          <option value="Vehicles or Car">Vehicles or Car</option>
                    </select>
                </div>
                <div className="w-full h-10 border-2 border-[#5B297E] rounded-md mt-5 felx justify-center items-center">
                    <select name="" id="" className='bg-transparent w-full h-full flex justify-center items-center focus:outline-none '>
                    <option value="">Pick Up Location</option>
                    <option value="Erankulam">Eranakulam</option>

                    </select>
                </div>
                <div className="w-full h-10 border-2 border-[#5B297E] rounded-md mt-5 felx justify-center items-center">
                    <select name="" id="" className='bg-transparent w-full h-full flex justify-center items-center focus:outline-none '>
                    <option value="">Delivery location</option>
                    <option value="Kozhikode">Kozhikode</option>
         
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