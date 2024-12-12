import React from 'react'
import { HiOutlineTruck } from 'react-icons/hi'
import { IoCubeOutline } from 'react-icons/io5'

const Achievments = () => {
    return (
        <div className="w-11/12 h-auto  flex justify-center">
            <div className="w-full h-auto  mt-3 md:pt-2 md:pl-3 p-4   border border-black ">

                <div className="w-full h-10 flex-col items-end">
                    <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-3  ">Achievments</h1>
                </div>

                <div className="w-full h-auto grid md:grid-cols-3 grid-cols-1 gap-5 p-3">

                    <div className="w-full h-full rounded-md bg-[#5CBCBA]">
                        <div className="w-full h-12  flex justify-center items-center">
                            <h1 className='font-inter font-semibold text-sm text-white '>Achievements</h1>
                        </div>
                        <div className="w-full h-5  flex justify-center items-center">
                            <h1 className='font-inter text-xs text-white '>lorem ipsum</h1>
                        </div>

                        <div className="w-full h-44 p-2 px-5 flex-col justify-center items-center">

                            <div className="bg-[#437981] h-36 rounded-lg p-2 mb-2  ">
                                <div className="w-full h-16 ">
                                    <p className="text-sm font-medium text-white">Loads</p>
                                    <IoCubeOutline className="text-white mr-4 text-2xl" />
                                    <div className="w-full">
                                        <div className="w-full bg-gray-300 h-2 rounded-full mt-1">
                                            <div className="bg-teal-200 h-2 rounded-full w-2/5"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="w-full h-16 ">
                                    <p className="text-sm font-medium text-white">Truck</p>
                                    <HiOutlineTruck className="text-white mr-4 text-2xl" />
                                    <div className="w-full">
                                        <div className="w-full bg-gray-300 h-2 rounded-full mt-1">
                                            <div className="bg-teal-200 h-2 rounded-full w-3/5"></div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Achievments