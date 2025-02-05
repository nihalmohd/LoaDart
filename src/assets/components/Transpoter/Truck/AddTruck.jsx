import React, { useEffect, useRef, useState } from 'react'
import { HiOutlineTruck } from 'react-icons/hi';
import { IoIosSearch } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { LuUpload } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { getCapacity, getTruckTypes } from '../../../../common/common';
import { uploadFileToS3 } from '../../../../../s3Config';
import { useSelector } from 'react-redux';
import { AxiosInstance } from '../../../Api/axios';

const AddTruck = () => {
  const navigate = useNavigate()
  const transporterData = useSelector((state) => state.transporter);
    const [VehicleInsurance, setVehicleInsurance] = useState();
    const [VehicleInsuranceUrl, setVehicleInsuranceUrl] = useState();
    const [RCbook, setRCbook] = useState();
    const [RCbookUrl, setRCbookUrl] = useState();
    const [weight, setWeight] = useState([]);
    const [truckType, setTruckType] = useState([]);
    const [RegisterNum,setRegisterNum] = useState("")
    const [capacity_id, setCapacityId] = useState("");
    const [truck_type_id, setTruckTypeId] = useState("");
    const [Location,setLocation] = useState("")
    const [errors, setErrors] = useState({});
  
    const InsuranceRef = useRef(null);
    const RCbookRef = useRef(null);
  
    const handleProofFileChange = async (event) => {
       setVehicleInsurance(event.target.files[0])
      const InsureURL =await uploadFileToS3(event.target.files[0],event.target.files[0].name)
      setVehicleInsuranceUrl(InsureURL);
    };
  
    const handleReceiptFileChange = async(event) => {
      setRCbook(event.target.files[0])
      const RcBookURL =await uploadFileToS3(event.target.files[0],event.target.files[0].name)
      setRCbookUrl(RcBookURL);
    };
  
    const handleProofUploadClick = () => {
      if (InsuranceRef.current) {
        InsuranceRef.current.click();
      }
    };
  
    const handleReceiptUploadClick = () => {
      if (RCbookRef.current) {
        RCbookRef.current.click();
      }
    };

    const validateForm = () => {
      let errors = {};
      if (!RegisterNum) errors.RegisterNum = "Register number is required";
      if (!truck_type_id) errors.truck_type_id = "Truck type is required";
      if (!capacity_id) errors.capacity_id = "Weight capacity is required";
      // if (!Location) errors.Location = "Location is required";
      if (!VehicleInsurance) errors.VehicleInsurance = "Vehicle insurance is required";
      if (!RCbook) errors.RCbook = "RC Book is required";

      setErrors(errors);
      return Object.keys(errors).length === 0;
  };
  
  
  const handleSubmit = async () => {
      console.log("hello");
      
    if (!validateForm()) return;

    const formData = {
        regNumber: RegisterNum,
        trucks_type_id: truck_type_id,
        capacity_id: capacity_id,
        insurance: VehicleInsuranceUrl,
        rc: RCbookUrl, 
        user_id:transporterData.users_id,
        location: Location
    };
   console.log(formData);
   
    try {
        const response = await AxiosInstance.post('/Transpoter/insertTruck', formData);
        console.log(response);
        if(response.status === 201){
          alert("Truck added successfully!");
          navigate('/Transpoter/YourTruck');
        }     
    } catch (error) {
        console.error("Error submitting data:", error);
        alert("Failed to add truck.");
    }
};


      useEffect(()=>{
            fetchData();
          },[])
      
          const fetchData = async () => {
            try {
              const truckTypeData = await getTruckTypes();
              setTruckType(truckTypeData);
      
              const weightData = await getCapacity();
              setWeight(weightData);
            } catch (error) {
              console.error("Error fetching data:", error.message);
            }
          };
     
  return (
    <div className='w-full '>
       <div className="w-11/12 h-full ">
        <div className="w-full  h-16 p-3 ">
          <div className="w-full h-10 flex justify-between items-end ml-4">
            <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">Add Truck</h1>
            <button className="w-28 h-6 bg-[#5B297E] flex justify-center items-center gap-1 rounded-sm text-white text-xs mb-2" onClick={()=>{navigate('/Transpoter/YourTruck')}}><HiOutlineTruck className='font-semibold text-base'/>Your Trucks</button>
          </div>
        </div>
      <div className="w-full h-auto  pl-8 md:p-2 mb-10">
        <div className="w-full h-full  border border-black rounded-sm">
        <div className="w-full  p-4 space-y-4 ">
        <div className="md:w-8/12 h-28 ">

          <div className=" flex flex-col">
            <label className="text-xs font-medium text-gray-400 mb-1">Resgister Number<span className='text-red-600'>*</span></label>
            <input
              type="text"
              onChange={(e)=>{setRegisterNum(e.target.value)}}
              placeholder="eg:-KL00A1122"
              className="w-full h-10 border-b border-gray-300 outline-none placeholder:text-black"
            />
            {errors.RegisterNum && <p className="text-red-500 text-xs">{errors.RegisterNum}</p>}
          </div>

         
          <div className="flex flex-col relative mt-2">
            <label className="text-xs font-medium text-gray-400 mb-2">
              Preferred Truck Types<span className="text-red-600">*</span>
            </label>
            <div className="relative">
            <select onChange={(e)=>setTruckTypeId(e.target.value)} className="w-full h-10 border-b border-gray-300 text-black focus:outline-none appearance-none">
                <option value="">Select a truck type</option>
                {truckType&&truckType.length>0?(<>
                {
                  truckType.map((item,index)=>( <option key={item.truck_types_id} value={item.truck_types_id}>{item.truck_types_name}</option>))
                }
              </>):(<>no data founed</>)}
              </select>
              {errors.truck_type_id && <p className="text-red-500 text-xs">{errors.truck_type_id}</p>}
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="md:w-8/12 h-32  ">

        

          <div className="flex flex-col">
            <label className="text-xs font-medium text-gray-400 mb-2 mt-3">
              Weight<span className="text-red-600">*</span>
            </label>
            <select onChange={(e)=>setCapacityId(e.target.value)} className="w-full h-10 border-b border-gray-300   text-black focus:outline-none">
              <option value="">Select weight capacity</option>

              {weight&&weight.length>0?(<>
                {
                  weight.map((item,index)=>( <option key={item.truck_capacities_id} value={item.truck_capacities_id}>{item.truck_capacities_name}</option>))
                }
              </>):(<>no data founed</>)}
            </select>
            {errors.capacity_id && <p className="text-red-500 text-xs">{errors.capacity_id}</p>}
          </div> 
          <label
            htmlFor="proof-of-delivery"
            className="block text-gray-400 text-xs font-medium ml-1 mb-2 mt-3"
          >
            Vehicle Insurance<span className="text-red-500">*</span>
          </label>

          <div className="flex md:w-full items-center justify-end border-b border-gray-300 mb-4">
            <input
              type="file"
              id="proof-of-delivery"
              ref={InsuranceRef}
              onChange={handleProofFileChange}
              className="hidden"
            />
            
            <input
              type="text"
              value={VehicleInsurance ? VehicleInsurance.name : ""}
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
            {errors.VehicleInsurance && <p className="text-red-500 text-xs">{errors.VehicleInsurance}</p>} 
        </div>


        <div className="w-full h-20 pt-2 ">
        <label
            htmlFor="lorry-receipt"
            className="block text-gray-400 text-xs font-medium ml-1 mb-2 mt-3"
          >
            RC Book<span className="text-red-500">*</span>
          </label>

          <div className="flex md:w-8/12 items-center justify-end border-b border-gray-300 mb-4">
            <input
              type="file"
              id="lorry-receipt"
              ref={RCbookRef}
              onChange={handleReceiptFileChange}
              className="hidden"
            />
            <input
              type="text"
              value={RCbook ? RCbook.name : ""}
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
          {errors.RCbook && <p className="text-red-500 text-xs">{errors.RCbook}</p>}
          
        </div>
        <div className=" flex flex-col">
                            <label className="text-xs font-medium text-gray-400 mb-2">
                                Prefered Location<span className="text-red-600">*</span>
                            </label>
                            <select onChange={(e)=>{setLocation(e.target.value)}} className="md:w-8/12  h-10 border-b border-gray-300   text-black focus:outline-none">
                            <option value="Baksa">Select Location</option>
                                <option value="Baksa">Baksa</option>
                                <option value="Barpeta">Barpeta</option>
                                <option value="Biswanath">Biswanath</option>
                                <option value="Bongaigaon">Bongaigaon</option>
                                <option value="Cachar">Cachar</option>
                                <option value="Charaideo">Charaideo</option>
                                <option value="Chirang">Chirang</option>
                                <option value="Darrang">Darrang</option>
                                <option value="Dhemaji">Dhemaji</option>
                                <option value="Dhubri">Dhubri</option>
                                <option value="Dibrugarh">Dibrugarh</option>
                                <option value="Goalpara">Goalpara</option>
                                <option value="Golaghat">Golaghat</option>
                                <option value="Hailakandi">Hailakandi</option>
                                <option value="Hojai">Hojai</option>
                                <option value="Jorhat">Jorhat</option>
                                <option value="Kamrup">Kamrup</option>
                                <option value="Kamrup Metropolitan">Kamrup Metropolitan</option>
                                <option value="Karbi Anglong">Karbi Anglong</option>
                                <option value="Karimganj">Karimganj</option>
                                <option value="Kokrajhar">Kokrajhar</option>
                                <option value="Lakhimpur">Lakhimpur</option>
                                <option value="Majuli">Majuli</option>
                                <option value="Morigaon">Morigaon</option>
                                <option value="Nagaon">Nagaon</option>
                                <option value="Nalbari">Nalbari</option>
                                <option value="Sivasagar">Sivasagar</option>
                                <option value="Sonitpur">Sonitpur</option>
                                <option value="South Salmara-Mankachar">South Salmara-Mankachar</option>
                                <option value="Tinsukia">Tinsukia</option>
                                <option value="Udalguri">Udalguri</option>
                                <option value="West Karbi Anglong">West Karbi Anglong</option>
                            </select>
                        </div>
          {errors.Location && <p className="text-red-500 text-xs">{errors.Location}</p>}


          <button onClick={()=>{handleSubmit()}} className=' w-4/12 md:w-2/12  h-10 mt-3 md:mt-0  border border-[#5B297E] text-white bg-[#5B297E] rounded-sm font-inter flex justify-center items-center text-sm   shadow-md'>Proceed</button>

      </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default AddTruck