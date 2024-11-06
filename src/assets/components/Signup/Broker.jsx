import React from 'react'

const Broker = () => {
  const [IsProceeded,setIsproceeded]=useState(false)
  const [Mobilenumber,setMobileNumber] = useState()
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
      src="/images/c6d9e0b945affbe94efba26aa6c9fc78.png" 
      className="w-full h-full object-cover  object-[75%]" 
      alt="Broker" 
    />
        </div>

        <div className='w-[259px] h-[240px]  rounded-e-lg'>
          <div className="w-full h-14  flex justify-start items-end">
            <div className="w-44 h-10  border-b-2 border-[#5B297E]  flex items-end ml-4">
             <h1 className='font-inter text-[13px] '>Sign In As <span className='font-semibold text-[purple]'>Broker</span></h1>
            </div>
          </div>
            
          <div className="w-full md:h-36 flex justify-center items-center ">
              <div className="w-full h-16 flex justify-center items-center ml-2">
                <div className="w-full h-5 bg-gray ml-3 ">
                  <h1 className='text-[10px] font-inter text-[#6B7280] '>Mobile Number <span className='text-red-400'>*</span></h1>
                  <div className="w-full h-14  ">
                   <div className='w-11/12 h-8  border-b border-[#D9D9D9] text-base'>
                  <input type=" number" className='border-white focus:outline-none active:outline-none' />
                   </div>
                  <button className='w-11/12 h-7 bg-[#5B297E] mt-4 text-white text-xs font-inter rounded-sm'>Proceed</button>
                  </div>
                </div>
              </div>
          </div>
            
          <div className="w-full h-20  mt-4 flex justify-center items-end ml-2 md:ml-0">
            <h1 className='text-[11px] font-inter text-[#6B7280] text-center'>By continuing, I accept TCP - LoaDart’s <span className='underline'>Terms and Conditions </span>&<span className='underline'>Privacy Policy’</span> </h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Broker