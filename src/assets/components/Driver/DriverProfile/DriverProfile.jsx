import React from 'react'
import { useNavigate } from 'react-router-dom'

const DriverProfile = () => {
    const navigate = useNavigate()
  return (
<div>
      {/* <div>Transporter profle</div> */}
        <div className="w-full md:h-screen bg-[#000000BF] flex justify-center items-center">
          
        <div className=" w-full h-full md:w-[550px] md:h-[320px] md:flex rounded-md">
            <div className="md:w-1/2 h-full bg-[#5B297E] flex justify-center items-center rounded-s-md ">
              <div className="md:w-5/6  md:h-36 flex justify-center items-center ">
                <img src="\images\76821fd48380d92216f8bb5fbebfc5c6.gif" className='w-full h-full object-cover' alt="" />
              </div>
            </div>
            <div className="md:w-1/2 md:h-full bg-white rounded-e-md  p-3" >
              <div className="w-full h-full ">
                          <div className="w-full h-6  border-b-2 border-[#5B297E]   pl-1 ">
                              <h1 className='font-inter text-[15px] font-semibold text-[purple]'>Let’s finish setting up your profile</h1>
                          </div>
                          <div className="w-full h-64  flex justify-center items-center p-2 ">
                          <div className="w-full h-36  grid grid-row-2 gap-1 mt-4 p-2 ">

                            <div className="w-full h-full border-b border-[#D9D9D9] ">
                                <div className="  flex items-center ">
                                    <h1 className='text-[10px] font-inter text-[#6B7280] '>Name </h1>

                                </div>
                                <div >
                                <input type=" text" className='border-white focus:outline-none active:outline-none h-full w-full'/>
                                </div>
                            </div>
                          <div className="w-full h-full border-b border-[#D9D9D9] ">
                              <div className="  flex items-center ">
                                  <h1 className='text-[10px] font-inter text-[#6B7280] '>Land Phone Number<span className='text-red-400'></span></h1>

                              </div>
                            <div >
                            <input type=" text" className=' focus:outline-none active:outline-none h-full w-full'/>
                            </div>
                          </div>
                          <div className="w-full h-full mt-1 ">
                              <div className="w-full h-full flex justify-center items-center">
                              <button className='w-full h-7 bg-[#5B297E]  text-white text-xs font-inter rounded-sm' onClick={()=>{navigate("/Driver")}} >Proceed</button>
                              </div>
                          </div>
                          </div>

                            {/* <div className="w-full h-full border-b border-[#D9D9D9] ">
                                <div className="  flex items-center ">
                                    <h1 className='text-[10px] font-inter text-[#6B7280] '>Componey Name <span className='text-red-400'>*</span></h1>

                                </div>
                              <div >
                              <input type=" text" className='border-white focus:outline-none active:outline-none h-full w-full'/>
                              </div>
                            </div> */}
                            {/* <div className="w-full h-full border-b border-[#D9D9D9] ">
                                <div className="  flex items-center ">
                                    <h1 className='text-[10px] font-inter text-[#6B7280] '>Email id</h1>

                                </div>
                              <div>
                              <input type=" text" className='border-white focus:outline-none active:outline-none h-full w-full'/>
                              </div>
                            </div> */}
                          </div>
              </div>
            </div>
        </div>

        </div>
    </div>
  )
}

export default DriverProfile