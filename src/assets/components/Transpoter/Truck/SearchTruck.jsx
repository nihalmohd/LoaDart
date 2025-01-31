import React, { useState } from 'react'
import MarketPlaceTruck from '../Marketplace/Trucks/MarketPlaceTruck';

const SearchTruck = () => {
    const [numTrucks, setNumTrucks] = useState(2);
    
    const handleTruckChange = (value) => {
        setNumTrucks((prev) => Math.max(1, prev + value));
    };

    return (
        <div>
            <div className="w-11/12 h-full ml-2  ">
                <div className="w-full h-10  flex items-end ">
                    <div className="w-4/12  h-10 ">
                        <div className="w-full h-10 flex-col items-end ml-4">
                            <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">Search Truck</h1>
                        </div>
                    </div>
                </div>
                <MarketPlaceTruck/>

            </div>
        </div>
    )
}

export default SearchTruck