import React from 'react'
import FAQSection from './FAQSection'

const VideoSection = () => {
  return (
    <div  >
      <div className='flex justify-center items-center'>
    <section className="bg-white w-10/12 mt-14 pb-6">
  <h2 className="text-center text-3xl font-semibold text-purple-800 mb-6">
    Have doubts? Watch our Tutorials!
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
    {/* Video 1 */}
    <div className="p-4 rounded-lg text-center">
      <div className="relative h-40 bg-gray-900 rounded-md mb-4 flex items-center justify-center">
        <img
          src="\images\479075e7044c8a4a58f8a6034f0cbaf0.png"
          alt="How it works - English"
          className="h-full w-full object-cover rounded-md opacity-50"
        />
        <img
          src="\images\34c3607cdc508d43375cb36e064fdb4b.png"
          alt="Play"
          className="absolute inset-0 h-[150px] w-[150px] object-contain m-auto"
        />
      </div>
      <h3 className="font-semibold text-lg text-gray-800 text-start">How it works - English</h3>
      <p className="text-sm text-gray-500 text-start">43.5k views</p>
    </div>

    {/* Video 2 */}
    <div className="p-4 rounded-lg text-center">
      <div className="relative h-40 bg-gray-900 rounded-md mb-4 flex items-center justify-center">
        <img
          src="\images\479075e7044c8a4a58f8a6034f0cbaf0.png"
          alt="How it works - Hindi"
          className="h-full w-full object-cover rounded-md opacity-50"
        />
        <img
          src="\images\34c3607cdc508d43375cb36e064fdb4b.png"
          alt="Play"
          className="absolute inset-0 h-[150px] w-[150px] object-contain m-auto"
        />
      </div>
      <h3 className="font-semibold text-lg text-gray-800 text-start">How it works - Hindi</h3>
      <p className="text-sm text-gray-500 text-start">32k views</p>
    </div>

    {/* Video 3 */}
    <div className="p-4 rounded-lg text-center">
      <div className="relative h-40 bg-gray-900 rounded-md mb-4 flex items-center justify-center">
        <img
          src="\images\345b209a09490fc094743c44b554580b.png"
          alt="How to register as Driver"
          className="h-full w-full object-cover rounded-md opacity-50"
        />
        <img
          src="\images\34c3607cdc508d43375cb36e064fdb4b.png"
          alt="Play"
          className="absolute inset-0 h-[150px] w-[150px] object-contain m-auto"
        />
      </div>
      <h3 className="font-semibold text-lg text-gray-800 text-start">How to register as Driver</h3>
      <p className="text-sm text-gray-500 text-start">15k views</p>
    </div>

    {/* Video 4 */}
    <div className="p-4 rounded-lg text-center">
      <div className="relative h-40 bg-gray-900 rounded-md mb-4 flex items-center justify-center">
        <img
          src="\images\9d3f1146f91e8ec5c53c7002ea762ffe.png"
          alt="How to book a Truck"
          className="h-full w-full object-cover rounded-md opacity-50"
        />
        <img
          src="\images\34c3607cdc508d43375cb36e064fdb4b.png"
          alt="Play"
          className="absolute inset-0 h-[150px] w-[150px] object-contain m-auto"
        />
      </div>
      <h3 className="font-semibold text-lg text-gray-800 text-start">How to book a Truck</h3>
      <p className="text-sm text-gray-500 text-start">9.5k views</p>
    </div>

    {/* Video 5 */}
    <div className="p-4 rounded-lg text-center">
      <div className="relative h-40 bg-gray-900 rounded-md mb-4 flex items-center justify-center border">
        <img
          src="\images\4c5cebdbed0f4791c174b0dc933c84bc.png"
          alt="How to register as Broker"
          className="h-full w-full object-cover rounded-md opacity-50"
        />
        <img
          src="\images\34c3607cdc508d43375cb36e064fdb4b.png"
          alt="Play"
          className="absolute inset-0 h-[150px] w-[150px] object-contain m-auto"
        />
      </div>
      <h3 className="font-semibold text-lg text-gray-800 text-start">How to register as Broker</h3>
      <p className="text-sm text-gray-500 text-start">12k views</p>
    </div>

    {/* Video 6 */}
    <div className="p-4 rounded-lg text-center ">
      <div className="relative h-40 bg-gray-900 rounded-md mb-4 flex items-center justify-center">
        <img
          src="\images\4c5cebdbed0f4791c174b0dc933c84bc.png"
          alt="How to earn money with LoaDart"
          className="h-full w-full object-cover rounded-md opacity-50"
        />
        <img
          src="\images\34c3607cdc508d43375cb36e064fdb4b.png"
          alt="Play"
          className="absolute inset-0 h-[150px] w-[150px] object-contain m-auto "
        />
      </div>
      <h3 className="font-semibold text-lg text-gray-800 text-start">How to earn money with LoaDart</h3>
      <p className="text-sm text-gray-500 text-start">18k views</p>
    </div>
  </div>
</section>
    </div>
  <FAQSection/>
      </div>


  )
}

export default VideoSection