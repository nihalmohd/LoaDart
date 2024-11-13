import React from 'react'

import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

const MarketPlaceLoads = () => {
  return (
    <div>
          <div className="w-full flex items-center justify-center gap-6 p-2 flex-wrap ">
              <div className="flex flex-col">
                  <label className="text-[10px] text-gray-500 mb-1 ml-2">Add pickup location</label>
                  <div className="flex items-center gap-2 w-60 h-10 bg-gray-100 border border-gray-300 rounded-md px-3">
                      <FaMapMarkerAlt className="text-green-500" />
                      <input
                          type="text"
                          placeholder="Ernakulam"
                          className="w-full bg-gray-100 outline-none"
                      />
                  </div>
              </div>


              <div className="flex flex-col">
                  <label className="text-[10px] text-gray-500 mb-1 ml-2">Add delivery location</label>
                  <div className="flex items-center gap-2 w-60 h-10 bg-gray-100 border border-gray-300 rounded-md px-3">
                      <FaMapMarkerAlt className="text-red-500" />
                      <input
                          type="text"
                          placeholder="Kozhikode"
                          className="w-full bg-gray-100 outline-none"
                      />
                  </div>
              </div>


              <div className="flex flex-col">
                  <label className="text-[10px] text-gray-500 mb-1 ml-2">Date</label>
                  <div className="flex items-center gap-2 w-60 h-10 bg-gray-100 border border-gray-300 rounded-md px-3 text-gray-500">
                      <input
                          type="date"
                          placeholder="14-10-2024 - 16-10-2024"
                          className="w-full bg-gray-100 outline-none"
                      />
                      {/* <MdCalendarToday className="text-gray-500" /> */}
                  </div>
              </div>


              <div className="flex flex-col">
                  <label className="text-[10px] text-gray-500 mb-1 ml-2">Weight Capacity</label>
                  <select className="w-60 h-10 bg-gray-100 border border-gray-300 rounded-md px-3 outline-none text-gray-500">
                      <option value="">Select weight capacity</option>
                      <option value="500kg">500 kg</option>
                      <option value="1000kg">1000 kg</option>
                      <option value="1500kg">1500 kg</option>
                      <option value="2000kg">2000 kg</option>
                  </select>
              </div>


              <div className="flex flex-col">
                  <label className="text-[10px] text-gray-500 mb-1 ml-2">Trucks</label>
                  <select className="w-60 h-10 bg-gray-100 border border-gray-300 rounded-md px-3 outline-none text-gray-500">
                      <option value="">Select number of trucks</option>
                      <option value="1">1 Truck</option>
                      <option value="2">2 Trucks</option>
                      <option value="3">3 Trucks</option>
                      <option value="4">4 Trucks</option>
                  </select>
              </div>

              <button className="w-28 h-10 bg-[#5B297E] text-white rounded-md flex items-center justify-center gap-2 mt-5">
                  <span><IoMdSearch /></span>
                  Search
              </button>
       </div>
       <div className="w-full h-full  grid grid-cols-3 gap-4 relative pl-4 pt-2 mt-2 mb-10"  >
      
       <div className="w-full h-44 border border-black mt-5 rounded-lg shadow-md ">
         <div className="w-full h-14  border-b border-[##BC89E0] ">
           <div className="w-full h-full  flex">

           <div className="w-1/2 h-full  ">
               <div className="w-full h-7 flex items-end">
              <h1 className='text-xs font-inter font-semibold ml-2'>Frozen Food</h1>

               </div>
               <div className="w-full h-5  flex items-center">
              <h1 className='text-[10px] font-inter ml-2 font-bold'><span className='text-[#6B7280] font-normal'>wt</span >:4T</h1>

               </div>
           </div>
               <div className="w-1/2 h-full flex justify-center items-end">
               
              <h1 className='text-[10px] font-inter ml-2'><span className='text-[#6B7280]'>Date :</span>18-10-2024</h1>

              
               </div>
           </div>
           <div className="w-full h-16  flex ">
             <div className="w-1/12 h-full  flex justify-center items-center">
               <div className="w-5 h-full  ">
                 <div className="w-2 h-2 bg-green-400 rounded-full ml-2 mt-4"></div>
                 <div className="w-1 h-5 border-dashed border-e ml-2"></div>
                 <div className="w-2 h-2 bg-red-400 rounded-full ml-2"></div>
               </div>
             </div>
             <div className="w-11/12 h-full ">
                 <div className="w-full h-1/2  flex items-end">
                   <h1 className='font-inter text-sm '>Ernakulam, Kerala</h1>
                 </div>
                 <div className="w-full h-1/2  flex items-center">
                 <h1 className='font-inter text-sm '>Kozhikode, Kerala</h1>
                 </div>
             </div>
           </div>
           <div className="w-full h-[55px] bg-[#D9D9D9] rounded-b-md  ">
             <div className="w-full h-full  rounded-b-md flex">
             <div className="w-2/3 h-full     font-inter text-sm text-black rounded-sm   ">
                 <div className="w-full h-1/2  flex  items-end">
                       <h1 className='font-inter ml-3 font-semibold text-sm '>Owner Name</h1>
                 </div>
                 <div className="w-full h-1/2 ">
                       <h1 className='font-inter ml-3  text-xs text-[#6B7280] '>Location</h1>
                   </div>
              </div>
             <div className="w-1/3 h-8 bg-[#5B297E] mt-3 ml-3 flex  justify-center items-center font-inter text-sm text-white   rounded-full mr-5 ">Bid Now</div>        
             </div>
           </div>
           
         </div>
       </div>
       <div className="w-full h-44 border border-black mt-5 rounded-lg shadow-md ">
         <div className="w-full h-14  border-b border-[##BC89E0] ">
           <div className="w-full h-full  flex">

           <div className="w-1/2 h-full  ">
               <div className="w-full h-7 flex items-end">
              <h1 className='text-xs font-inter font-semibold ml-2'>Frozen Food</h1>

               </div>
               <div className="w-full h-5  flex items-center">
              <h1 className='text-[10px] font-inter ml-2 font-bold'><span className='text-[#6B7280] font-normal'>wt</span>:4T</h1>

               </div>
           </div>
               <div className="w-1/2 h-full flex justify-center items-end">
               
              <h1 className='text-[10px] font-inter ml-2'><span className='text-[#6B7280] '>Date :</span>18-10-2024</h1>

              
               </div>
           </div>
           <div className="w-full h-16  flex ">
             <div className="w-1/12 h-full  flex justify-center items-center">
               <div className="w-5 h-full  ">
                 <div className="w-2 h-2 bg-green-400 rounded-full ml-2 mt-4"></div>
                 <div className="w-1 h-5 border-dashed border-e ml-2"></div>
                 <div className="w-2 h-2 bg-red-400 rounded-full ml-2"></div>
               </div>
             </div>
             <div className="w-11/12 h-full ">
                 <div className="w-full h-1/2  flex items-end">
                   <h1 className='font-inter text-sm '>Ernakulam, Kerala</h1>
                 </div>
                 <div className="w-full h-1/2  flex items-center">
                 <h1 className='font-inter text-sm '>Kozhikode, Kerala</h1>
                 </div>
             </div>
           </div>
           <div className="w-full h-[55px] bg-[#D9D9D9] rounded-b-md  ">
             <div className="w-full h-full  rounded-b-md flex">
             <div className="w-2/3 h-full     font-inter text-sm text-black rounded-sm   ">
                 <div className="w-full h-1/2  flex  items-end">
                       <h1 className='font-inter ml-3 font-semibold text-sm '>Owner Name</h1>
                 </div>
                 <div className="w-full h-1/2 ">
                       <h1 className='font-inter ml-3  text-xs text-[#6B7280] '>Location</h1>
                   </div>
              </div>
             <div className="w-1/3 h-8 bg-[#5B297E] mt-3 ml-3 flex  justify-center items-center font-inter text-sm text-white   rounded-full mr-5 ">Bid Now</div>        
             </div>
           </div>
           
         </div>
       </div>
       <div className="w-full h-44 border border-black mt-5 rounded-lg shadow-md ">
         <div className="w-full h-14  border-b border-[##BC89E0] ">
           <div className="w-full h-full  flex">

           <div className="w-1/2 h-full  ">
               <div className="w-full h-7 flex items-end">
              <h1 className='text-xs font-inter font-semibold ml-2'>Frozen Food</h1>

               </div>
               <div className="w-full h-5  flex items-center">
              <h1 className='text-[10px] font-inter ml-2 font-bold'><span className='text-[#6B7280] font-normal'>wt</span>:4T</h1>

               </div>
           </div>
               <div className="w-1/2 h-full flex justify-center items-end">
               
              <h1 className='text-[10px] font-inter ml-2'><span className='text-[#6B7280]'>Date :</span>18-10-2024</h1>

              
               </div>
           </div>
           <div className="w-full h-16  flex ">
             <div className="w-1/12 h-full  flex justify-center items-center">
               <div className="w-5 h-full  ">
                 <div className="w-2 h-2 bg-green-400 rounded-full ml-2 mt-4"></div>
                 <div className="w-1 h-5 border-dashed border-e ml-2"></div>
                 <div className="w-2 h-2 bg-red-400 rounded-full ml-2"></div>
               </div>
             </div>
             <div className="w-11/12 h-full ">
                 <div className="w-full h-1/2  flex items-end">
                   <h1 className='font-inter text-sm '>Ernakulam, Kerala</h1>
                 </div>
                 <div className="w-full h-1/2  flex items-center">
                 <h1 className='font-inter text-sm '>Kozhikode, Kerala</h1>
                 </div>
             </div>
           </div>
           <div className="w-full h-[55px] bg-[#D9D9D9] rounded-b-md  ">
             <div className="w-full h-full  rounded-b-md flex">
             <div className="w-2/3 h-full     font-inter text-sm text-black rounded-sm   ">
                 <div className="w-full h-1/2  flex  items-end">
                       <h1 className='font-inter ml-3 font-semibold text-sm '>Owner Name</h1>
                 </div>
                 <div className="w-full h-1/2 ">
                       <h1 className='font-inter ml-3  text-xs text-[#6B7280] '>Location</h1>
                   </div>
              </div>
             <div className="w-1/3 h-8 bg-[#5B297E] mt-3 ml-3 flex  justify-center items-center font-inter text-sm text-white   rounded-full mr-5 ">Bid Now</div>        
             </div>
           </div>
           
         </div>
       </div>
       <div className="w-full h-44 border border-black mt-5 rounded-lg shadow-md ">
         <div className="w-full h-14  border-b border-[##BC89E0] ">
           <div className="w-full h-full  flex">

           <div className="w-1/2 h-full  ">
               <div className="w-full h-7 flex items-end">
              <h1 className='text-xs font-inter font-semibold ml-2'>Frozen Food</h1>

               </div>
               <div className="w-full h-5  flex items-center">
              <h1 className='text-[10px] font-inter ml-2 font-bold'><span className='text-[#6B7280] font-normal'>wt</span>:4T</h1>

               </div>
           </div>
               <div className="w-1/2 h-full flex justify-center items-end">
               
              <h1 className='text-[10px] font-inter ml-2'><span className='text-[#6B7280]'>Date :</span>18-10-2024</h1>

              
               </div>
           </div>
           <div className="w-full h-16  flex ">
             <div className="w-1/12 h-full  flex justify-center items-center">
               <div className="w-5 h-full  ">
                 <div className="w-2 h-2 bg-green-400 rounded-full ml-2 mt-4"></div>
                 <div className="w-1 h-5 border-dashed border-e ml-2"></div>
                 <div className="w-2 h-2 bg-red-400 rounded-full ml-2"></div>
               </div>
             </div>
             <div className="w-11/12 h-full ">
                 <div className="w-full h-1/2  flex items-end">
                   <h1 className='font-inter text-sm '>Ernakulam, Kerala</h1>
                 </div>
                 <div className="w-full h-1/2  flex items-center">
                 <h1 className='font-inter text-sm '>Kozhikode, Kerala</h1>
                 </div>
             </div>
           </div>
           <div className="w-full h-[55px] bg-[#D9D9D9] rounded-b-md  ">
             <div className="w-full h-full  rounded-b-md flex">
             <div className="w-2/3 h-full     font-inter text-sm text-black rounded-sm   ">
                 <div className="w-full h-1/2  flex  items-end">
                       <h1 className='font-inter ml-3 font-semibold text-sm '>Owner Name</h1>
                 </div>
                 <div className="w-full h-1/2 ">
                       <h1 className='font-inter ml-3  text-xs text-[#6B7280] '>Location</h1>
                   </div>
              </div>
             <div className="w-1/3 h-8 bg-[#5B297E] mt-3 ml-3 flex  justify-center items-center font-inter text-sm text-white   rounded-full mr-5 ">Bid Now</div>        
             </div>
           </div>
           
         </div>
       </div>
       <div className="w-full h-44 border border-black mt-5 rounded-lg shadow-md ">
         <div className="w-full h-14  border-b border-[##BC89E0] ">
           <div className="w-full h-full  flex">

           <div className="w-1/2 h-full  ">
               <div className="w-full h-7 flex items-end">
              <h1 className='text-xs font-inter font-semibold ml-2'>Frozen Food</h1>

               </div>
               <div className="w-full h-5  flex items-center">
              <h1 className='text-[10px] font-inter ml-2 font-bold'><span className='text-[#6B7280] font-normal'>wt</span>:4T</h1>

               </div>
           </div>
               <div className="w-1/2 h-full flex justify-center items-end">
               
              <h1 className='text-[10px] font-inter ml-2'><span className='text-[#6B7280]'>Date :</span>18-10-2024</h1>

              
               </div>
           </div>
           <div className="w-full h-16  flex ">
             <div className="w-1/12 h-full  flex justify-center items-center">
               <div className="w-5 h-full  ">
                 <div className="w-2 h-2 bg-green-400 rounded-full ml-2 mt-4"></div>
                 <div className="w-1 h-5 border-dashed border-e ml-2"></div>
                 <div className="w-2 h-2 bg-red-400 rounded-full ml-2"></div>
               </div>
             </div>
             <div className="w-11/12 h-full ">
                 <div className="w-full h-1/2  flex items-end">
                   <h1 className='font-inter text-sm '>Ernakulam, Kerala</h1>
                 </div>
                 <div className="w-full h-1/2  flex items-center">
                 <h1 className='font-inter text-sm '>Kozhikode, Kerala</h1>
                 </div>
             </div>
           </div>
           <div className="w-full h-[55px] bg-[#D9D9D9] rounded-b-md  ">
             <div className="w-full h-full  rounded-b-md flex">
             <div className="w-2/3 h-full     font-inter text-sm text-black rounded-sm   ">
                 <div className="w-full h-1/2  flex  items-end">
                       <h1 className='font-inter ml-3 font-semibold text-sm '>Owner Name</h1>
                 </div>
                 <div className="w-full h-1/2 ">
                       <h1 className='font-inter ml-3  text-xs text-[#6B7280] '>Location</h1>
                   </div>
              </div>
             <div className="w-1/3 h-8 bg-[#5B297E] mt-3 ml-3 flex  justify-center items-center font-inter text-sm text-white   rounded-full mr-5 ">Bid Now</div>        
             </div>
           </div>
           
         </div>
       </div>
       <div className="w-full h-44 border border-black mt-5 rounded-lg shadow-md ">
         <div className="w-full h-14  border-b border-[##BC89E0] ">
           <div className="w-full h-full  flex">

           <div className="w-1/2 h-full  ">
               <div className="w-full h-7 flex items-end">
              <h1 className='text-xs font-inter font-semibold ml-2'>Frozen Food</h1>

               </div>
               <div className="w-full h-5  flex items-center">
              <h1 className='text-[10px] font-inter ml-2 font-bold'><span className='text-[#6B7280] font-normal'>wt</span>:4T</h1>

               </div>
           </div>
               <div className="w-1/2 h-full flex justify-center items-end">
               
              <h1 className='text-[10px] font-inter ml-2'><span className='text-[#6B7280]'>Date :</span>18-10-2024</h1>

              
               </div>
           </div>
           <div className="w-full h-16  flex ">
             <div className="w-1/12 h-full  flex justify-center items-center">
               <div className="w-5 h-full  ">
                 <div className="w-2 h-2 bg-green-400 rounded-full ml-2 mt-4"></div>
                 <div className="w-1 h-5 border-dashed border-e ml-2"></div>
                 <div className="w-2 h-2 bg-red-400 rounded-full ml-2"></div>
               </div>
             </div>
             <div className="w-11/12 h-full ">
                 <div className="w-full h-1/2  flex items-end">
                   <h1 className='font-inter text-sm '>Ernakulam, Kerala</h1>
                 </div>
                 <div className="w-full h-1/2  flex items-center">
                 <h1 className='font-inter text-sm '>Kozhikode, Kerala</h1>
                 </div>
             </div>
           </div>
           <div className="w-full h-[55px] bg-[#D9D9D9] rounded-b-md  ">
             <div className="w-full h-full  rounded-b-md flex">
             <div className="w-2/3 h-full     font-inter text-sm text-black rounded-sm   ">
                 <div className="w-full h-1/2  flex  items-end">
                       <h1 className='font-inter ml-3 font-semibold text-sm '>Owner Name</h1>
                 </div>
                 <div className="w-full h-1/2 ">
                       <h1 className='font-inter ml-3  text-xs text-[#6B7280] '>Location</h1>
                   </div>
              </div>
             <div className="w-1/3 h-8 bg-[#5B297E] mt-3 ml-3 flex  justify-center items-center font-inter text-sm text-white   rounded-full mr-5 ">Bid Now</div>        
             </div>
           </div>
           
         </div>
       </div>
       
       
     </div>

    </div>
  )
}

export default MarketPlaceLoads