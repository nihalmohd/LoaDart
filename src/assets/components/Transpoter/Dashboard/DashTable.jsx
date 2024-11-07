import React from 'react'

const DashTable = () => {
  return (
    <div>
         <div className="w-full  mx-auto r">
         <div className="w-full h-10  flex items-end">
                    <h1 className='font-inter font-semibold text-xl ml-5'>Statistics</h1>
                </div>

                <div className="w-11/12 h-full flex justify-center items-center ml-5">
                
      <table className="min-w-full border border-gray-200 rounded-sm overflow-hidden mt-2">
        <thead className="bg-[#5B297E] text-white">
          <tr>
            <th className="w-24 h-5 text-left text-sm font-medium px-2">Vehicle Number</th>
            <th className="w-20 h-5 text-left text-sm font-medium px-2">Date</th>
            <th className="w-20 h-5 text-left text-sm font-medium px-2">Destination</th>
            <th className="w-16 h-5 text-left text-sm font-medium px-2">Status</th>
          </tr>
        </thead>
        <tbody className="bg-gray-100 text-gray-700">
          <tr className="bg-[#D9D9D9]">
            <td className="w-24 h-14 font-inter text-xs font-bold p-2">KL 07 AX 1234</td>
            <td className="w-20 h-14 font-inter text-xs font-bold p-2">18 Sep, 2024</td>
            <td className="w-20 h-14 font-inter text-xs font-bold p-2">Ernakulam</td>
            <td className="w-16 h-14 font-inter text-xs font-bold p-2">Departed</td>
          </tr>
          <tr>
            <td className="w-24 h-14 font-inter text-xs font-bold p-2">KL 07 AX 1234</td>
            <td className="w-20 h-14 font-inter text-xs font-bold p-2">18 Sep, 2024</td>
            <td className="w-20 h-14 font-inter text-xs font-bold p-2">Ernakulam</td>
            <td className="w-16 h-14 font-inter text-xs font-bold p-2">Departed</td>
          </tr>
          <tr className="bg-[#D9D9D9]">
            <td className="w-24 h-14 font-inter text-xs font-bold p-2">KL 07 AX 1234</td>
            <td className="w-20 h-14 font-inter text-xs font-bold p-2">18 Sep, 2024</td>
            <td className="w-20 h-14 font-inter text-xs font-bold p-2">Ernakulam</td>
            <td className="w-16 h-14 font-inter text-xs font-bold p-2">Departed</td>
          </tr>
          <tr>
            <td className="w-24 h-14 font-inter text-xs font-bold p-2">KL 07 AX 1234</td>
            <td className="w-20 h-14 font-inter text-xs font-bold p-2">18 Sep, 2024</td>
            <td className="w-20 h-14 font-inter text-xs font-bold p-2">Ernakulam</td>
            <td className="w-16 h-14 font-inter text-xs font-bold p-2">Departed</td>
          </tr>
          <tr className="bg-[#D9D9D9]">
            <td className="w-24 h-14 font-inter text-xs font-bold p-2">KL 07 AX 1234</td>
            <td className="w-20 h-14 font-inter text-xs font-bold p-2">18 Sep, 2024</td>
            <td className="w-20 h-14 font-inter text-xs font-bold p-2">Ernakulam</td>
            <td className="w-16 h-14 font-inter text-xs font-bold p-2">Departed</td>
          </tr>
        </tbody>
      </table>
                </div>
      <div className="text-right mt-2 pr-6">
        <a href="#" className="text-[#5B297E] text-sm font-medium underline">View all</a>
      </div>
    </div>
        
    </div>
  )
}

export default DashTable