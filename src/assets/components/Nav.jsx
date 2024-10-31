import React from 'react'

const Nav = () => {
  return (
    <div>
      <div className="w-full h-16 shadow-md flex justify-center items-center">
        <div className="w-10/12 h-12  flex justify-between items-center gap-1">
          <div className="w-3/12 h-full  flex justify-end items-end  ">
            <div className="w-[55px] h-[41px]  flex justify-end items-end">
              <img src="\images\ab6aaab828b7c3f0ef708693166c9def.png" className='w-full h-full ' alt="" />
            </div>
            <div className="w-80 h-full ">
              <div className="w-full h-full  flex items-center">
                
                <h1 className='font-nexa text-[23px] text-[#5B297E] font-semibold'>LoaDart</h1>
              </div>

            </div>
          </div>
          <div className="w-9/12 h-full  flex justify-end items-center">
             <div className="w-10/12 h-8  flex gap-4 items-center ">
                <div className="w-1/12 h-10  flex justify-start items-center ">
                  <h1 className='text-[13px]  font-inter font-medium text-black'>About</h1>
                </div>
                <div className="w-2/12 h-10  flex justify-start items-center ">
                  <h1 className='text-[13px]  font-inter  text-black'>Marketplace</h1>
                </div>
                <div className="w-1/12 h-10  flex justify-center items-center ">
                  <h1 className='text-[13px]  font-inter  text-black'>Contact</h1>
                </div>
                <div className="w-6/12 h-10 flex gap-1">
                 <div className="w-1/2 h-full flex justify-center items-center">
                  <img src="\images\Screenshot 2024-10-31 002925.png" className='w-fit h-fit' alt="" />
                 </div>
                 <div className="w-1/2 h-full flex justify-center items-center">
                  <img src="\images\Screenshot 2024-10-31 001830.png" className='w-fit h-fit' alt="" />
                 </div>
                </div>
                <button className="w-2/12 h-10 bg-[#5B297E] rounded-md">
                <h1 className='text-[13px]  font-inter  text-white '>Sign In </h1>
                </button>
                
             </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default Nav