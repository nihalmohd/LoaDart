import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { clearAllData, setTransporterData } from '../../../Redux/Slice/TranporterSlice';
import axios from 'axios';

const BrokerProfile = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();
  const { mobileNumber } = useParams();
  const location = useLocation();

  const transporterData = useSelector((state) => state.transporter);
  const { company, brokers_name, brokers_email, brokers_phone } = location.state || {};
   const [errors, setErrors] = useState({});

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

     const [formData, setFormData] = useState({
        name: brokers_name || "",
        companyName: company || "",
        email: brokers_email || "",
        landPhone: brokers_phone || "",
      });

      const namePattern = /^[A-Z][a-zA-Z ]{0,14}$/;
      const companyNamePattern = /^[A-Z][a-zA-Z. ]*$/;
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const phonePattern = /^[0-9]{6,15}$/;
      
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      
        setErrors((prev) => {
          const newErrors = { ...prev };
      
          // Name is the only required field
          if (name === "name") {
            if (!value) {
              newErrors.name = "Field is required";
            } else if (!namePattern.test(value)) {
              newErrors.name = "Must start with an uppercase letter and be up to 15 characters";
            } else {
              delete newErrors.name;
            }
          }
      
          // Other fields are optional but must match regex if entered
          if (name === "companyName" && value && !companyNamePattern.test(value)) {
            newErrors.companyName = "Must start with an uppercase letter and be up to 10 characters";
          } else if (name === "companyName") {
            delete newErrors.companyName;
          }
      
          if (name === "email" && value && !emailPattern.test(value)) {
            newErrors.email = "Invalid email format";
          } else if (name === "email") {
            delete newErrors.email;
          }
      
          if (name === "landPhone" && value && !phonePattern.test(value)) {
            newErrors.landPhone = "Invalid phone number";
          } else if (name === "landPhone") {
            delete newErrors.landPhone;
          }
      
          return newErrors;
        });
      };
      
      const handleSubmit = async () => {
        const newErrors = {};
      
        // Name is mandatory
        if (!formData.name) {
          newErrors.name = "Field is required";
        } else if (!namePattern.test(formData.name)) {
          newErrors.name = "Must start with an uppercase letter and be up to 15 characters";
        }
      
        // Other fields are optional but must match regex if filled
        if (formData.companyName && !companyNamePattern.test(formData.companyName)) {
          newErrors.companyName = "Must start with an uppercase letter and be up to 10 characters";
        }
      
        if (formData.email && !emailPattern.test(formData.email)) {
          newErrors.email = "Invalid email format";
        }
      
        if (formData.landPhone && !phonePattern.test(formData.landPhone)) {
          newErrors.landPhone = "Invalid phone number";
        }
      
        setErrors(newErrors);
      
        if (Object.keys(newErrors).length === 0) {
          try {
            const User = await axios.post(
              `${import.meta.env.VITE_BASE_URL}/Broker/Register`, // ✅ Changed URL
              {
                brokers_mob: mobileNumber,
                brokers_name: formData.name,
                company: formData.companyName,
                brokers_email: formData.email,
                brokers_phone: formData.landPhone,
              }
            );
      
            if (User.data) {
              console.log(User.data, "is logging the User.data");
              console.log(User.data.data, "is logging User.data.data");
      
              alert("Registration complete: " + User.data.message);
              dispatch(clearAllData())
              dispatch(
                setTransporterData({
                  brokers_id: User.data.data.brokers_id,
                  brokers_name: User.data.data.brokers_name,
                  company: User.data.data.company,
                  brokers_email: User.data.data.brokers_email,
                  brokers_phone: User.data.data.brokers_phone,
                  users_id: User.data.User.users_id,
                  users_name: User.data.User.users_name,
                  users_mobile: User.data.User.users_mobile,
                  user_types_id: User.data.User.user_types_id,
                })
              );
      
              console.log(User);
              navigate("/Broker"); // ✅ Changed navigation
            }
          } catch (error) {
            console.error("Registration failed:", error);
            alert("someting Please try again.");
          }
        }
      };
      
   

  return (
    <div>
    {/* <div>Transporter profle</div> */}
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

export default BrokerProfile