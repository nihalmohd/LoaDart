import React, { useState } from 'react';
import BannerSection from './BannerSection';
import { IoIosArrowDown, IoMdMenu } from "react-icons/io";
import { useTranslation } from 'react-i18next';
import { FaGlobe } from 'react-icons/fa';
import { FiCheck } from 'react-icons/fi';
import { HiOutlineGlobe } from 'react-icons/hi';


const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'hi', name: 'हिन्दी' },
    { code: 'kn', name: 'ಕನ್ನಡ' },
    { code: 'te', name: 'తెలుగు' },
    { code: 'ta', name: 'தமிழ்' },
    { code: 'ml', name: 'മലയാളം' },
    { code: 'bn', name: 'বাংলা' },
  ];

  const toggleDropdown = () => {
    
    setIsDropdownOpen((prev) => !prev);
  };

  const changeLanguage = (lang) => {
    setSelectedLanguage(lang);
    setIsDropdownOpen(false); 
    i18n.changeLanguage(lang);
  };
  return (
    <div>
      {/* Top Navigation */}
      <div className="w-full h-14 shadow-md md:flex justify-center items-center">
        <div className="w-full lg:w-10/12 h-12 flex md:justify-between md:items-center gap-1">
          {/* Logo Section */}
          <div className="w-3/12 h-full flex justify-end items-end">
            <div className="w-[70px] h-[40px] flex justify-end items-end">
              <img
                src="/images/ab6aaab828b7c3f0ef708693166c9def.png"
                className="w-full h-full hidden lg:flex"
                alt="Logo"
              />
            </div>
            <div className="w-72 md:w-80 h-full">
              <div className="w-full h-full flex items-center">
                <h1 className="font-nexa text-[23px] text-[#5B297E] font-semibold">LoaDart</h1>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden w-9/12 h-full lg:flex justify-end items-center ml-3 ">
            <div className="w-10/12 h-6 flex gap-2 justify-end items-center">
              <div className="w-1/12 h-10 flex justify-start items-center">
                <h1 className="text-xs font-inter font-semibold text-black">{ t('About')}</h1>
              </div>
              <div className="w-2/12 h-10 flex justify-center items-center">
                <h1 className="text-xs font-inter font-semibold text-black">{t('Marketplace')}</h1>
              </div>
              <div className="w-1/12 h-10 flex justify-center items-center">
                <h1 className="text-xs font-inter font-semibold text-black">{t('Contact')}</h1>
              </div>
              <div className="w-2/6 h-8 flex">
                <div className="w-1/2 h-full flex justify-center items-center">
                  <img src="/images/Screenshot 2024-10-31 002925.png" className="w-fit h-fit" alt="Icon 1" />
                </div>
                <div className="w-1/2 h-full flex justify-center items-center">
                  <img src="/images/Screenshot 2024-10-31 001830.png" className="w-fit h-fit" alt="Icon 2" />
                </div>
              </div>
              <div className="flex justify-end items-center p-2 relative">
                {/* Globe Icon */}
                
                <HiOutlineGlobe className=" mr-1 text-xl text-balck" />

                {/* Dropdown */}
                <div className="relative">
                  {/* Button to toggle dropdown */}
                  <button
                    onClick={toggleDropdown}
                    className="p-2  cursor-pointer"
                  >
                    {languages.find((lang) => lang.code === selectedLanguage)?.name}
                  </button>

                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 bg-white border rounded shadow-md w-48 z-10">
                      {languages.map((language) => (
                        <div
                          key={language.code}
                          onClick={() => changeLanguage(language.code)}
                          className="flex justify-between items-center p-2 hover:bg-gray-100 cursor-pointer"
                        >
                          <span>{language.name}</span>
                          {selectedLanguage === language.code && (
                            <span className="text-black font-bold">✔</span>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <IoIosArrowDown />
              </div>
              <button className="w-2/12 h-8 bg-[#5B297E] rounded-md shadow-sm">
                <h1 className="text-xs font-semibold font-inter text-white">{t('Sign In')}</h1>
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="w-full h-full lg:hidden flex justify-end items-center">
            <button onClick={toggleMenu} className="w-12 h-12 flex justify-center items-center">
              <h1 className="text-4xl">
                <IoMdMenu />
              </h1>
            </button>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div className="w-full h-full lg:mt-3">
        <BannerSection />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-black bg-opacity-50 transform ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform duration-500 ease-in-out`}
        onClick={toggleMenu}
      >
        <div
          className="absolute top-0 right-0 w-64 h-full bg-white shadow-lg p-5"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-xl font-semibold mb-4">{('Menu')}</h2>
          <ul>
            <li className="mb-3 text-gray-700">{t('About')}</li>
            <li className="mb-3 text-gray-700">{t('Marketplace')}</li>
            <li className="mb-3 text-gray-700">{t('Contact')}</li>
            <li className="mb-3 text-gray-700">{t('Sign In')}</li>
            <li className="mb-3 text-gray-700">
              <div className="w-1/2 h-full flex justify-center items-center">
                <img src="/images/Screenshot 2024-10-31 002925.png" className="w-fit h-fit" alt="Icon 1" />
              </div>
            </li>
            <li className="mb-3 text-gray-700">
              <div className="w-1/2 h-full flex justify-center items-center">
                <img src="/images/Screenshot 2024-10-31 001830.png" className="w-fit h-fit" alt="Icon 2" />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
