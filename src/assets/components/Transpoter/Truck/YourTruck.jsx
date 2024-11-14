import React from 'react'

const YourTruck = () => {
  return (
    <div>
        <div className="w-full h-16  flex items-center ">
                  <div className="w-11/12  h-10 ">
                      <div className="w-full h-10 flex justify-between items-end ml-4">
                          <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">Your Loads</h1>
                          <button className="w-28 h-6 bg-[#5B297E] flex justify-center items-center rounded-sm text-white text-xs mb-2"><FaPlus />Add Load</button>
                      </div>
                  </div>
              </div>
    </div>
  )
}

export default YourTruck