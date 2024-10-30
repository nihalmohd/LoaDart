import React from 'react'

const Nav = () => {
  return (
    <div>
      <div className="w-full h-16 shadow-md flex justify-center items-center">
        <div className="w-10/12 h-12 bg-green-200 flex justify-between items-center gap-1">
          <div className="w-3/12 h-full bg-yellow-200 flex justify-end ">
            <div className="w-[60px] h-full bg-red-200 flex justify-end items-center">
              <img src="\images\ab6aaab828b7c3f0ef708693166c9def.png" className='w-full h-full ' alt="" />
            </div>
            <div className="w-80 h-full bg-red-200">
              <div className="w-full h-full bg-gray-600 flex items-center">
                
                <h1 className='font-nexa text-[30px] text-[#5B297E] font-medium'>LoaDart</h1>
              </div>

            </div>
          </div>
          <div className="w-9/12 h-full bg-yellow-200 flex justify-end items-center">
             <div className="w-9/12 h-12 bg-green-500 flex gap-3 items-center">
                <div className="w-2/12 h-10 bg-red-200 flex justify-center items-center ">
                  <h1 className='text-md font-semibold text-black'>About</h1>
                </div>
                <div className="w-2/12 h-10 bg-red-200 flex justify-center items-center ">
                  <h1 className='text-md font-semibold text-black'>Marketplace</h1>
                </div>
                <div className="w-2/12 h-10 bg-red-200 flex justify-center items-center ">
                  <h1 className='text-md font-semibold text-black'>contact</h1>
                </div>
                <div className="w-5/12 h-10 bg-red-200"></div>
                <button className="w-2/12 h-10 bg-red-200"></button>
                
             </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav