import React from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { AiOutlineFacebook } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";




const Footer = () => {
  return (
    
    <footer
      className="bg-black text-white p-5 lg:p-10 flex flex-wrap justify-center items-center text-sm"
    >

        <div className="w-11/12 h-full  flex flex-wrap justify-between items-center">
  
              <div className="flex-1 min-w-[200px] space-y-3 mb-5 md:ml-10">
                  <h2 className="font-bold text-lg">LeoDart</h2>
                  <p>Global Trade Service</p>
                  <p>GSTIN: 123QWRE56789</p>
                  <p className="flex"><span className="text-white mt-1 mr-1"><FaPhoneAlt /></span> +91 987654321</p>
                  <p className="flex"><span className="text-white mt-1 mr-1 text-lg"><CiMail /></span> contact@leodart.com</p>
              </div>

     
              <div className="flex-1 min-w-[200px] lg:mb-5 md:ml-32">
                  <ul className="list-none p-0 space-y-2">
                      <li>About</li>
                      <li>Marketplace</li>
                      <li>FAQ</li>
                      <li>
                          <p>Follow Us</p>
                          <div className="flex  space-x-3 md:space-x-8 my-3">

                              <span className=" w-6 h-6 inline-block text-2xl"><AiOutlineFacebook /></span>
                              <span className=" w-6 h-6 inline-block text-2xl"><AiOutlineInstagram /></span>
                              <span className=" w-6 h-6 inline-block text-2xl"><CiLinkedin /></span>
                              <span className=" w-6 h-6 inline-block text-2xl"><CiTwitter /></span>
                          </div>

                      </li>
                  </ul>
              </div>

     
              <div className="flex-1   min-w-[200px] lg:mb-5 md:ml-32 ">

                  <p>Download On</p>
                  <div className=" lg:w-40 lg:h-40  mt-2 flex lg:flex-col ">

                      <span className="w-36 h-12 inline-block">
                          <img src="\images\Screenshot 2024-11-01 115313.png" alt="" className="w-full h-full object-cover" />
                      </span>
                      <span className=" w-36 h-12 inline-block">
                          <img src="\images\Screenshot 2024-11-01 115358.png" alt="" className="w-full h-full object-cover" />

                      </span>
                  </div>
              </div>

          </div>
      

      {/* Bottom Section */}
      <div className="w-full border-t border-gray-700 pt-5 flex justify-between items-center mt-5 text-xs md:mr-16 md:ml-20">
        <p>© 2024 LeoDart. All Rights Reserved.</p>
        <div className="flex space-x-2">
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
