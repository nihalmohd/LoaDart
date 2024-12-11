import React, { useRef, useState } from 'react'
import { HiOutlineTruck } from 'react-icons/hi';
import { IoIosSearch } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { LuUpload } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';

const AddTruck = () => {
    const [VehicleInsurance, setVehicleInsurance] = useState(null);
    const [RCbook, setRCbook] = useState(null);
  
    const InsuranceRef = useRef(null);
    const RCbookRef = useRef(null);
  
    const handleProofFileChange = (event) => {
      setVehicleInsurance(event.target.files[0]);
    };
  
    const handleReceiptFileChange = (event) => {
      setRCbook(event.target.files[0]);
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
  
  
    const handleSubmit = (event) => {
      event.preventDefault();
  
      if (!VehicleInsurance || !RCbook) {
        alert("Please select files for both Proof of Delivery and Lorry Receipt before submitting!");
        return;
      }
  
      console.log("Proof of Delivery File:", VehicleInsurance.name);
      console.log("Lorry Receipt File:", RCbook.name);
    };
    const navigate = useNavigate()
  return (
    <div className='w-full '>
       <div className="w-11/12 h-full ">
        <div className="w-full  h-16 p-3 ">
          <div className="w-full h-10 flex justify-between items-end ml-4">
            <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">Add Truck</h1>
            <button className="w-28 h-6 bg-[#5B297E] flex justify-center items-center gap-1 rounded-sm text-white text-xs mb-2" onClick={()=>{navigate('/Driver/Trucks')}}><HiOutlineTruck className='font-semibold text-base'/>Your Trucks</button>
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
              placeholder="KL07AX0000"
              className="w-full h-10 border-b border-gray-300 outline-none placeholder:text-black"
            />
          </div>

         
          <div className="flex flex-col relative mt-2">
            <label className="text-xs font-medium text-gray-400 mb-2">
              Preferred Truck Types<span className="text-red-600">*</span>
            </label>
            <div className="relative">
              <select className="w-full h-10 border-b border-gray-300 text-black focus:outline-none appearance-none">
                <option value="">Select a truck type</option>
                <option value="Canter Jumbo">Canter Jumbo</option>
                <option value="Canters 17feet / 4 Wheel">Canters 17feet / 4 Wheel</option>
                <option value="Canters 17feet / 6 Wheel">Canters 17feet / 6 Wheel</option>
                <option value="Canters 3MT / 4 Wheel">Canters 3MT / 4 Wheel</option>
                <option value="Car Carrier (Close Body)">Car Carrier (Close Body)</option>
                <option value="Car Carrier (Open Body)">Car Carrier (Open Body)</option>
                <option value="Container Close Body 40 Feet">Container Close Body 40 Feet</option>
                <option value="Container Close Body 32 Feet">Container Close Body 32 Feet</option>
                <option value="Container Close Body 20 Feet">Container Close Body 20 Feet</option>
                <option value="Container Trucks">Container Trucks</option>
                <option value="Container Close Body 24 Feet">Container Close Body 24 Feet</option>
                <option value="Flat Bed Trailers 32 Feet">Flat Bed Trailers 32 Feet</option>
                <option value="Flat Bed Trailers 40 Feet">Flat Bed Trailers 40 Feet</option>
                <option value="Hydraulic Trailers">Hydraulic Trailers</option>
                <option value="LCV (Light Commercial Vehicle)">LCV (Light Commercial Vehicle)</option>
                <option value="Low Bed Trailer">Low Bed Trailer</option>
                <option value="Multi Axle Trailer">Multi Axle Trailer</option>
                <option value="Over Dimensional Cargo Truck">Over Dimensional Cargo Truck</option>
                <option value="Pick Up">Pick Up</option>
                <option value="Refrigerated / AC Containers">Refrigerated / AC Containers</option>
                <option value="Scooter Body Trucks">Scooter Body Trucks</option>
                <option value="Semi Low Bed Trailer">Semi Low Bed Trailer</option>
                <option value="Tanker Truck (12 Wheel)">Tanker Truck (12 Wheel)</option>
                <option value="Tanker Truck (14 Wheel)">Tanker Truck (14 Wheel)</option>
                <option value="Tanker Truck 10 Wheel">Tanker Truck 10 Wheel</option>
                <option value="Tanker Truck 6 Wheel">Tanker Truck 6 Wheel</option>
                <option value="Tata 407 2.5MT / 4 Wheel">Tata 407 2.5MT / 4 Wheel</option>
                <option value="Trailer 28MT 18 Wheel">Trailer 28MT 18 Wheel</option>
                <option value="Trailer 4923">Trailer 4923</option>
                <option value="Truck 32MT / 16 wheel">Truck 32MT / 16 wheel</option>
                <option value="Truck 25MT / 14 Wheel">Truck 25MT / 14 Wheel</option>
                <option value="Truck 21MT / 12 wheel">Truck 21MT / 12 wheel</option>
                <option value="Truck 20MT / 12 Wheel">Truck 20MT / 12 Wheel</option>
                <option value="Truck 16MT / 10 Wheel">Truck 16MT / 10 Wheel</option>
                <option value="Truck 15MT / 10 Wheel">Truck 15MT / 10 Wheel</option>
                <option value="Truck 9MT / 6 Wheel">Truck 9MT / 6 Wheel</option>
                <option value="Vehicle/ Car Carrier">Vehicle/ Car Carrier</option>
              </select>
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
            <select className="w-full h-10 border-b border-gray-300   text-black focus:outline-none">
              <option value="">Select weight capacity</option>
              <option value="Above 40 MT">Above 40 MT</option>
              <option value="Above 30 MT">Above 30 MT</option>
              <option value="Upto 28 MT">Upto 28 MT</option>
              <option value="Upto 25 MT">Upto 25 MT</option>
              <option value="Upto 20 MT">Upto 20 MT</option>
              <option value="Upto 17 MT">Upto 17 MT</option>
              <option value="Upto 15 MT">Upto 15 MT</option>
              <option value="Upto 12 MT">Upto 12 MT</option>
              <option value="Upto 9 MT">Upto 9 MT</option>
              <option value="Upto 7 MT">Upto 7 MT</option>
              <option value="Upto 5 MT">Upto 5 MT</option>
              <option value="Upto 3 MT">Upto 3 MT</option>
              <option value="Upto 1 MT">Upto 1 MT</option>
              <option value="Below 1 MT">Below 1 MT</option>

            </select>
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
          
        </div>
        <div className=" flex flex-col">
                            <label className="text-xs font-medium text-gray-400 mb-2">
                                Prefered Location<span className="text-red-600">*</span>
                            </label>
                            <select className="md:w-8/12  h-10 border-b border-gray-300   text-black focus:outline-none">
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

          <button className=' w-4/12 md:w-2/12  h-10 mt-3 md:mt-0  border border-[#5B297E] text-white bg-[#5B297E] rounded-sm font-inter flex justify-center items-center text-sm   shadow-md'>Proceed</button>

      </div>
        </div>
      </div>

      </div>
    </div>
  )
}

export default AddTruck