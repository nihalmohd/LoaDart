import React from 'react'

const Transpoter = () => {
    return (
        <div>
            <div className="w-[520px] h-[320px] bg-white rounded-md flex relative z-50 overflow-hidden">
                <div className="w-[272px] h-full rounded-s-md overflow-y-hidden">
                    <img
                        src="/images/a82aaeda5d038912a13d81dc0ca3a4a1.png"
                        className="w-full h-full object-cover  object-[75%]"
                        alt="Transpoter"
                    />
                </div>

                <div className='w-[259px] h-[240px]  rounded-e-lg'>
                    <div className="w-full h-14  flex justify-start items-end">
                        <div className="w-44 h-10  border-b-2 border-[#5B297E]  flex items-end ml-4">
                            <h1 className='font-inter text-[13px] '>Sign In As <span className='font-semibold text-[purple]'>Transpoter</span></h1>
                        </div>
                    </div>
                    <form action="">
                        <div className="w-full h-36 flex justify-center items-center ">
                            <div className="w-full h-16 flex justify-center items-center ml-2">
                                <div className="w-full h-5 bg-gray ml-3 ">
                                    <h1 className='text-[10px] font-inter text-[#6B7280] '>Mobile Number <span className='text-red-400'>*</span></h1>
                                    <div className="w-full h-14  ">
                                        <div className='w-11/12 h-8  border-b border-[#D9D9D9] text-base'>
                                            <input type=" number" className='border-white focus:outline-none active:outline-none' />
                                        </div>
                                        <button className='w-11/12 h-7 bg-[#5B297E] mt-4 text-white text-xs font-inter rounded-sm'>Proceed</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="w-full h-20  mt-4 flex justify-center items-end ">
                        <h1 className='text-[11px] font-inter text-[#6B7280] text-center'>By continuing, I accept TCP - LoaDart’s <span className='underline'>Terms and Conditions </span>&<span className='underline'>Privacy Policy’</span> </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Transpoter