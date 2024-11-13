import React from 'react'
import { IoIosNotifications } from "react-icons/io";
import { FaPlus } from "react-icons/fa6";
import DataTracking from './DataTracking';

const Topbuttons = () => {
  return (
    <div>
     <div className="md:w-11/12 h-auto  ">
    <div className="w-full md:h-24 flex justify-between items-center">
      <div className="md:w-3/12 h-10  flex justify-start items-center ml-3 ">
        <h1 className='flex justify-center items-center text-lg font-inter font-semibold'>Hello, John <span className='ml-3 text-[#5B297E] text-xl flex relative'> <IoIosNotifications /> <div className="w-3 h-3 bg-red-500 rounded-full ml-3 absolute text-white text-xs text-center flex justify-center items-center">3</div></span></h1>
      </div>
            <div className="w-6/12 h-10 hidden md:grid grid-cols-4 gap-2 pt-3 ">
                <div className="w-full h-5  flex justify-center items-center ">
                    <form className="max-w-md mx-auto">
                        <label for="default-search" className="mb-2 text-sm font-medium text-[#5B297E]-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-3 h-3 text-[#5B297E] dark:text-[#5B297E]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full  ps-7 text-sm  border border-[#5B297E] rounded-sm text-[#5B297E] placeholder-[#5B297E]   " placeholder="Search Load" required />

                        </div>
                    </form>
                </div>
                <div className="w-full h-5  flex justify-center items-center">
                    <form className="max-w-md mx-auto">
                        <label for="default-search" className="mb-2 text-sm font-medium text-[#5B297E] sr-only dark:text-[#5B297E]">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-3 h-3 text[#5B297E] dark:text-[#5B297E]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full  ps-7 text-sm  border border-[#5B297E]   rounded-sm  placeholder-[#5B297E]  " placeholder="Search Truck" required />

                        </div>
                    </form>
                </div>
                <button className="w-28 h-6 bg-[#5B297E] flex justify-center items-center rounded-sm text-white text-xs mb-2"><FaPlus />Add Load</button>
                <button className="w-28 h-6 bg-[#5B297E] flex justify-center items-center rounded-sm text-white text-xs mb-2"><FaPlus />Add Truck</button>
            </div>
        </div>
              <div className="w-11/12 h-20  ml-4 md:hidden flex justify-center items-center">
                  <div className="w-full h-10  grid grid-cols-2 gap-2 pt-2 ">
                      <div className="w-full h-5  flex justify-center items-center ">
                          <form className="max-w-md mx-auto">
                              <label for="default-search" className="mb-2 text-sm font-medium text-[#5B297E]-900 sr-only dark:text-white">Search</label>
                              <div className="relative">
                                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                      <svg className="w-3 h-3 text-[#5B297E] dark:text-[#5B297E]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                      </svg>
                                  </div>
                                  <input type="search" id="default-search" className="block w-full  ps-7 text-sm  border border-[#5B297E] rounded-sm text-[#5B297E] placeholder-[#5B297E]   " placeholder="Search Load" required />

                              </div>
                          </form>
                      </div>
                      <div className="w-full h-5  flex justify-center items-center">
                          <form className="max-w-md mx-auto">
                              <label for="default-search" className="mb-2 text-sm font-medium text-[#5B297E] sr-only dark:text-[#5B297E]">Search</label>
                              <div className="relative">
                                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                      <svg className="w-3 h-3 text[#5B297E] dark:text-[#5B297E]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                      </svg>
                                  </div>
                                  <input type="search" id="default-search" className="block w-full  ps-7 text-sm  border border-[#5B297E]   rounded-sm  placeholder-[#5B297E]  " placeholder="Search Truck" required />

                              </div>
                          </form>
                      </div>
                      <button className="md:w-28 h-6 bg-[#5B297E] flex justify-center items-center rounded-sm text-white text-xs mb-2"><FaPlus />Add Load</button>
                      <button className="md:w-28 h-6 bg-[#5B297E] flex justify-center items-center rounded-sm text-white text-xs mb-2"><FaPlus />Add Truck</button>
                  </div>
              </div>
    <DataTracking/>
    </div>
    </div>
  )
}

export default Topbuttons