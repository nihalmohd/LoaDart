import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Driver = () => {
  const [IsProceeded,setIsproceeded]=useState(false)
  const [Mobilenumber,setMobileNumber] = useState()
  const navigate = useNavigate()
  const [otp, setOtp] = useState(new Array(4).fill(""));


  const handleChange = (element, index) => {
      const value = element.value.replace(/[^0-9]/g, ''); 
      if (value.length > 1) return;

      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (value && element.nextSibling) {
          element.nextSibling.focus();
      }
  };
  return (
    <div>
        <div className="md:w-[520px] md:h-[320px] bg-white rounded-md md:flex relative z-50 overflow-hidden">
        <div className="w-[272px] h-full rounded-s-md overflow-y-hidden">
        <img 
      src="/images/6adda6a4f6b86bb8d24399cd0782e7b7.png" 
      className="w-full h-full object-cover  ]" 
      alt="Driver" 
    />
        </div>

        <div className='w-[259px] h-[320px]  rounded-e-lg'>
          {
             IsProceeded?(<>
             <div className="w-44 h-10 flex items-end ml-4">
             <h1 className='font-inter text-[13px] text-[#5B297E] font font-semibold  '>Verify OTP send to</h1>
            </div>
            <div className="w-1/3 h-4  ml-4 border-b border-[#5B297E] ">
              <h2 className='font-inter text-[10px] text-[#5B297E] font font-semibold '>+91{Mobilenumber}</h2>
            </div>

            <div className="w-full h-36  flex-col justify-center items-center mt-8">


                
                  <div className="w-full h-24  flex justify-center items-end">
                  <div className="flex space-x-2 justify-center items-center ">
                  {otp.map((digit, index) => (
                    <input
                    key={index}
                    type="text"
                    maxLength="1"
                    value={digit}
                    onChange={(e) => handleChange(e.target, index)}
                    className="w-12 h-12 text-center border border-black  rounded focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                    />
                    
                  ))}
                </div>
                  </div>
                  <div className="w-full h-7  flex justify-center">
                   <button className='w-11/12 h-7 bg-[#5B297E] mt-4 text-white text-xs font-inter rounded-sm'onClick={()=>{navigate('/Driver/UpdateProfile')}} >Proceed</button>
                  </div>
            </div>
            <div className="w-full h-20  flex justify-center items-center">

              <h2 className='font-inter text-[10px] text-[#5B297E] font font-semibold '>Resend OTP in 00:30</h2>
              
            </div>
             
             </>)
             :
             (<>
             
          <div className="w-full h-14  flex justify-start items-end">
            <div className="w-44 h-10  border-b-2 border-[#5B297E]  flex items-end ml-4">
             <h1 className='font-inter text-[13px] '>Sign In As <span className='font-semibold text-[purple]'>Driver</span></h1>
            </div>
          </div>
          
          <div className="w-full md:h-36 flex justify-center items-center ">
              <div className="w-full h-16 flex justify-center items-center ml-2">
                <div className="w-full h-5 bg-gray ml-3 ">
                  <h1 className='text-[10px] font-inter text-[#6B7280] '>Mobile Number <span className='text-red-400'>*</span></h1>
                  <div className="w-full h-14  ">
                   <div className='w-11/12 h-8  border-b border-[#D9D9D9] text-base'>
                  <input type=" number" className='border-white focus:outline-none active:outline-none' onChange={(e)=>{setMobileNumber(e.target.value)}} />
                   </div>
                  <button className='w-11/12 h-7 bg-[#5B297E] mt-4 text-white text-xs font-inter rounded-sm'onClick={()=>{setIsproceeded(!IsProceeded)}}>Proceed</button>
                  </div>
                </div>
              </div>
          </div>
           
          <div className="w-full h-20  mt-4 flex justify-center items-end ">
            <h1 className='text-[11px] font-inter text-[#6B7280] text-center'>By continuing, I accept TCP - LoaDart’s <span className='underline'>Terms and Conditions </span>&<span className='underline'>Privacy Policy’</span> </h1>
          </div>
             
             </>)
          }
        </div>
      </div>
    </div>
  )
}

export default Driver