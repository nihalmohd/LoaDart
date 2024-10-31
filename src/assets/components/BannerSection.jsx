import React from 'react'
import VideoSection from './VideoSection'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const images = [
    '/images/5d6c0fcb34d93c24b296b77ea6b54f8b.png',
    '/images/6adda6a4f6b86bb8d24399cd0782e7b7.png',
    '/images/a82aaeda5d038912a13d81dc0ca3a4a1.png',
    '/images/c6d9e0b945affbe94efba26aa6c9fc78.png',
  ];
const BannerSection = () => {

    const settings = {
        
        infinite: true,       // Infinite looping
        speed: 500,           // Transition speed in milliseconds
        slidesToShow: 1,      // Number of slides to show at once
        slidesToScroll: 1,    // Number of slides to scroll at a time
        autoplay: true,       // Enable autoplay
        autoplaySpeed: 2000,  // Time between slides in milliseconds
        cssEase: "ease-in-out",
        arrows: false,  
      };
    return (
      <div className="font-sans bg-white   ">
        <div className="w-full h-52  relative flex justify-between ">
          <div className="w-[500px] h-auto absolute ml-24 mt-7  ">
            <div className="w-[350px] h-36 absolute flex justify-center items-center z-20 ">
              <h2 className="text-5xl font-semibold mb-4 text-black">
                Choose Lorries for Your Loads
              </h2>
            </div>
            <div className="w-[500px] h-full flex justify-center pt-4 pr-10 ">
              <div className="w-3/4 h-52 relative flex flex-col items-center ">
                <img
                  src="\images\a8d7829696c1729ec57f623c6f9cab21.png"
                  alt="Truck"
                  className="relative z-10 flex-none"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 h-60 bg-transparent "></div>
          <div className="w-1/2 h-80  flex justify-center items-center relative">
            <div className="w-2/4 h-72  rounded-md overflow-hidden relative ">
              {" "}
              <Slider {...settings}>
                {images.map((image, index) => (
                  <div key={index} className="h-full">
                    <img
                      src={image}
                      alt={`Slide ${index}`}
                      className="w-full h-72 object-cover"
                    />
                  </div>
                ))}
              </Slider>
    
              <button className="absolute bottom-3 left-10  w-3/4 h-10 bg-[#5B297E] text-white rounded-md shadow-md hover:bg-white hover:text-[#5B297E] font-inter">
                Register as Transporter
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-80 bg-[#D2F2FD]">
            <div className="w-full h-1/2  flex justify-center items-end">
              <h1 className='text-3xl font-inter font-semibold '>Register As</h1>
            </div>
            <div className="w-full h-1/2  flex items-center justify-center">
             <div className="w-10/12 h-16  grid grid-cols-4 gap-4">
              <div className="w-6/4 h-full bg-[#5B297E] flex justify-center items-center ">
              <div className="w-24 h-16  p-2">
                <img src="\images\5c8ebda60eceeb30e56e59c34a37afb6.png" alt="" className='w-full h-full object-cover' />
              </div>
              <div className="w-full h-full ">
                <div className="w-full h-6 ">
                    <h1 className='font-inter font-semibold text-md text-white'>Transporter</h1>
                </div>
                <div className="w-full h-10 ">
                    <h1 className='font-inter text-xs text-white'>Register as transporter if you have idle trucks available. </h1>
                </div>
              </div>
              </div>
              <div className="w-6/4 h-full bg-[#5B297E] flex ">
              <div className="w-24 h-16  p-2">
                <img src="\images\3b3263d27fa208417968091550d93d98.png" alt="" className='w-full h-full object-cover' />
              </div>
              <div className="w-full h-full ">
                <div className="w-full h-6 ">
                    <h1 className='font-inter font-semibold text-md text-white'>Agent/Broker</h1>
                </div>
                <div className="w-full h-10 ">
                    <h1 className='font-inter  text-xs text-white'>Register as transporter if you have idle trucks available. </h1>
                </div>
              </div>
              </div>
              <div className="w-6/4 h-full bg-[#5B297E] flex ">
              <div className="w-24 h-16 p-2">
                <img src="\images\65ceb99559230cdf0da1520dde5e8224.png" alt="" className='w-full h-full object-cover' />
              </div>
              <div className="w-full h-full ">
                <div className="w-full h-6 ">
                    <h1 className='font-inter font-semibold text-md text-white'>Customer/Shipper</h1>
                </div>
                <div className="w-full h-10 ">
                    <h1 className='font-inter  text-xs text-white'>Register as transporter if you have idle trucks available. </h1>
                </div>
              </div>
              </div>
              <div className="w-6/4 h-full bg-[#5B297E] flex ">
              <div className="w-24 h-16 p-2">
                <img src="\images\5501a91ebf31912b64b8e8e809e132d1.png" alt="" className='w-full h-full object-cover' />
              </div>
              <div className="w-full h-full ">
                <div className="w-full h-6 ">
                    <h1 className='font-inter font-semibold text-md text-white'>Driver</h1>
                </div>
                <div className="w-full h-10 ">
                    <h1 className='font-inter  text-xs text-white'>Register as transporter if you have idle trucks available. </h1>
                </div>
              </div>
              </div>
             </div>
            </div>
        </div>


        <div className="flex justify-center items-center">
          <VideoSection />
        </div>
      </div>
    );
}

export default BannerSection