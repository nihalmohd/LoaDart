import React from 'react'
import { IoPencilSharp } from "react-icons/io5";
import { TbEyeFilled } from "react-icons/tb";
import { GoDownload } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { LuPhone } from "react-icons/lu"; 
import { MdOutlineMailOutline } from "react-icons/md";

const TransporterProfileDetails = () => {
    const navigate  = useNavigate()
    return (
        <div>
            <div className="w-full h-auto flex justify-center items-center mb-10">
                <div className="w-11/12 h-auto  ">
                    <div className="w-full h-10 flex-col items-end">
                        <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">Profile</h1>
                    </div>
                    <div className="w-full h-44 flex justify-center items-center  rounded-sm border border-black">
                        <div className="w-full h-full ml-4  md:m-0 flex">
                            <div className="md:w-2/12 h-full  flex justify-center items-center">
                                <div className="w-28 h-28  rounded-full">
                                    <img src="\images\e79560b9ae8865c9906e28d4a695c379.png" className='w-full h-full object-cover rounded-full object-[15%]' alt="" />
                                </div>
                            </div>
                            <div className=" w-5/12 md:w-4/12 h-full  flex justify-center items-center ml-2 md:ml-0">
                                <div className="w-full h-24 ">
                                    <div className="w-full h-8 ">
                                        <h1 className='font-inter font-semibold text-lg text-black'>John Newman</h1>
                                    </div>
                                    <div className="font-inter text-base   text-[#6B7280]">
                                        <h1 className='flex gap-2 items-center'> <LuPhone />987654321</h1>
                                        <h1 className='flex gap-2 items-center' ><MdOutlineMailOutline />test@123.com</h1>
                                    </div>
                                </div>
                            </div>
                            <div className="w-6/12 h-full bg-yellow-5600">
                                <div className="w-full h-20  flex justify-end items-center">
                                    <button className='flex justify-center items-center font-inter text-white bg-[#5B297E] w-20 h-8 rounded-sm mr-6'><span className='mr-2'><IoPencilSharp /></span>Edit</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-full h-60 flex justify-center items-center  rounded-sm border border-black mt-7 mb-10">
                        <div className="w-full h-full flex">
                            <div className="w-6/12 h-full  ">
                                <div className="w-full h-10">
                                    <h1 className="font-inter font-semibold text-[#5B297E] p-3 ">Basic Details</h1>
                                </div>
                                <div className="w-full h-4/6 ">
                                    <div className="w-full h-10  mt-2 flex justify-between items-center">
                                        <div className="w-5/12 h-8 ">
                                            <h1 className='font-inter text-sm ml-3 text-[#6B7280]'>Address line 1</h1>
                                        </div>
                                        <div className="w-5/12 h-8  flex justify-center ">

                                            <h1 className='font-inter text-sm ml-3 text-blaci'>Abcd</h1></div>
                                    </div>
                                    <div className="w-full h-10  mt-2 flex justify-between items-center">
                                        <div className="w-5/12 h-8 ">
                                            <h1 className='font-inter text-sm ml-3 text-[#6B7280]'>Address line 2</h1>
                                        </div>
                                        <div className="w-5/12 h-8  flex justify-center ">

                                            <h1 className='font-inter text-sm ml-3 text-blaci'>Abcd</h1></div>
                                    </div>
                                    <div className="w-full h-10  mt-2 flex justify-between items-center">
                                        <div className="w-5/12 h-8 ">
                                            <h1 className='font-inter text-sm ml-3 text-[#6B7280]'>District</h1>
                                        </div>
                                        <div className="w-5/12 h-8  flex justify-center ">

                                            <h1 className='font-inter text-sm ml-3 text-blaci'>Abcd</h1></div>
                                    </div>
                                    <div className="w-full h-10  mt-2 flex justify-between items-center">
                                        <div className="w-5/12 h-8 ">
                                            <h1 className='font-inter text-sm ml-3 text-[#6B7280]'>State</h1>
                                        </div>
                                        <div className="w-5/12 h-8  flex justify-center ">

                                            <h1 className='font-inter text-sm ml-3 text-blaci'>Abcd</h1></div>
                                    </div>
                                    


                                </div>

                            </div>
                            <div className="w-6/12 h-full bg-yellow-5600">
                                <div className="w-full h-20  flex justify-end items-center">
                                    <button className='flex justify-center items-center font-inter text-white bg-[#5B297E] w-20 h-8 rounded-sm mr-6' onClick={()=>{navigate("/Transpoter/EditProfile")}}><span className='mr-2' ><IoPencilSharp /></span>Edit</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="w-full h-48 flex justify-center items-center  rounded-sm border border-black mt-7 mb-10">
                        <div className="w-full h-full flex">
                            <div className="w-6/12 h-full  ">
                                <div className="w-full h-10 ">
                                    <h1 className="font-inter font-semibold text-[#5B297E] p-3 ">Documents</h1>
                                </div>
                                <div className="w-full h-full ">
                                    <div className="w-full h-10  mt-2 flex justify-between items-center">
                                        <div className="w-5/12 h-8 ">
                                            <h1 className='font-inter text-sm ml-3 text-[#6B7280]'>GSTIN</h1>
                                        </div>
                                        <div className="w-5/12 h-8  flex justify-center ">

                                            <h1 className='font-inter text-sm ml-3 text-blaci'>Abcd</h1></div>
                                    </div>
                                    <div className="w-full h-10  mt-2 flex justify-between items-center">
                                        <div className="w-5/12 h-8 ">
                                            <h1 className='font-inter text-sm ml-3 text-[#6B7280]'>Business Registration</h1>
                                        </div>
                                        <div className="w-5/12 h-8  flex justify-center  ">
                                            <div className="w-3/12 h-8  flex  justify-between ">
                                                <div className="w-5 h-5 bg-[#5B297E] mt-2 flex justify-center items-center text-white rounded-sm shadow mr-2 md:mr-0"><TbEyeFilled /></div>
                                                <div className="w-5 h-5 bg-[#5B297E] mt-2 flex justify-center items-center text-white rounded-sm shadow"><GoDownload /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-full h-10  mt-2 flex justify-between items-center">
                                        <div className="w-5/12 h-8 ">
                                            <h1 className='font-inter text-sm ml-3 text-[#6B7280]'>GST Certificate</h1>
                                        </div>
                                        <div className="w-5/12 h-8  flex justify-center ">
                                            <div className="w-3/12 h-8 flex justify-between ">
                                                <div className="w-5 h-5 bg-[#5B297E] mt-2 flex justify-center items-center text-white rounded-sm shadow mr-2 md:mr-0"><TbEyeFilled /></div>
                                                <div className="w-5 h-5 bg-[#5B297E] mt-2 flex justify-center items-center text-white rounded-sm shadow"><GoDownload /></div>
                                            </div>

                                        </div>
                                    </div>



                                </div>

                            </div>
                            <div className="w-6/12 h-full bg-yellow-5600">
                                <div className="w-full h-20  flex justify-end items-center">
                                    <button className='flex justify-center items-center font-inter text-white bg-[#5B297E] w-20 h-8 rounded-sm mr-6'><span className='mr-2'><IoPencilSharp /></span>Edit</button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default TransporterProfileDetails