import React, { useState } from "react";

const Feedback = () => {
    const [rating, setRating] = useState(0);


    const handleStarClick = (star) => {
      setRating(star);
    };
  return (
    <div>
        <div className="w-11/12 h-auto  ">
                <div className="w-full h-20  flex items-end">
                    <div className="w-4/12  h-20 ">
                        <div className="w-full h-120 flex-col items-end ml-4">
                            <h1 className="font-inter font-semibold text-[#5B297E] text-lg mt-5">Feedback</h1>
                        </div>
                    </div>
                </div>
                
                <div
      className="flex flex-col items-center p-6"
      style={{ maxWidth: "500px", margin: "0 auto", fontFamily: "Arial, sans-serif" }}
    >
      {/* Feedback Text Area */}
      <textarea
        className="w-full h-32 p-4 border border-gray-300 rounded mb-6"
        placeholder="Type your feedback here..."
        style={{
          backgroundColor: "#f9f9f9",
          resize: "none",
          fontSize: "14px",
        }}
      ></textarea>

      {/* Rating Section */}
      <div className="mb-6 w-full text-center">
        <p className="text-sm text-gray-700 mb-3 font-medium">
          How much are you satisfied with LoaDart so far?
        </p>
        <div className="flex justify-center items-center gap-2">
          {Array(5)
            .fill(0)
            .map((_, index) => (
              <button
                key={index}
                onClick={() => handleStarClick(index + 1)}
                style={{
                  fontSize: "24px",
                  color: rating >= index + 1 ? "#6B46C1" : "#A0AEC0",
                  cursor: "pointer",
                  transition: "color 0.3s",
                }}
              >
                {rating >= index + 1 ? "★" : "☆"}
              </button>
            ))}
        </div>
      </div>

      {/* Submit Button */}
      <button
        className="bg-purple-600 text-white font-medium py-2 px-6 rounded"
        style={{
          width: "120px",
          fontSize: "14px",
        }}
      >
        Submit
      </button>
    </div>    </div>
    </div>
  )
}

export default Feedback