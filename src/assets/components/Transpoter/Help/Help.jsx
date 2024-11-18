import React from 'react'

const Help = () => {
  return (
      <div>
          <div className="w-11/12 h-auto  ">
              <div className="w-full h-20  flex items-end">
                  <div className="w-4/12  h-20 ">
                      <div className="w-full h-120 flex-col items-end ml-4">
                          <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">Help</h1>
                      </div>
                  </div>
              </div>

              <div className='flex  items-center'>
    <section className="bg-white w-full pb-6">
   <div className="w-full h-16  flex justify-between items-end ">
  <h2 className="text-start ml-5 text-3xl font-semibold text-[#5B297E] mb-4">
    Have doubts? Watch our Tutorials!
  </h2>

  <h2 className="text-start ml-5 text-xs font-semibold text-[#5B297E] underline mr-4 font-inter hover:cursor-pointer ">
    View All
  </h2>
   </div>
  
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {/* Video 1 */}
    <div className="p-4 rounded-lg text-center">
      <div className="relative h-48 bg-gray-900 rounded-md mb-4 flex items-center justify-center">
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
      <div className="relative h-48 bg-gray-900 rounded-md mb-4 flex items-center justify-center">
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
      <div className="relative h-48 bg-gray-900 rounded-md mb-4 flex items-center justify-center">
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
  </div>
</section>
    </div>
          </div>
      </div>
  )
}

export default Help