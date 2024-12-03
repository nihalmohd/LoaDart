import React from 'react'

const EditProfile = () => {
    return (
        <div className="w-11/12 h-auto  flex justify-center">
            <div className="w-11/12 h-96  mt-3 md:pt-2 md:pl-3 p-4   border border-black ">

                <div className="w-full h-10 flex-col items-end">
                    <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-3  ">Basic Details</h1>
                </div>

                <div className="flex flex-col mt-2">
                    <label className="text-xs font-medium text-gray-400 ">Address line 1<span className='text-red-600'>*</span></label>
                    <input
                        type="text"
                        placeholder="abcd"
                        className="md:w-1/2 h-10 border-b border-gray-300 outline-none placeholder:text-black"
                    />
                </div>
                <div className="flex flex-col mt-3">
                    <label className="text-xs font-medium text-gray-400 ">Address line 2<span className='text-red-600'>*</span></label>
                    <input
                        type="text"
                        placeholder="abcd"
                        className="md:w-1/2 h-10 border-b border-gray-300 outline-none placeholder:text-black"
                    />
                </div>
                <div className="flex flex-col mt-3">
                    <label className="text-xs font-medium text-gray-400 ">City<span className='text-red-600'>*</span></label>
                    <input
                        type="text"
                        placeholder="abcd"
                        className="md:w-1/2 h-10 border-b border-gray-300 outline-none placeholder:text-black"
                    />
                </div>
                <div className="md:w-1/2  mt-3  ">
                    <div className="w-full h-6 ">
                        <h1 className='font-inter text-xs  text-[#6B7280]'>State</h1>
                    </div>
                    <div className="w-full h-10 border-b border-gray-300 ">


                        <div className="relative">
                            <select className="w-full h-5  text-start  text-black focus:outline-none appearance-none">
                                <option value="" className='mt-1'>Select State</option>
                                <option value="Andhra Pradesh">Andhra Pradesh (AP)</option>
                                <option value="Assam">Assam (AS)</option>
                                <option value="Bihar">Bihar (BR)</option>
                                <option value="Chandigarh">Chandigarh (CH)</option>
                                <option value="Arunachal Pradesh">Arunachal Pradesh (AR)</option>
                                <option value="Andaman and Nicobar">Andaman and Nicobar (AN)</option>
                                <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli (DN)</option>
                                <option value="Daman and Diu">Daman and Diu (DD)</option>
                                <option value="Delhi">Delhi (DL)</option>
                                <option value="Goa">Goa (GA)</option>
                                <option value="Gujarat">Gujarat (GJ)</option>
                                <option value="Haryana">Haryana (HR)</option>
                                <option value="Himachal Pradesh">Himachal Pradesh (HP)</option>
                                <option value="Jammu and Kashmir">Jammu and Kashmir (JK)</option>
                                <option value="Karnataka">Karnataka (KA)</option>
                                <option value="Kerala">Kerala (KL)</option>
                                <option value="Lakshadweep">Lakshadweep (LD)</option>
                                <option value="Madhya Pradesh">Madhya Pradesh (MP)</option>
                                <option value="Maharashtra">Maharashtra (MH)</option>
                                <option value="Manipur">Manipur (MN)</option>
                                <option value="Meghalaya">Meghalaya (ML)</option>
                                <option value="Mizoram">Mizoram (MZ)</option>
                                <option value="Nagaland">Nagaland (NL)</option>
                                <option value="Odisha">Odisha (OR)</option>
                                <option value="Puducherry">Puducherry (PY)</option>
                                <option value="Punjab">Punjab (PN)</option>
                                <option value="Rajasthan">Rajasthan (RJ)</option>
                                <option value="Sikkim">Sikkim (SK)</option>
                                <option value="Tamil Nadu">Tamil Nadu (TN)</option>
                                <option value="Tripura">Tripura (TR)</option>
                                <option value="Uttar Pradesh">Uttar Pradesh (UP)</option>
                                <option value="West Bengal">West Bengal (WB)</option>
                                <option value="Telangana">Telangana (TS)</option>

                            </select>
                            <div className="absolute inset-y-0 right-0 mt-1  pointer-events-none">
                                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default EditProfile