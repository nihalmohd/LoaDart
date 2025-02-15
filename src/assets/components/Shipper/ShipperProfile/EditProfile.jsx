import React, { useEffect, useState } from 'react'
import { getDistricts, getState } from '../../../../common/common';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AxiosInstance } from '../../../Api/axios';

const EditProfile = () => {

      const navigate = useNavigate()
        const [District, setDistrict] = useState([])
        const [state, setState] = useState([])
        const [stateId, setStateId] = useState("")
        const [DistrictId, setDistrictId] = useState("")
        const [Addressline1,setAddressline1] = useState("")
        const [Addressline2,setAddressline2] = useState("")
        const [GSTIN,setGSTIN] = useState("")
        const [message, setMessage] = useState("");

        useEffect(() => {
                fetchData()
            }, [])
            
            const transporterData = useSelector((state) => state.transporter);
            const fetchData = async () => {
                try {
                    const state = await getState();
                    setState(state);
                } catch (error) {
                    console.error("Error fetching data:", error.message);
                }
            };
        
            const fetchDistrictData = async () => {
                try {
                    const Distric = await getDistricts(stateId);
                    setDistrict(Distric);
                } catch (error) {
                    console.error("Error fetching data:", error.message);
                }
            };
        
            const updateUserDetails = async () => {
                try {
                  const requestBody = {
                    addressline1: Addressline1,
                    addressline2: Addressline2,
                    state_id: parseInt(stateId), // Ensure this is a number
                    district_id: parseInt(DistrictId), // Ensure this is a number
                    transporter_id: transporterData.transporters_id, // Replace this with the actual transporter ID
                    gstin: GSTIN,
                  };
            
                  const response = await AxiosInstance.patch(
                    `${import.meta.env.VITE_BASE_URL}/Shipper/UpdateShipperProfile`,
                    requestBody
                  );
            
                  if (response.status === 200) {
                    setMessage("User details updated successfully!");
                    alert("User details updated successfully!")
                    navigate("/Shipper/Profile")
                  } else {
                    setMessage("Failed to update user details. Please try again.");
                  }
                } catch (error) {
                  console.error("Error updating user details:", error);
                  setMessage("An error occurred while updating user details.");
                }
              };
        
        

    return (
        <div className="w-11/12 h-auto  flex justify-center">
        <div className="w-11/12 h-auto  mt-3 md:pt-2 md:pl-3 p-4   border border-black ">

            <div className="w-full h-10 flex-col items-end">
                <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-3  ">Basic Adderess Details</h1>
            </div>


            <div className="flex flex-col mt-2">
                <label className="text-xs font-medium text-gray-400 ">Address line 1<span className='text-red-600'>*</span></label>
                <input
                onChange={(e) => setAddressline1(e.target.value)}
                    type="text"
                    placeholder="abcd"
                    className="md:w-1/2 h-10 border-b border-gray-300 outline-none placeholder:text-black"
                />
            </div>
            <div className="flex flex-col mt-3">
                <label className="text-xs font-medium text-gray-400 ">Address line 2<span className='text-red-600'>*</span></label>
                <input
                onChange={(e) => setAddressline2(e.target.value)}
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
                        <select onChange={(e) => setStateId(e.target.value)} className="w-full h-10 border-b border-gray-300 text-black focus:outline-none appearance-none">
                            <option value="">Select a state</option>
                            {state && state.length > 0 ? (<>
                                {
                                    state.map((item, index) => (<option key={item.states_id} value={item.states_id}>{item.states_name}</option>))
                                }
                            </>) : (<>no data founed</>)}
                        </select>
                        <div className="absolute inset-y-0 right-0 mt-1  pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:w-1/2  mt-3  ">
                <div className="w-full h-6 ">
                    <h1 className='font-inter text-xs  text-[#6B7280]'>District</h1>
                </div>
                <div className="w-full h-10 border-b border-gray-300 ">


                    <div className="relative">
                        <select
                            onClick={fetchDistrictData}
                            onChange={(e) => setDistrictId(e.target.value)}
                            className="w-full h-10 border-b border-gray-300 text-black focus:outline-none appearance-none"
                        >
                            <option value="">Select a District</option>
                            {Array.isArray(District) && District.length > 0 ? (
                                District.map((item) => (
                                    <option key={item.districts_id} value={item.districts_id}>
                                        {item.districts_name}
                                    </option>
                                ))
                            ) : (
                                <option disabled>No data found</option>
                            )}
                        </select>


                        <div className="absolute inset-y-0 right-0 mt-1  pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="flex flex-col mt-3">
                <label className="text-xs font-medium text-gray-400 ">GSTIN<span className='text-red-600'>*</span></label>
                <input
                onChange={(e) => setGSTIN(e.target.value)}
                    type="text"
                    placeholder="abcd"
                    className="md:w-1/2 h-10 border-b border-gray-300 outline-none placeholder:text-black"
                />
            </div>

            <button onClick={updateUserDetails} className=' w-4/12 md:w-2/12  h-10  md:mt-3  border border-[#5B297E] text-white bg-[#5B297E] rounded-sm font-inter flex justify-center items-center text-sm   shadow-md'>Proceed</button>
        </div>

    </div>
    )
}

export default EditProfile