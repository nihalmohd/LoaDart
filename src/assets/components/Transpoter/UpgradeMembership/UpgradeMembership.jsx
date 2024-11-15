import React from 'react'

const UpgradeMembership = () => {
  return (
    <div>
         <div className="w-11/12 h-auto ">
                      <div className="w-full h-10 flex justify-between items-end ml-4">
                          <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">Upgrade Membership</h1>
                      </div>
                  </div>

                  <div className="w- bg-orange-500 p-6 rounded-lg text-white max-w-md w-full mx-auto sm:max-w-lg lg:max-w-xl">
  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
    <div className="mb-4 sm:mb-0">
      <h2 className="font-bold text-lg">Free plan</h2>
      <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </div>
    <button className="bg-white text-orange-500 font-semibold py-2 px-4 rounded-md text-center w-32 sm:w-auto">
      Upgrade Now
    </button>
  </div>

  <div className="text-lg sm:text-2xl font-bold mb-1">EXPIRE IN</div>
  <div className="text-3xl sm:text-4xl font-bold mb-4">05 DAYS</div>

  <div className="w-full h-4 sm:h-6 bg-orange-300 rounded-full overflow-hidden">
    <div className="bg-orange-700 h-full w-2/5 rounded-full"></div>
  </div>
</div>

    </div>
  )
}

export default UpgradeMembership