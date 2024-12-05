import React from 'react'
import { useNavigate } from 'react-router-dom';


const PostTruck = () => {
    const navigate = useNavigate()
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
                    type="Date"
                    className="w-full h-10 border-b border-gray-300 outline-none placeholder:text-black"
                  />
                </div>

                {/* Delivery Location */}
                <div className="flex flex-col">
                  <label className="text-xs font-medium text-gray-400 mb-1">Time</label>
                  <input
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
                    Available Weight capacity<span className="text-red-600">*</span>
                  </label>
                  <select className="w-full h-10 border-b border-gray-300   text-black focus:outline-none">
                    <option value="">Select weight capacity</option>
                    <option value="Above 40 MT">Above 40 MT</option>
                    <option value="Above 30 MT">Above 30 MT</option>
                    <option value="Upto 28 MT">Upto 28 MT</option>
                    <option value="Upto 25 MT">Upto 25 MT</option>
                    <option value="Upto 20 MT">Upto 20 MT</option>
                    <option value="Upto 17 MT">Upto 17 MT</option>
                    <option value="Upto 15 MT">Upto 15 MT</option>
                    <option value="Upto 12 MT">Upto 12 MT</option>
                    <option value="Upto 9 MT">Upto 9 MT</option>
                    <option value="Upto 7 MT">Upto 7 MT</option>
                    <option value="Upto 5 MT">Upto 5 MT</option>
                    <option value="Upto 3 MT">Upto 3 MT</option>
                    <option value="Upto 1 MT">Upto 1 MT</option>
                    <option value="Below 1 MT">Below 1 MT</option>

                  </select>
                </div>
              </div>

              <label className="text-xs font-medium text-gray-400 mb-2">Comments</label>
              <textarea name="" id="" className='w-full h-32 rounded-md border border-black bg-[#F5F4F4] text-sm text-gray-600 font-inter px-2 '>Type your comments or instructions here...</textarea>

              <button className='w-2/12  h-10 mt-3 md:mt-0  border border-[#5B297E] text-white bg-[#5B297E] rounded-sm font-inter flex justify-center items-center text-sm   shadow-md'>Proceed</button>

            </div>
          </div>
        </div>
            </div>
        </div>
    )
}

export default PostTruck
