import React, { useState } from 'react'

import { FaMapMarkerAlt } from "react-icons/fa";
import { MdCalendarToday } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";

const MarketPlaceLoads = () => {
    const [numTrucks, setNumTrucks] = useState(2);
    const handleTruckChange = (value) => {
      setNumTrucks((prev) => Math.max(1, prev + value));
    };
  return (
    <div>
      <div className="w-full max-w-2xl p-4 space-y-4">
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
            <label className="text-xs font-medium text-gray-400 mb-1">Delivery Location<span className='text-red-600'>*</span></label>
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
            <label className="text-xs font-medium text-gray-600 mb-2">
              Materials<span className="text-red-600">*</span>
            </label>
            <select className="w-full h-10 border-b border-gray-300 text-black focus:outline-none">
              <option value="">Select a truck type</option>
              <option value="Container">Container</option>
              <option value="Trailer">Trailer</option>
              <option value="Truck">Truck</option>
              <option value="HYVA">HYVA</option>
              <option value="LCV">LCV</option>
              <option value="Tanker">Tanker</option>
            </select>
          </div>
        </div>
        <div className="w-full h-16 grid grid-cols-3 gap-20">

          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-600 mb-2">
              Weight<span className="text-red-600">*</span>
            </label>
            <select className="w-full h-10 border-b border-gray-300   text-black focus:outline-none">
              <option value="">Select a truck type</option>
              <option value="Container">Container</option>
              <option value="Trailer">Trailer</option>
              <option value="Truck">Truck</option>
              <option value="HYVA">HYVA</option>
              <option value="LCV">LCV</option>
              <option value="Tanker">Tanker</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-600 mb-2">
              Preferred Truck Types<span className="text-red-600">*</span>
            </label>
            <select className="w-full h-10 border-b border-gray-300 text-black  focus:outline-none">
              <option value="">Select a truck type</option>
              <option value="Container">Container</option>
              <option value="Trailer">Trailer</option>
              <option value="Truck">Truck</option>
              <option value="HYVA">HYVA</option>
              <option value="LCV">LCV</option>
              <option value="Tanker">Tanker</option>
            </select>
          </div>
          <div className="flex flex-col mt-5 md:mt-0">
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





        <div className="w-full h-full flex justify-end items-center mt-2">
          <button className='w-3/12  h-8  border border-[#5B297E] text-white bg-[#5B297E] rounded-md font-inter flex justify-center items-center text-sm   shadow-sm'>Submit</button>
        </div>


      </div>
       <div className="w-full h-full  md:grid grid-cols-3 gap-4 relative pl-4 pt-2 mt-2 mb-10"  >
      
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