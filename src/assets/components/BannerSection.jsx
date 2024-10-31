import React from 'react'
import VideoSection from './VideoSection'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const images = [
    '/images/image1.jpg',
    '/images/image2.jpg',
    '/images/image3.jpg',
    '/images/image4.jpg',
  ];
const BannerSection = () => {

    const settings = {
        dots: true,            
        infinite: true,       
        speed: 500,          
        slidesToShow: 1,      
        slidesToScroll: 1,    
      };

    return (
        <div className="font-sans bg-white   ">


            <div className="w-full h-52  relative flex justify-between ">
                <div className="w-[500px] h-auto absolute ml-24 mt-7  ">
                    <div className="w-[350px] h-36 absolute flex justify-center items-center z-20 ">
                        <h2 className="text-5xl font-semibold mb-4 text-black">Choose Lorries for Your Loads</h2>
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
                <div className="w-1/2 h-80 bg-yellow-200 flex justify-center items-center">
                    <div className="w-2/4 h-72 bg-red-300 rounded-md">
                        <Slider {...settings}>
                            {images.map((image, index) => (
                                <div key={index}>
                                    <img src={image} alt={`Slide ${index}`} className="w-full h-auto" />
                                </div>
                            ))}
                        </Slider>
                    
                    </div>
                </div>
            </div>
            <div className="w-full h-60 bg-[#D2F2FD]"></div>

            {/* <div className="w-full h-20 bg-blue-500 mt-4 relative z-0"></div> */}

            <section className="text-center py-12  relative">



                {/* Hero Image and Transporter Card */}
                <div className="flex justify-center items-center gap-8 mt-8">
                    {/* Truck Image */}


                    {/* Transporter Card */}
                    <div className="relative w-1/4 bg-white rounded-md shadow-lg">
                        <img
                            src="placeholder-for-transporter-image"
                            alt="Transporter"
                            className="w-full rounded-md"
                        />
                        <div className="absolute bottom-0 left-0 w-full bg-purple-800 text-white py-2 text-lg font-semibold text-center rounded-b-md">
                            Register as Transporter
                        </div>
                    </div>
                </div>

                {/* Register As Section */}
                <h3 className="text-2xl font-semibold mt-12">Register As</h3>
                <div className="flex justify-center gap-4 my-4 flex-wrap">
                    {[
                        { role: 'Transporter', description: 'Register as transporter if you have trucks available' },
                        { role: 'Agent/Broker', description: 'Register as transporter if you have trucks available' },
                        { role: 'Customer/Shipper', description: 'Register as transporter if you have trucks available' },
                        { role: 'Driver', description: 'Register as transporter if you have trucks available' }
                    ].map(({ role, description }) => (
                        <button key={role} className="p-4 bg-purple-700 text-white shadow-md rounded text-center w-48">
                            <div className="h-12 bg-gray-200 mb-2 flex items-center justify-center rounded-full">
                                {/* Placeholder for icons */}
                                <img src={`placeholder-for-${role.toLowerCase()}-icon`} alt={`${role} icon`} className="h-6" />
                            </div>
                            <h4 className="font-bold text-lg">{role}</h4>
                            <p className="text-xs">{description}</p>
                        </button>
                    ))}
                </div>

            </section>
            {/* Toll-Free Helpline */}
            {/* <div className="absolute bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded-full flex items-center ">
                <img src="placeholder-for-phone-icon" alt="Phone Icon" className="h-4 mr-2" />
                <span className="font-semibold">Toll-Free number:</span>
                <span className="font-bold text-lg ml-1">987654321</span>
            </div> */}

            <div className='flex justify-center items-center'>
                <VideoSection />
            </div>
        </div>
    )
}

export default BannerSection