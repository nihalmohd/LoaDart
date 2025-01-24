import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { setTransporterData } from '../../../Redux/TransporterSlice/TranporterSlice';


const TranspoterProfile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mobileNumber } = useParams();
  const location = useLocation();

  const transporterData = useSelector((state) => state.transporter);
  const { company, transporters_name, transporters_email, transporters_phone } = location.state || {};

  useEffect(() => {
    if (
      transporterData.transporters_id &&
      transporterData.transporters_name &&
      transporterData.company &&
      transporterData.transporters_email &&
      transporterData.transporters_phone &&
      transporterData.users_id &&
      transporterData.users_name &&
      transporterData.users_mobile &&
      transporterData.user_types_id
    ) {
      navigate('/Transpoter'); 
    }
  }, [transporterData, navigate]);
  
  const [formData, setFormData] = useState({
    name: transporters_name || "",
    companyName: company || "",
    email: transporters_email || "",
    landPhone: transporters_phone || "",
  });


  const [errors, setErrors] = useState({});

  const namePattern = /^[A-Z][a-zA-Z ]{0,14}$/;
  const companyNamePattern = /^[A-Z][a-zA-Z. ]*$/;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phonePattern = /^[0-9]{6,15}$/; 
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Validation logic
    if (name === 'name') {
      if (!value) {
        setErrors((prev) => ({ ...prev, name: 'Field is required' }));
      } else if (!namePattern.test(value)) {
        setErrors((prev) => ({
          ...prev,
          name: 'Must start with an uppercase letter and be up to 15 characters',
        }));
      } else {
        setErrors((prev) => ({ ...prev, name: '' }));
      }
    }

    if (name === 'companyName') {
      if (!value) {
        setErrors((prev) => ({ ...prev, companyName: 'Field is required' }));
      } else if (!companyNamePattern.test(value)) {
        setErrors((prev) => ({
          ...prev,
          companyName: 'Must start with an uppercase letter and have exactly 10 letters',
        }));
      } else {
        setErrors((prev) => ({ ...prev, companyName: '' }));
      }
    }

    if (name === 'email' && value && !emailPattern.test(value)) {
      setErrors((prev) => ({ ...prev, email: 'Invalid email format' }));
    } else if (name === 'email') {
      setErrors((prev) => ({ ...prev, email: '' }));
    }

    if (name === 'landPhone' && value && !phonePattern.test(value)) {
      setErrors((prev) => ({ ...prev, landPhone: 'Invalid phone number' }));
    } else if (name === 'landPhone') {
      setErrors((prev) => ({ ...prev, landPhone: '' }));
    }
  };

  const handleSubmit =async () => {
    const newErrors = {};

 
    if (!formData.name) {
      newErrors.name = 'Field is required';
    } else if (!namePattern.test(formData.name)) {
      newErrors.name =
        'Must start with an uppercase letter and be up to 10 characters';
    }

    if (!formData.companyName) {
      newErrors.companyName = 'Field is required';
    } else if (!companyNamePattern.test(formData.companyName)) {
      newErrors.companyName =
        'Must start with an uppercase letter and have exactly 10 letters';
    }

 
    if (formData.email && !emailPattern.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    if (formData.landPhone && !phonePattern.test(formData.landPhone)) {
      newErrors.landPhone = 'Invalid phone number';
    }

      (newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const User = await axios.post(`${import.meta.env.VITE_BASE_URL}/Transpoter/Register`,
           {
            transporters_mob: mobileNumber,
            transporters_name:formData.name,
            company:formData.companyName,
            transporters_email:formData.email,
            transporters_phone:formData.landPhone
          });
          if (User.data) {
            console.log(User.data,'is loging the User.data');
            console.log(User.data.data,"is user.data.data is loging ");
            
            
            alert("registraion complete",User.data.data.message)
            dispatch(
              setTransporterData({
                transporters_id: User.data.data.transporters_id,
                transporters_name: User.data.data.transporters_name,
                company: User.data.data.company,
                transporters_email: User.data.data.transporters_email,
                transporters_phone: User.data.data.transporters_phone,
                users_id: User.data.User.users_id,
                users_name: User.data.User.users_name,
                users_mobile: User.data.User.users_mobile,
                user_types_id: User.data.User.user_types_id,
              })
            );
            navigate('/Transpoter');
          }
      } catch (error) {
        console.error("Registration failed:", error);
        alert("Failed to send OTP. Please try again.",error);
      }
  
    }
  };
  return (
    <div>
      
      <div className="w-full md:h-screen bg-[#000000BF] flex justify-center items-center">
        <div className=" w-full h-full md:w-[550px] md:h-auto md:flex rounded-md">
          <div className="md:w-1/2 h-auto bg-[#5B297E] flex justify-center items-center rounded-s-md ">
            <div className="md:w-5/6  md:h-full flex justify-center items-center ">
              <img src="\images\76821fd48380d92216f8bb5fbebfc5c6.gif" className='w-full h-full object-cover' alt="" />
            </div>
          </div>
          <div className="md:w-1/2 md:h-auto bg-white rounded-e-md  p-3" >
            <div className="w-full h-full ">
              <div className="w-full h-6  border-b-2 border-[#5B297E]   pl-1 ">
                <h1 className='font-inter text-[15px] font-semibold text-[purple]'>Let’s finish setting up your profile</h1>
              </div>
              <div className="w-full h-auto grid grid-row-4 gap-1 mt-4 p-2">
                <div className="w-full h-full border-b border-[#D9D9D9]">
                  <div className="flex items-center">
                    <h1 className="text-[10px] font-inter text-[#6B7280]">
                      Name <span className="text-red-400">*</span>
                    </h1>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-white focus:outline-none active:outline-none h-full w-full"
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                </div>

                <div className="w-full h-full border-b border-[#D9D9D9]">
                  <div className="flex items-center">
                    <h1 className="text-[10px] font-inter text-[#6B7280]">
                      Company Name <span className="text-red-400">*</span>
                    </h1>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      className="border-white focus:outline-none active:outline-none h-full w-full"
                    />
                    {errors.companyName && (
                      <p className="text-red-500 text-xs mt-1">{errors.companyName}</p>
                    )}
                  </div>
                </div>

                <div className="w-full h-full border-b border-[#D9D9D9]">
                  <div className="flex items-center">
                    <h1 className="text-[10px] font-inter text-[#6B7280]">Email ID</h1>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-white focus:outline-none active:outline-none h-full w-full"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="w-full h-full border-b border-[#D9D9D9]">
                  <div className="flex items-center">
                    <h1 className="text-[10px] font-inter text-[#6B7280]">
                      Land Phone Number
                    </h1>
                  </div>
                  <div>
                    <input
                      type="text"
                      name="landPhone"
                      value={formData.landPhone}
                      onChange={handleChange}
                      className="focus:outline-none active:outline-none h-full w-full"
                    />
                    {errors.landPhone && (
                      <p className="text-red-500 text-xs mt-1">{errors.landPhone}</p>
                    )}
                  </div>
                </div>

                <div className="w-full h-full mt-1">
                  <div className="w-full h-full flex justify-center items-center">
                    <button
                      className="w-full h-7 bg-[#5B297E] text-white text-xs font-inter rounded-sm"
                      onClick={handleSubmit}
                    >
                      Proceed
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TranspoterProfile