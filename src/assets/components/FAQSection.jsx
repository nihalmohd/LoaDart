import React from 'react'
import Footer from './Footer'

const FAQSection = () => {
  return (
    <div>

<div className="w-full h-96 relative bg-cover bg-center flex justify-center items-center ml-0 mr-0"
     style={{ backgroundImage: "url('/images/f94a7597b6bd440415027560967f688e.png')" }}
>
  {/* Background overlay with opacity */}
  <div className="absolute inset-0 bg-gray-200 opacity-65"></div>
  
  {/* Content */}
  <div className="w-10/12 h-full relative z-10">
    <div className="w-full h-16 mt-3 flex items-center">
      <h1 className="font-inter text-2xl text-[#5B297E] font-semibold">Frequently asked questions</h1>
    </div>
    <div className="w-full h-16 mt-3">
      <div className="w-full h-8 flex items-center">
        <h1 className="text-[#000000] font-inter font-semibold text-sm">How do I book a transporter for my shipment?</h1>
      </div>
      <div className="w-full h-8">
        <h1 className="text-sm font-inter text-black">
          To book a transporter, simply enter your pickup and delivery locations, choose the type of vehicle required for your goods, and select the date of transport. You'll receive a quote and can confirm your booking online.
        </h1>
      </div>
    </div>
    <div className="w-full h-16 mt-3">
      <div className="w-full h-8 flex items-center">
        <h1 className="text-[#000000] font-inter font-semibold text-sm">How do I book a transporter for my shipment?</h1>
      </div>
      <div className="w-full h-8">
        <h1 className="text-sm font-inter text-black">
          To book a transporter, simply enter your pickup and delivery locations, choose the type of vehicle required for your goods, and select the date of transport. You'll receive a quote and can confirm your booking online.
        </h1>
      </div>
    </div>
    <div className="w-full h-16 mt-3">
      <div className="w-full h-8 flex items-center">
        <h1 className="text-[#000000] font-inter font-semibold text-sm">How do I book a transporter for my shipment?</h1>
      </div>
      <div className="w-full h-8">
        <h1 className="text-sm font-inter text-black">
          To book a transporter, simply enter your pickup and delivery locations, choose the type of vehicle required for your goods, and select the date of transport. You'll receive a quote and can confirm your booking online.
        </h1>
      </div>
    </div>
    
  </div>
</div>
  <Footer/>
    </div>
  )
}

export default FAQSection