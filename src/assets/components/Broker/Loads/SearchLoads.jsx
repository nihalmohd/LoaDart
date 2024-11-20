import React from 'react'
import MarketPlaceLoads from '../MarketPlace/Loads/MarketPlaceLoads'

const SearchLoads = () => {
  return (
    <div>
    <div className="w-11/12 h-auto  ">
        <div className="w-full h-10  flex items-end">
            <div className="w-4/12  h-10 ">
                <div className="w-full h-10 flex-col items-end ml-4">
                    <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">Search Load</h1>
                </div>
            </div>
        </div>

        <MarketPlaceLoads/>
    </div>
</div>
  )
}

export default SearchLoads