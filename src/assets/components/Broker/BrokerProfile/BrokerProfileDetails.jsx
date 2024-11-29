import React from 'react'
import { IoPencilSharp } from "react-icons/io5";
import { TbEyeFilled } from "react-icons/tb";
import { GoDownload } from "react-icons/go";
const BrokerProfileDetails = () => {
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
                              <img src="\images\a65c1d620968b90cdb9521e683536cdc.png" className='w-full h-full object-cover rounded-full object-[15%]' alt="" />
                          </div>
                      </div>
                      <div className=" w-5/12 md:w-4/12 h-full  flex justify-center items-center ml-2 md:ml-0">
                          <div className="w-full h-16 ">
                              <div className="w-full h-8 ">
                                  <h1 className='font-inter font-semibold text-base text-black'>John Newman</h1>
                              </div>
                              <div className="font-inter text-base   text-[#6B7280]">
                                  <h1>987654321</h1>
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
                      <h1 className="font-inter font-semibold text-[#5B297E] ml-5 pt-2 ">Basic Details</h1>
                      </div>
                      <div className="w-full h-full ">
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
                              <h1 className='font-inter text-sm ml-3 text-[#6B7280]'>City</h1>
                              </div>
                              <div className="w-5/12 h-8  flex justify-center ">
                              
                              <h1 className='font-inter text-sm ml-3 text-blaci'>Abcd</h1></div>
                          </div>
                          <div className="w-full h-10  mt-2 flex justify-between items-center">
                              <div className="w-full h-8 ">
                              <h1 className='font-inter text-sm ml-3 text-[#6B7280]'>State</h1>
                              </div>
                                <div className="w-full h-10  flex justify-center ">


                                          <div className="relative">
                                              <select className="w-full h-5 ml-2  text-center text-black focus:outline-none appearance-none">
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
                      <div className="w-6/12 h-full bg-yellow-5600">
                        <div className="w-full h-20  flex justify-end items-center"> 
                          <button className='flex justify-center items-center font-inter text-white bg-[#5B297E] w-20 h-8 rounded-sm mr-6'><span className='mr-2'><IoPencilSharp /></span>Edit</button>
                        </div>
                      </div>

                </div>
            </div>
            <div className="w-full h-48 flex justify-center items-center  rounded-sm border border-black mt-7 mb-10">
                <div className="w-full h-full flex">
                      <div className="w-6/12 h-full  ">
                      <div className="w-full h-10 ">
                      <h1 className="font-inter font-semibold text-[#5B297E] ml-5 pt-2 ">Documents</h1>
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
                              <h1 className='font-inter text-sm ml-3 text-[#6B7280]'>Aadhar Card</h1>
                              </div>
                              <div className="w-5/12 h-8  flex justify-center ">
                              <div className="w-4/12 h-8  flex  justify-between ">
                              <div className="w-5 h-5 bg-[#5B297E] mt-2 flex justify-center items-center text-white rounded-sm shadow mr-2 md:mr-0"><TbEyeFilled  /></div>
                              <div className="w-5 h-5 bg-[#5B297E] mt-2 flex justify-center items-center text-white rounded-sm shadow"><GoDownload /></div> 
                              </div>
                              </div>
                          </div>
                          <div className="w-full h-10  mt-2 flex justify-between items-center">
                              <div className="w-5/12 h-8 ">
                              <h1 className='font-inter text-sm ml-3 text-[#6B7280]'>GST Certificate</h1>
                              </div>
                              <div className="w-5/12 h-8  flex justify-center ">
                              <div className="w-4/12 h-8 flex justify-between ">
                                  <div className="w-5 h-5 bg-[#5B297E] mt-2 flex justify-center items-center text-white rounded-sm shadow mr-2 md:mr-0"><TbEyeFilled  /></div>
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

export default BrokerProfileDetails