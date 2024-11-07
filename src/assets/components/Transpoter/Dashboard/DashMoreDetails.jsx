import React from 'react'

const DashMoreDetails = () => {
  return (
    <div>
        <div className="w-full h-60  mt-2 flex justify-center items-center p-2">
            <div className="w-full h-52 rounded-md border border-black flex">
                <div className="w-3/12 h-full ">
                  <div className="w-full h-1/2 flex items-end pl-4">
                    <h1 className='font-inter text-5xl font-extrabold text-[#5B297E]'>₹4500</h1>
                  </div>
                  <div className="w-full h-12  pl-4">
                    <h1 className='font-inter text-[#5B297E] text-lg '>Earned so far</h1>
                  </div>
                  <div className="w-full h-14  flex justify-center items-center">
                    <button className='w-10/12 h-10 bg-[#5B297E] rounded-full text-white'>View more detials</button>
                  </div>
                </div>

                <div className="w-3/12 h-full ">
                   <img src="\images\a4971eec5d96cf72041a5d776efe6b97.png" className='object-cover w-full h-full overflow-hidden' alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DashMoreDetails