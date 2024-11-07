import React from 'react'

const DashTable = () => {
  return (
    <div>
         <div className="w-full max-w-lg mx-auto">
      <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
        <thead className="bg-purple-600 text-white">
          <tr>
            <th className="px-6 py-3 text-left text-sm font-medium">Vehicle Number</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Date</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Destination</th>
            <th className="px-6 py-3 text-left text-sm font-medium">Status</th>
          </tr>
        </thead>
        <tbody className="bg-gray-100 text-gray-700">
          <tr className="bg-gray-200">
            <td className="px-6 py-4">KL 07 AX 1234</td>
            <td className="px-6 py-4">18 Sep, 2024</td>
            <td className="px-6 py-4">Ernakulam</td>
            <td className="px-6 py-4">Departed</td>
          </tr>
          <tr>
            <td className="px-6 py-4">KL 07 AX 1234</td>
            <td className="px-6 py-4">18 Sep, 2024</td>
            <td className="px-6 py-4">Ernakulam</td>
            <td className="px-6 py-4">Departed</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="px-6 py-4">KL 07 AX 1234</td>
            <td className="px-6 py-4">18 Sep, 2024</td>
            <td className="px-6 py-4">Ernakulam</td>
            <td className="px-6 py-4">Departed</td>
          </tr>
          <tr>
            <td className="px-6 py-4">KL 07 AX 1234</td>
            <td className="px-6 py-4">18 Sep, 2024</td>
            <td className="px-6 py-4">Ernakulam</td>
            <td className="px-6 py-4">Departed</td>
          </tr>
          <tr className="bg-gray-200">
            <td className="px-6 py-4">KL 07 AX 1234</td>
            <td className="px-6 py-4">18 Sep, 2024</td>
            <td className="px-6 py-4">Ernakulam</td>
            <td className="px-6 py-4">Departed</td>
          </tr>
        </tbody>
      </table>
      <div className="text-right mt-2">
        <a href="#" className="text-purple-600 text-sm font-medium">View all</a>
      </div>
    </div>
        
    </div>
  )
}

export default DashTable