import React, { useRef, useState } from 'react'
import { LuUpload } from 'react-icons/lu';

const EditBasicDetails = () => {
    const [Profile, setProfile] = useState(null);
    const [otp,setOtp]=useState(false)

    const ProfileRef = useRef(null);
    const handleProofFileChange = (event) => {
        setProfile(event.target.files[0]);
    };
    const handleProofUploadClick = () => {
        if (ProfileRef.current) {
            ProfileRef.current.click();
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();

        if (!Profile) {
            alert("Please select files for both Proof of Delivery and Lorry Receipt before submitting!");
            return;
        }

        console.log("Proof of Delivery File:", Profile.name);

    };
    const handleOtp =()=>{
        setOtp(true)
    }
    return (
        <div className="w-11/12 h-auto  flex justify-center">
            <div className="w-11/12 h-auto  mt-3 md:pt-2 md:pl-3 p-4   border border-black ">

                <div className="w-full h-10 flex-col items-end">
                    <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-3  ">Basic Details</h1>
                </div>
                <div className="w-full h-auto  flex justify-start items-start">
                    <div className="flex flex-col items-center  ">
                        <img
                            src="\images\e79560b9ae8865c9906e28d4a695c379.png"
                            alt="Profile"
                            className="w-24 h-24 object-cover object-[20%] rounded-full mb-2"
                        />
                    </div>
                </div>
                <label
                    htmlFor="proof-of-delivery"
                    className="block text-gray-400 text-xs  font-medium  mb-2 mt-3"
                >
                    Profile picture<span className="text-red-500"></span>
                </label>

                <div className="flex md:w-8/12 h-10 items-center justify-end border-b border-gray-300 mb-4">
                    <input
                        type="file"
                        id="proof-of-delivery"
                        ref={ProfileRef}
                        onChange={handleProofFileChange}
                        className="hidden"
                    />
                    <input
                        type="text"
                        value={Profile ? Profile.name : ""}
                        readOnly
                        placeholder="No file chosen"
                        className="flex-1 text-sm rounded-md p-1 focus:outline-none"
                    />
                    <button
                        type="button"
                        className="w-14 h-5 border border-[#5b297e] text-[#5b297e] rounded-sm text-[10px] font-medium mb-2"
                        onClick={handleProofUploadClick}
                    >
                        <h1 className="flex justify-center items-center gap-2">
                            Upload<span className=""><LuUpload /></span>
                        </h1>
                    </button>
                </div>
                <div className="flex flex-col mt-3">
                    <label className="text-xs font-medium text-gray-400 ">Phone number<span className='text-red-600'>*</span></label>
                    
                    <input
                        type="number"
                        placeholder="9876543210"
                        className="md:w-8/12 h-10 border-b border-gray-300 outline-none placeholder:text-black"
                    />
                    <button
                        type="button"
                        className="w-14 h-5 border border-[#5b297e] text-[#5b297e] rounded-sm text-[10px] font-medium mb-2 mt-2"
                        onClick={handleOtp}
                    >
                        <h1 className="flex justify-center items-center gap-2">
                            Sent OTP<span className=""></span>
                        </h1>
                    </button>
                </div>
                <div className={`${!otp?'hidden':"flex"} flex-col mt-3`}>
                    <label className="text-xs font-medium text-gray-400 ">OTP<span className='text-red-600'>*</span></label>
                    <input
                        type="number"
                        placeholder="OTP"
                        className="md:w-8/12 h-10 border-b border-gray-300 outline-none placeholder:text-black"
                    />
                </div>
            <div className="flex flex-col mt-3">
                    <label className="text-xs font-medium text-gray-400 ">Email<span className='text-red-600'></span></label>
                    <input
                        type="text"
                        placeholder="exaple@gmail.com"
                        className="md:w-8/12 h-10 border-b border-gray-300 outline-none placeholder:text-black"
                    />
                </div>
                <button className=' w-4/12 md:w-2/12  h-10 mt-3 md:mt-2  border border-[#5B297E] text-white bg-[#5B297E] rounded-sm font-inter flex justify-center items-center text-sm   shadow-md '>Edit</button>
            </div>
        </div>
    )
}

export default EditBasicDetails