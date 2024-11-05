import React, { useState } from 'react'
import VideoSection from './VideoSection'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Transpoter from '../Signup/Transpoter';
import Modal from '../Modal/Modal';

import Driver from '../Signup/Driver';
import Broker from '../Signup/Broker';
import Shipper from '../Signup/Shipper';


const images = [
  '/images/5d6c0fcb34d93c24b296b77ea6b54f8b.png',
  '/images/6adda6a4f6b86bb8d24399cd0782e7b7.png',
  '/images/a82aaeda5d038912a13d81dc0ca3a4a1.png',
  '/images/c6d9e0b945affbe94efba26aa6c9fc78.png',
];

const buttonLabels = [
  'Register as Shipper',
  'Register as Driver',
  'Register as Transpoter',
  'Register as Broker',
];
const BannerSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSignup, setSelectedSignup] = useState(null);


  const openModal = (signupType) => {
    setSelectedSignup(signupType);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedSignup(null);
  };


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "ease-in-out",
    arrows: false,
  };

    return (
     
    <div className="font-sans bg-white   ">
      <Modal isOpen={isModalOpen} closeModal={closeModal}>
        {/* Render the selected sign-up page in the modal */}
        {selectedSignup === 'Shipper' && <Shipper />}
        {selectedSignup === 'Driver' && <Driver />}
        {selectedSignup === 'Transpoter' && <Transpoter />}
        {selectedSignup === 'Broker' && <Broker />}
      </Modal>
        
      <div className="w-full h-72 lg:hidden lg:rounded-md overflow-hidden relative  ">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="h-full relative">
              <img
                src={image}
                alt={`Slide ${index}`}
                className="w-full h-72 object-cover"
              />
              <button
                className="absolute bottom-3 left-10 w-3/4 h-10 bg-[#5B297E] text-white rounded-md shadow-md hover:bg-white hover:text-[#5B297E] font-inter"
                onClick={() => openModal(buttonLabels[index].split(' ')[2])} 
              >
                {buttonLabels[index]}
              </button>
            </div>
          ))}
        </Slider>
      </div>
      <div className="w-full h-52   lg:relative md:flex justify-between mb-1 md:mb-0 ">


        <div className="w-auto h-auto lg:absolute md:ml-12 lg:ml-24 mt-7">
          <div className="w-96 h-36 absolute md:flex justify-center items-center z-20 p-3 text-center  ">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-black">
              Choose Lorries for Your Loads
            </h2>
          </div>
          <div className=" md:w-[550px] h-full flex justify-center pt-9 ml-4">
            <div className="w-3/4 h-52 relative flex flex-col items-center">

              <div className="relative w-full h-full flex justify-center items-center">
                <img
                  src="/images/a8d7829696c1729ec57f623c6f9cab21.png"
                  alt="Truck"
                  className="relative z-10 flex-none"
                />

                <div className="absolute top-1/2 transform -translate-y-1/2 w-full h-10  z-20 flex justify-between ">
                  <div className="w-10 h-10 -rotate-45 ">
                    <img src="\images\0176305016e81dab528e5aef614db030.png" alt="" className='w-full h-full object-cover' />
                  </div>
                  <div className="w-12 h-10">
                    <img src="\images\7c953479cc91139db27b1665540c9e6e.png" alt="" className='w-full h-full object-cover' />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-1/2 h-60 bg-transparent hidden lg:flex "></div>
        <div className="w-1/2 h-80 lg:flex justify-center items-center relative hidden">
          <div className="w-2/4 h-72 rounded-md overflow-hidden relative">
            <Slider {...settings}>
              {images.map((image, index) => (
                <div key={index} className="h-full relative">
                  <img
                    src={image}
                    alt={`Slide ${index}`}
                    className="w-full h-72 object-cover"
                  />
                   <button
                className="absolute bottom-3 left-10 w-3/4 h-10 bg-[#5B297E] text-white rounded-md shadow-md hover:bg-white hover:text-[#5B297E] font-inter"
                onClick={() => openModal(buttonLabels[index].split(' ')[2])} 
              >
                {buttonLabels[index]}
              </button>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
      <div className="w-full md:h-80 bg-[#D2F2FD] p-5  md:p-0">
        <div className="w-full md:h-1/3 lg:h-1/2 md:mt-10 lg:mt-0  flex justify-center items-end  ">
          <h1 className='text-3xl font-inter font-semibold '>Register As</h1>
        </div>
        <div className="w-full md:h-1/2 lg:h-40  flex items-center justify-center md:mt-2 lg:mt-0  ">
          <div className="w-10/12 h-auto  grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="lg:w-6/4 lg:h-16 bg-[#5B297E] lg:flex justify-center items-center rounded-md md:rounded-none shadow-lg md:shadow-none ">
              <div className="w-24  h-20 md:ml-7 lg:ml-0 p-2">
                <img src="\images\5c8ebda60eceeb30e56e59c34a37afb6.png" alt="" className='w-fit h-fit object-cover' />
              </div>
              <div className="w-full h-full mt-2 ">
                <div className="w-full  lg:h-6 ml-1 lg:ml-0 ">
                  <h1 className='font-inter font-semibold md:text-sm lg:text-md text-white'>Transporter</h1>
                </div>
                <div className="w-full h-auto ml-1 lg:ml-0 ">
                  <h1 className='font-inter text-xs text-white'>Register as transporter if you have idle trucks available. </h1>
                </div>
              </div>
            </div>
            <div className="w-6/4 lg:h-16 bg-[#5B297E] lg:flex rounded-md md:rounded-none shadow-lg md:shadow-none ">
              <div className="w-24 h-20 md:ml-7 lg:ml-0 p-2">
                <img src="\images\3b3263d27fa208417968091550d93d98.png" alt="" className='w-fit h-fit object-cover' />
              </div>
              <div className="w-full h-full mt-2 ">
                <div className="w-full lg:h-6 ml-1 lg:ml-0 ">
                  <h1 className='font-inter font-semibold md:text-sm lg:text-md text-white'>Agent/Broker</h1>
                </div>
                <div className="w-full  lg:h-10 ml-1 lg:ml-0 ">
                  <h1 className='font-inter  text-xs text-white'>Register as transporter if you have idle trucks available. </h1>
                </div>
              </div>
            </div>
            <div className="w-6/4 lg:h-16 bg-[#5B297E] lg:flex rounded-md md:rounded-none shadow-lg md:shadow-none ">
              <div className="w-24 h-20 md:ml-7 lg:ml-0 p-2">
                <img src="\images\65ceb99559230cdf0da1520dde5e8224.png" alt="" className='w-fit h-fit object-cover' />
              </div>
              <div className="w-full h-full mt-2 ">
                <div className="w-full lg:h-6 ml-1 lg:ml-0 ">
                  <h1 className='font-inter font-semibold md:text-sm lg:text-md text-white'>Customer/Shipper</h1>
                </div>
                <div className="w-full lg:h-10 ml-1 lg:ml-0 ">
                  <h1 className='font-inter  text-xs text-white'>Register as transporter if you have idle trucks available. </h1>
                </div>
              </div>
            </div>
            <div className="w-6/4 lg:h-16 bg-[#5B297E] lg:flex rounded-md md:rounded-none shadow-lg md:shadow-none ">
              <div className="w-24 h-20 md:ml-7 lg:ml-0 p-2">
                <img src="\images\5501a91ebf31912b64b8e8e809e132d1.png" alt="" className='w-fit h-fit object-cover' />
              </div>
              <div className="w-full h-full mt-2 ">
                <div className="w-full lg:h-6 ml-1 lg:ml-0">
                  <h1 className='font-inter font-semibold md:text-sm lg:text-md text-white'>Driver</h1>
                </div>
                <div className="w-full lg:h-10 ml-1 lg:ml-0 ">
                  <h1 className='font-inter  text-xs text-white'>Register as transporter if you have idle trucks available. </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoSection />

    </div>
  );
}

export default BannerSection