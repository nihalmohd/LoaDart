import React from 'react'
import { HiOutlineTruck } from 'react-icons/hi';
import { IoCubeOutline } from "react-icons/io5";

import MarketPlaceTopButtons from '../Marketplace/MarketPlaceTopButtons';


const DataTracking = () => {
  return (
      <div>
          <div className="w-full h-auto grid md:grid-cols-3 grid-cols-1 gap-5 p-3">
              <div className="w-full h-full bg-[#5B297E] rounded-md">
                  <div className="w-full h-10  flex justify-center items-center">
                      <h1 className='font-inter font-semibold text-sm text-white '>Profile</h1>
                  </div>
                  <div className="w-full h-5  flex justify-center items-center">
                      <h1 className='font-inter text-xs text-white '>Complete your profile</h1>

                  </div>
                  <div className="w-full h-24  flex justify-center items-center">
                      <div className="w-24 h-24 ">
                          <img src="\images\Screenshot 2024-11-07 091427.png" alt="" />
                      </div>
                  </div>
                  <div className="w-full h-12  flex justify-center items-center">
                      <button className='w-5/12 h-8 bg-white text-sm text-[#5B297E] font-inter font-semibold rounded-full p-2'>Complete now</button>
                  </div>
              </div>
              <div className="w-full h-full rounded-md bg-[#5CBCBA]">
                  <div className="w-full h-12  flex justify-center items-center">
                      <h1 className='font-inter font-semibold text-sm text-white '>Achievements</h1>
                  </div>
                  <div className="w-full h-5  flex justify-center items-center">
                      <h1 className='font-inter text-xs text-white '>lorem ipsum</h1>
                  </div>

                  <div className="w-full h-40 p-2 flex-col justify-center items-center">

                      <div className="bg-[#437981] rounded-lg p-2 mb-2 flex-col items-center">
                          <p className="text-sm font-medium text-white">Loads</p>
                          <IoCubeOutline className="text-white mr-4 text-xl" />
                          <div className="w-full">
                              <div className="w-full bg-gray-300 h-2 rounded-full mt-1">
                                  <div className="bg-teal-200 h-2 rounded-full w-3/5"></div> {/* 60% width */}
                              </div>
                          </div>
                      </div>
                      <div className="bg-[#437981] rounded-lg p-2 flex-col items-center">
                          <p className="text-sm font-medium text-white">Trucks</p>
                          <HiOutlineTruck className="text-white mr-4 text-xl" />
                          <div className="w-full">
                              <div className="w-full bg-gray-300 h-2 rounded-full mt-1">
                                  <div className="bg-teal-200 h-2 rounded-full w-1/12"></div> {/* 80% width */}
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="w-full h-full bg-[#EF845C] rounded-md">
                  <div className="w-full h-9  flex justify-center items-center">
                      <h1 className='font-inter font-semibold text-sm text-white '>Free plan</h1>
                  </div>
                  <div className="w-full h-10  flex justify-center items-center">
                      <h1 className='font-inter text-xs text-white text-center '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>

                  </div>
                  <div className="w-full h-24  flex justify-center items-center">
                      <div className="w-24 h-24 ">
                          <img src="\images\Screenshot 2024-11-07 094337.png" alt="" />
                      </div>
                  </div>
                  <div className="w-full h-12  flex justify-center items-center">
                      <button className='w-5/12 h-8 bg-white text-sm text-[#EF845C] font-inter font-semibold rounded-full p-2'>Upgrade now</button>
                  </div>
              </div>
          </div>

          <MarketPlaceTopButtons />
      </div>
  )
}

export default DataTracking