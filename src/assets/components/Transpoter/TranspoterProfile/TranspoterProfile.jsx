import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const TranspoterProfile = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    email: "",
    landPhone: "",
  });

  const [errors, setErrors] = useState({});

  const namePattern = /^[A-Z][a-zA-Z]{0,9}$/;
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
          name: 'Must start with an uppercase letter and be up to 10 characters',
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

  const handleSubmit = () => {
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

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      navigate('/Transpoter');
    }
  };
  return (
    <div>
      
      <div className="w-full md:h-screen bg-[#000000BF] flex justify-center items-center">

        <div className=" w-full h-full md:w-[550px] md:h-[320px] md:flex rounded-md">
          <div className="md:w-1/2 h-full bg-[#5B297E] flex justify-center items-center rounded-s-md ">
            <div className="md:w-5/6  md:h-36 flex justify-center items-center ">
              <img src="\images\76821fd48380d92216f8bb5fbebfc5c6.gif" className='w-full h-full object-cover' alt="" />
            </div>
          </div>
          <div className="md:w-1/2 md:h-full bg-white rounded-e-md  p-3" >
            <div className="w-full h-full ">
              <div className="w-full h-6  border-b-2 border-[#5B297E]   pl-1 ">
                <h1 className='font-inter text-[15px] font-semibold text-[purple]'>Let’s finish setting up your profile</h1>
              </div>
              <div className="w-full h-64 grid grid-row-4 gap-1 mt-4 p-2">
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