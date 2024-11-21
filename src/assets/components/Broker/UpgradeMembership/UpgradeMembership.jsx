import React from 'react'

const UpgradeMembership = () => {
  return (
    <div>
    <div className="w-11/12 h-auto ">
                 <div className="w-full h-10 flex justify-between items-end ml-4">
                     <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">Upgrade Membership</h1>
                 </div>
             <div className=" bg-[#EF845C] p-6 rounded-lg text-white w-full ml-3 mt-5">
             <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
                 <div className="mb-4 sm:mb-0">
                     <h2 className="font-bold text-lg text-[#FFFFFF]">Free plan</h2>
                     <p className="text-sm text-[#FFFFFF]">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                 </div>

             </div>
             <div className="w-full h-20 flex  items-end">


                 <div className=" text-[10px] sm:text-[10px] font-bold mb-3 text-[#FFFFFF]">EXPIRE IN</div>
                 <div className="text-2xl sm:text-2xl font-bold mb-4 ml-1 text-[#FFFFFF]">05 DAYS</div>
             </div>

             <div className="w-full h-10 md:flex justify-between items-center gap-3">
                 <div className="md:w-10/12 h-4 sm:h-6 bg-[#E66442] rounded-full overflow-hidden">
                     <div className="bg-[#FFFFFF] h-full w-4/5 rounded-lg"></div>
                 </div>
                 <button className="bg-[#FFFFFF]  text-orange-500 font-semibold py-2 px-4 rounded-md text-center text-sm mt-2 md:mt-0 md:w-2/12 w-auto">
                     Upgrade Now
                 </button>
             </div>
         </div>
         <div className="w-full h-auto  p-3  grid md:grid-cols-3 grid-cols-1  gap-3  px-16 md:px-0 md:ml-3 mt-5 mb-10 ">
             <div
                 className="flex flex-col items-center bg-white shadow-lg rounded-sm p-3 w-72 border border-black"
                 
             >
                 <h2 className="text-lg font-bold mb-4">Basic</h2>
                 <div className="text-5xl font-bold mb-2">
                     ₹500
                 </div>
                 <p className="text-gray-500 mb-6 text-sm">per user, per month</p>

                 <button
                     className="text-[#5B297E] text-sm font-bold border-2 border-[#5B297E] rounded-full py-2 px-6 mb-6"
                     
                 >
                     Start My 15-day Trial
                 </button>

                 <hr className="w-1/2 mb-6 border-black"/>

                 <ul className="text-center">
                     <li className="font-semibold mb-2 text-sm ">feature</li>
                     <li className="font-semibold mb-2 text-sm">feature</li>
                     <li className="text-gray-400 mb-2 text-sm">feature</li>
                     <li className="text-gray-400 mb-2 text-sm">feature</li>
                     <li className="text-gray-400 mb-2 text-sm">feature</li>
                 </ul>
             </div>
             <div
                 className="flex flex-col items-center bg-[#5B297E] shadow-lg rounded-sm p-3 w-72"
             >
                 <h2 className="text-lg font-bold mb-4 text-white">Premium</h2>
                 <div className="text-5xl font-bold mb-2 text-white" >
                     ₹999
                 </div>
                 <p className="text-white mb-6 text-sm">per user, per month</p>

                 <button
                     className="text-[#5B297E] text-sm font-bold bg-white  rounded-full py-3 px-6 mb-6"
                     
                 >
                     Start My 15-day Trial
                 </button>

                 <hr className="w-1/2 mb-6 border-white"  />

                 <ul className="text-center">
                     <li className="font-semibold mb-2 text-white text-sm">feature</li>
                     <li className="font-semibold mb-2 text-white text-sm">feature</li>
                     <li className="text-white font-semibold mb-2 text-sm">feature</li>
                     <li className="text-white font-semibold mb-2 text-sm">feature</li>
                     <li className="text-white font-semibold mb-2 text-sm">feature</li>
                 </ul>
             </div>
             <div
                 className="flex flex-col items-center bg-white shadow-lg rounded-sm p-3 w-72 border border-black"
                
             >
                 <h2 className="text-lg font-bold mb-4">Advanced</h2>
                 <div className="text-5xl font-bold mb-2 text-black">
                     ₹700
                 </div>
                 <p className="text-gray-500 mb-6 text-sm">per user, per month</p>

                 <button
                     className="text-[#5B297E] text-sm font-bold border-2 border-[#5B297E] rounded-full py-2 px-6 mb-6"
                   
                 >
                     Start My 15-day Trial
                 </button>

                 <hr className="w-1/2 mb-6 border-black" />

                 <ul className="text-center">
                     <li className="font-semibold mb-2 text-sm">feature</li>
                     <li className="font-semibold mb-2 text-sm">feature</li>
                     <li className="text-gray-400 mb-2 text-sm">feature</li>
                     <li className="text-gray-400 mb-2 text-sm">feature</li>
                     <li className="text-gray-400 mb-2 text-sm">feature</li>
                 </ul>
             </div>
         </div>
     </div>
 </div>
  )
}

export default UpgradeMembership