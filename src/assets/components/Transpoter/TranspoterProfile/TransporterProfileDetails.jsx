import React from 'react'

const TransporterProfileDetails = () => {
  return (
      <div>
          <div className="w-full h-auto flex justify-center items-center">
              <div className="w-11/12 h-auto  ">
                  <div className="w-full h-10 flex-col items-end">
                      <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">Profile</h1>
                  </div>
                  <div className="w-full h-44 flex justify-center items-center bg-red-300 rounded-sm border border-black">
                      <div className="w-full h-full flex">
                            <div className="w-2/12 h-full bg-yellow-300 flex justify-center items-center">
                                <div className="w-28 h-28 bg-red-300 rounded-full">
                                    <img src="\images\e79560b9ae8865c9906e28d4a695c379.png" className='w-full h-full object-cover rounded-full' alt="" />
                                </div>
                            </div>
                            <div className="w-4/12 h-full bg-yellow-400 flex justify-center items-center">
                                <div className="w-full h-16 bg-blue-300"></div>
                            </div>
                            <div className="w-6/12 h-full bg-yellow-5600"></div>

                      </div>
                  </div>

              </div>
          </div>
      </div>
  )
}

export default TransporterProfileDetails