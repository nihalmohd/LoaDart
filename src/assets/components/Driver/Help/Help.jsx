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
                        <div className="w-full   flex justify-between items-end  ">
                            <h2 className="text-start ml-3 md:ml-5 text-3xl font-semibold text-[#5B297E] mb-4">
                                Have doubts? Watch our Tutorials!
                            </h2>

                            <h2 className=" w-2/12 flex justify-center md:justify-end items-end text-start md:ml-5  text-[10px] md:text-xs font-semibold text-[#5B297E] underline  md:mr-4 font-inter hover:cursor-pointer ">
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
                <div className="w-full  h-10 ml-2  flex items-end">
                    <h2 className="text-start ml-5 text-2xl font-bold text-[#5B297E] ">
                        Feeling stuck? Contact Us
                    </h2>
                </div>
                <div className="w-full h-auto  flex gap-2 p-3 ml-2 mt-5 ">
                    <div className="w-full h-full grid md:grid-cols-3 gap-5 ">
                        <div className="w-full h-28  mt-2 rounded-md flex shadow-lg border">
                            <div className="w-4 h-full rounded-s-md bg-[#5B297E]"></div>
                            <div className="w-1/2 h-full  rounded-e-md flex  items-center bg-[#F5F4F4]">
                                <h1 className='font-inter text-base font-semibold text-black ml-2'>Call Us</h1>
                            </div>
                            <div className="w-1/2 h-full  rounded-e-md flex justify-center items-center bg-[#F5F4F4]">
                                <div className="w-24 h-24 bg-[#F5F4F4]">
                                    <img src="\images\5fa2c2522586f7354e59c77e4dfe9527.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-28  mt-2 rounded-md flex shadow-lg border">
                            <div className="w-4 h-full rounded-s-md bg-[#5B297E]"></div>
                            <div className="w-1/2 h-full  rounded-e-md flex  items-center bg-[#F5F4F4]">
                            <h1 className='font-inter text-base font-semibold text-black ml-2'>Mail Us</h1>
                            </div>

                            <div className="w-1/2 h-full  rounded-e-md flex justify-center items-center bg-[#F5F4F4]">
                                <div className="w-24 h-24 bg-[#F5F4F4]">
                                    <img src="\images\907a773c663f404fd6ced6bf1fd6c10c.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-28  mt-2 rounded-md flex shadow-lg border">
                            <div className="w-4 h-full rounded-s-md bg-[#5B297E]"></div>
                            <div className="w-1/2 h-full  rounded-e-md flex  items-center bg-[#F5F4F4]">
                            <h1 className='font-inter text-base font-semibold text-black ml-2'>Chat With Us</h1>
                            </div>

                            <div className="w-1/2 h-full  rounded-e-md flex justify-center items-center bg-[#F5F4F4]">
                                <div className="w-24 h-24 bg-[#F5F4F4] ">
                                    <img src="\images\45818dd82c58efaa0128f80d6286184b.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:h-96 relative bg-cover bg-center flex justify-center items-center ml-0 mr-0 "
                >

                  
                    <div className="lg:w-full md:w-11/12 h-full relative p-4 z-10">
                        <div className="w-full md:h-16 mt-3 flex justify-between items-center">
                            <h1 className="font-inter text-2xl text-[#5B297E] font-semibold">Frequently asked questions</h1>
                            <div className="w-1/3 h-10  flex justify-end items-end">
                            <h2 className="text-start ml-5 text-xs font-semibold text-[#5B297E] underline mr-4 font-inter hover:cursor-pointer ">
                                View All
                            </h2>                              
                            </div>
                        </div>
                        <div className="w-full md:h-20 lg:h-16 mt-3">
                            <div className="w-full md:h-8 flex items-center">
                                <h1 className="text-[#000000] font-inter font-semibold text-sm">How do I book a transporter for my shipment?</h1>
                            </div>
                            <div className="w-full md:h-8">
                                <h1 className="text-sm font-inter text-black">
                                    To book a transporter, simply enter your pickup and delivery locations, choose the type of vehicle required for your goods, and select the date of transport. You'll receive a quote and can confirm your booking online.
                                </h1>
                            </div>
                        </div>
                        <div className="w-full md:h-20 lg:h-16 mt-3">
                            <div className="w-full md:h-8 flex items-center">
                                <h1 className="text-[#000000] font-inter font-semibold text-sm">How do I book a transporter for my shipment?</h1>
                            </div>
                            <div className="w-full md:h-8">
                                <h1 className="text-sm font-inter text-black">
                                    To book a transporter, simply enter your pickup and delivery locations, choose the type of vehicle required for your goods, and select the date of transport. You'll receive a quote and can confirm your booking online.
                                </h1>
                            </div>
                        </div>
                        <div className="w-full md:h-20 lg:h-16 mt-3  ">
                            <div className="w-full md:h-8 flex items-center">
                                <h1 className="text-[#000000] font-inter font-semibold text-sm">How do I book a transporter for my shipment?</h1>
                            </div>
                            <div className="w-full md:h-8">
                                <h1 className="text-sm font-inter text-black">
                                    To book a transporter, simply enter your pickup and delivery locations, choose the type of vehicle required for your goods, and select the date of transport. You'll receive a quote and can confirm your booking online.
                                </h1>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Help