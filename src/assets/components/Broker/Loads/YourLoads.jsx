import React from 'react'
import { TbEyeFilled } from "react-icons/tb";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';


const YourLoads = () => {
  const navigate = useNavigate()
  return (
    <div className='p-3'>
      <div className="w-full h-16  flex items-center ">
        <div className="w-11/12  h-10 ">
          <div className="w-full h-10 flex justify-between items-end ml-4">
            <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">Your Loads</h1>
            <button className="w-28 h-6 bg-[#5B297E] flex justify-center items-center rounded-sm text-white text-xs mb-2" onClick={()=>{navigate('/Broker/Addload')}} ><FaPlus />Add Load</button>
          </div>
        </div>
      </div>
      <div className="w-full h-auto  grid md:grid-cols-3 grid-cols-1 gap-5 relative" >
        <div className=" w-full md:w-4/12 h-10 absolute flex justify-end items-center  ">
          <div className="w-6 h-6 bg-red-600  rounded-full flex justify-center items-center">
            <h1 className='font-inter text-sm text-white'>2</h1>
          </div>
        </div>
        <div className="w-full h-44 border border-black mt-5 rounded-lg shadow-md ">
          <div className="w-full h-14  border-b border-[##BC89E0]">
            <div className="w-full h-full  ">
              <div className="w-full h-7 flex items-end">
                <h1 className='text-xs font-inter font-semibold ml-2'>Frozen Food</h1>

              </div>
              <div className="w-full h-5  flex items-center">
                <h1 className='text-[10px] font-inter ml-2'><span className='text-[#6B7280]'>wt</span>:4T</h1>

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
                <div className="w-[120px] h-8 bg-white mt-3 ml-4  flex  justify-center items-center font-inter text-sm text-black rounded-sm shadow   ">View Bids  <span className='ml-2 mt-1 text-lg'><TbEyeFilled /></span> </div>
                <div className="w-[140px] h-8 bg-[#5B297E] mt-3 ml-3 flex  justify-center items-center font-inter text-sm text-white rounded-sm shadow ">Suggusted Truck</div>
              </div>
            </div>

          </div>
        </div>
       
        <div className="w-full h-44 border border-black mt-5 rounded-lg shadow-md ">
          <div className="w-full h-14  border-b border-[##BC89E0]">
            <div className="w-full h-full  ">
              <div className="w-full h-7 flex items-end">
                <h1 className='text-xs font-inter font-semibold ml-2'>Frozen Food</h1>

              </div>
              <div className="w-full h-5  flex items-center">
                <h1 className='text-[10px] font-inter ml-2'><span className='text-[#6B7280]'>wt</span>:4T</h1>

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
                <div className="w-[120px] h-8  mt-3 ml-4  flex  justify-center items-center font-inter text-sm text-[#6B7280] border border-black rounded-sm    ">No Bids yet  <span className='ml-2 mt-1 text-lg'><TbEyeFilled /></span> </div>
                <div className="w-[140px] h-8 bg-[#5B297E] mt-3 ml-3 flex  justify-center items-center font-inter text-sm text-white rounded-sm shadow ">Suggusted Truck</div>
              </div>
            </div>

          </div>
        </div>
        
      </div>
    </div>
  )
}

export default YourLoads