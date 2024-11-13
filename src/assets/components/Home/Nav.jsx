import React, { useState } from 'react';
import BannerSection from './BannerSection';
import { IoMdMenu } from "react-icons/io";

const Nav = () => {
 
  const [menuOpen, setMenuOpen] = useState(false);

  
  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <div>
      
      <div className="w-full h-14 shadow-md md:flex justify-center items-center">
        <div className="w-full lg:w-10/12 h-12 flex md:justify-between md:items-center gap-1  ">
          
          <div className="w-3/12 h-full flex justify-end items-end">
            <div className="w-[70px] h-[40px] flex justify-end items-end">
              <img src="/images/ab6aaab828b7c3f0ef708693166c9def.png" className="w-full h-full hidden lg:flex" alt="Logo" />
            </div>
            <div className="w-72 md:w-80 h-full">
              <div className="w-full h-full flex items-center">
                <h1 className="font-nexa text-[23px] text-[#5B297E] font-semibold">LoaDart</h1>
              </div>
            </div>
          </div>

         
          <div className="hidden w-9/12 h-full lg:flex justify-end items-center  ml-3 ">
            <div className="w-10/12 h-6 flex gap-2 justify-end  items-center ">
              <div className="w-1/12 h-10 flex justify-start items-center">
                <h1 className="text-xs font-inter font-semibold text-black">About</h1>
              </div>
              <div className="w-2/12 h-10 flex justify-center items-center">
                <h1 className="text-xs font-inter  font-semibold text-black">Marketplace</h1>
              </div>
              <div className="w-1/12 h-10 flex justify-center items-center">
                <h1 className="text-xs font-inter  font-semibold text-black">Contact</h1>
              </div>
              <div className="w-2/6 h-8 flex  ">
                <div className="w-1/2 h-full flex justify-center items-center">
                  <img src="/images/Screenshot 2024-10-31 002925.png" className="w-fit h-fit" alt="Icon 1" />
                </div>
                <div className="w-1/2 h-full flex justify-center items-center">
                  <img src="/images/Screenshot 2024-10-31 001830.png" className="w-fit h-fit" alt="Icon 2" />
                </div>
              </div>
              <button className="w-2/12 h-8 bg-[#5B297E] rounded-md shadow-sm">
                <h1 className="text-xs font-semibold font-inter text-white">Sign In</h1>
              </button>
            </div>
          </div>

         
          <div className="w-full h-full lg:hidden flex justify-end items-center">
            <button onClick={toggleMenu} className="w-12 h-12 flex justify-center items-center">
              <h1 className="text-4xl"><IoMdMenu /></h1>
            </button>
          </div>
        </div>
      </div>

     
      <div className="w-full h-full lg:mt-3">
        <BannerSection />
      </div>

      
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-500 ease-in-out`}
        onClick={toggleMenu}
      >
        <div
          className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-5"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <ul>
            <li className="mb-3 text-gray-700">About</li>
            <li className="mb-3 text-gray-700">Marketplace</li>
            <li className="mb-3 text-gray-700">Contact</li>
            <li className="mb-3 text-gray-700">Sign In</li>
            <li className="mb-3 text-gray-700"><div className="w-1/2 h-full flex justify-center items-center">
              <img src="/images/Screenshot 2024-10-31 002925.png" className="w-fit h-fit" alt="Icon 1" />
            </div></li>
            <li className="mb-3 text-gray-700"><div className="w-1/2 h-full flex justify-center items-center">
              <img src="/images/Screenshot 2024-10-31 001830.png" className="w-fit h-fit" alt="Icon 2" />
            </div></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
