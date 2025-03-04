import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Broker = () => {
  const [IsProceeded, setIsproceeded] = useState(false)
  const [Mobilenumber, setMobileNumber] = useState()
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const [error, setError] = useState('');
  const navigate = useNavigate()

  const transporterData = useSelector((state) => state.transporter);

   useEffect(() => {
        if (
          transporterData.brokers_id &&
          transporterData.brokers_name &&
          transporterData.company &&
          transporterData.brokers_email &&
          transporterData.brokers_phone &&
          transporterData.users_id &&
          transporterData.users_name &&
          transporterData.users_mobile &&
          transporterData.user_types_id
        ) {
          navigate('/Broker'); 
        }
      }, [transporterData, navigate]);

  const handleSubmit = async () => {
    setError('');

    if (!/^\d{10}$/.test(Mobilenumber)) {
      setError('Please enter a valid 10-digit mobile number.');
      return;
    }

    try {
      const sendOTP = await axios.post(`${import.meta.env.VITE_BASE_URL}/Broker/send-otp`, { transporters_mob: Mobilenumber });
      console.log("OTP sent successfully:", sendOTP.data);
      if (sendOTP.data) {
        setIsproceeded(!IsProceeded);
      }
    } catch (error) {

      console.error("Error sending OTP:", error);
      setError("Failed to send OTP. Please try again.", error);
    }
  };
  const hanndleChangeMobilen = (e) => {
    setMobileNumber(e.target.value);
    setError("");
  };

//OTP SECTION//
const handleChange = (element, index) => {
  const value = element.value.replace(/[^0-9]/g, '');
  setError("")
  if (value.length > 1) return;

  const newOtp = [...otp];
  newOtp[index] = value;
  setOtp(newOtp);

  if (value && element.nextSibling) {
      element.nextSibling.focus();
  }
};

const handleProceed = async () => {
  if (otp.some((digit) => digit === "")) {
    setError("All fields are required.");
    return;
  }

  const enteredOTP = otp.join("");
  console.log(enteredOTP, "this is entered otp");

  try {
    const receivedOTP = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/Broker/Verify-otp`,
      { brokers_mob: Mobilenumber, otp: enteredOTP }
    );
    console.log(receivedOTP);

    if (!receivedOTP.data.data) {
     
      navigate(`/Broker/UpdateProfile/${Mobilenumber}`)
    } else {
      console.log(receivedOTP.data.data);

       
      const { company, brokers_name, brokers_email, brokers_phone } = receivedOTP.data.data;

      setError("");

      
      navigate(`/Broker/UpdateProfile/${Mobilenumber}`, {
        state: { company, brokers_name, brokers_email, brokers_phone },
      });
      // setError("OTP does not match. Please try again.");
    }
  } catch (error) {
    console.error("Error Verify OTP:", error);
    setError("Failed to Verify OTP. Please try again.", error);
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

        <div className='w-[259px] h-[320px]  rounded-e-lg'>
          {
            IsProceeded ? (<>
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
                        type="number"
                        maxLength="1"
                        value={digit}
                        onChange={(e) => handleChange(e.target, index)}
                        className="w-12 h-12 text-center border border-black  rounded focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
                      />

                    ))}
                  </div>
                </div>
                {error && (
                <div className="w-full text-center text-red-500 text-xs mt-2">{error}</div>
                )}
               <div className="w-full h-7 flex justify-center">
                    <button
                    className="w-11/12 h-7 bg-[#5B297E] mt-4 text-white text-xs font-inter rounded-sm"
                    onClick={handleProceed}
                    >
                     Proceed
                    </button>
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
                    <h1 className='font-inter text-[13px] '>Sign In As <span className='font-semibold text-[purple]'>Broker</span></h1>
                  </div>
                </div>

                <div className="w-full md:h-36 flex justify-center items-center ">
                  <div className="w-full h-16 flex justify-center items-center ml-2">
                    <div className="w-full h-5 bg-gray ml-3 ">
                      <h1 className='text-[10px] font-inter text-[#6B7280] '>Mobile Number <span className='text-red-400'>*</span></h1>
                      <div className="w-full h-14  ">
                        <div className='w-11/12 h-8  border-b border-[#D9D9D9] text-base'>
                          <input type="number" className='border-white focus:outline-none active:outline-none' onChange={(e) => { hanndleChangeMobilen(e) }} />
                        </div>
                        {error && (
                          <p className="text-xs text-red-500 mt-2">
                            {error}
                          </p>
                        )}
                        <button
                          className="w-11/12 h-7 bg-[#5B297E] mt-4 text-white text-xs font-inter rounded-sm"
                          onClick={handleSubmit}
                        >
                          Proceed
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full h-20  mt-4 flex justify-center items-end ml-2 md:ml-0">
                  <h1 className='text-[11px] font-inter text-[#6B7280] text-center'>By continuing, I accept TCP - LoaDart’s <span className='underline'>Terms and Conditions </span>&<span className='underline'>Privacy Policy’</span> </h1>
                </div>
              </>)
          }
        </div>
      </div>
    </div>
  )
}

export default Broker