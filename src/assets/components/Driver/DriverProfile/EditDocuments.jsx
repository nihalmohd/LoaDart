import React, { useRef, useState } from 'react'
import { HiOutlineTruck } from 'react-icons/hi';
import { IoIosSearch } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { LuUpload } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { uploadFileToS3 } from '../../../../../s3Config';
import { AxiosInstance } from '../../../Api/axios';
import { useSelector } from 'react-redux';


const EditDocuments = () => {
    const [Lisence, setLisence] = useState(null);
    const [Insurance, setInsurance] = useState(null);
        const [LisenceUrl,setLisenceUrl] = useState("")
        const [InsuranceUrl,setInsuranceUrl] = useState("")
    
        const transporterData = useSelector((state) => state.transporter);
    

    const BussinessRegistrationRef = useRef(null);
    const InsuranceRef = useRef(null);

    const handleProofFileChange = (event) => {
        setLisence(event.target.files[0]);
    };

    const handleReceiptFileChange = (event) => {
        setInsurance(event.target.files[0]);
    };

    const handleProofUploadClick = () => {
        if (BussinessRegistrationRef.current) {
            BussinessRegistrationRef.current.click();
        }
    };

    const handleReceiptUploadClick = () => {
        if (InsuranceRef.current) {
            InsuranceRef.current.click();
        }
    };


    const handleSubmit =async (event) => {
        event.preventDefault();

        if (!Lisence || !Insurance) {
            alert("Please select files for both Proof of Delivery and Lorry Receipt before submitting!");
            return;
        }

        console.log("Proof of Delivery File:", Lisence.name);
        console.log("Lorry Receipt File:", Insurance.name);
      try {
                // Upload files to S3
                const Lisenceurl = await uploadFileToS3(Lisence, Lisence.name);
                const Insuranceurl = await uploadFileToS3(Insurance, Insurance.name);
        
                // Store uploaded URLs in state
                setLisenceUrl(Lisenceurl);
                setInsuranceUrl(Insuranceurl);
        
                // Prepare payload for backend API
                const payload = {
                    drivers_id: transporterData.drivers_id,
                    drivers_doc: [
                        { name: "Business Registration", type_id: 20, image: LisenceUrl },
                        { name: "GST Certificate", type_id: 22, image: InsuranceUrl }
                    ]
                };
        
                // Send data to backend API
                const response = await AxiosInstance.post('/Driver/InsertDriverDocs', payload,);
        
                console.log('Documents saved successfully:', response.data);
                alert('Documents uploaded and saved successfully!');
                navigate("/Driver/Profile")
        
            } catch (error) {
                console.error('Upload failed:', error);
                alert('Failed to upload documents. Please try again.');
            }
        };
    const navigate = useNavigate()
    return (
        <div className='w-full '>
            <div className="w-11/12 h-full ">
                <div className="w-full  h-16 p-3 ">
                    <div className="w-full h-10 flex justify-between items-end ">
                        <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">Upload Documents</h1>
                    </div>
                </div>
                <div className="w-full h-auto  pl-8 md:p-2 mb-10">
                    <div className="w-full h-full  border border-black rounded-sm">
                        <div className="w-full  p-4 space-y-4 ">
                            <div className="md:w-8/12 h-22 ">
                                <label
                                    htmlFor="proof-of-delivery"
                                    className="block text-gray-400 text-xs font-medium ml-1 mb-2 mt-3"
                                >
                                    Lisence<span className="text-red-500">*</span>
                                </label>

                                <div className="flex md:w-full items-center justify-end border-b border-gray-300 mb-4">
                                    <input
                                        type="file"
                                        id="proof-of-delivery"
                                        ref={BussinessRegistrationRef}
                                        onChange={handleProofFileChange}
                                        className="hidden"
                                    />
                                    <input
                                        type="text"
                                        value={Lisence ? Lisence.name : ""}
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


                            </div>

                            <div className="w-full h-20 pt-2 ">
                                <label
                                    htmlFor="lorry-receipt"
                                    className="block text-gray-400 text-xs font-medium ml-1 mb-2 mt-3"
                                >
                                    Insurance<span className="text-red-500">*</span>
                                </label>

                                <div className="flex md:w-8/12 items-center justify-end border-b border-gray-300 mb-4">
                                    <input
                                        type="file"
                                        id="lorry-receipt"
                                        ref={InsuranceRef}
                                        onChange={handleReceiptFileChange}
                                        className="hidden"
                                    />
                                    <input
                                        type="text"
                                        value={Insurance ? Insurance.name : ""}
                                        readOnly
                                        placeholder="No file chosen"
                                        className="flex-1 text-sm rounded-md p-1 focus:outline-none"
                                    />
                                    <button
                                        type="button"
                                        className="w-14 h-5 border border-[#5b297e] text-[#5b297e] rounded-sm text-[10px] font-medium mb-2"
                                        onClick={handleReceiptUploadClick}
                                    >
                                        <h1 className="flex justify-center items-center gap-2">
                                            Upload<span className=""><LuUpload /></span>
                                        </h1>
                                    </button>
                                </div>

                            </div>
                            <button onClick={handleSubmit} className=' w-4/12 md:w-2/12  h-10 mt-3 md:mt-0  border border-[#5B297E] text-white bg-[#5B297E] rounded-sm font-inter flex justify-center items-center text-sm   shadow-md'>Proceed</button>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default EditDocuments