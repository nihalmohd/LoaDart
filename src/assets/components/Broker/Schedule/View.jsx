import React, { useRef, useState } from "react";
import { LuUpload } from "react-icons/lu";

const View = () => {
  // Separate states for Proof of Delivery and Lorry Receipt
  const [proofOfDelivery, setProofOfDelivery] = useState(null);
  const [lorryReceipt, setLorryReceipt] = useState(null);

  // Separate refs for both file inputs
  const proofFileInputRef = useRef(null);
  const receiptFileInputRef = useRef(null);

  // Handle file changes
  const handleProofFileChange = (event) => {
    setProofOfDelivery(event.target.files[0]);
  };

  const handleReceiptFileChange = (event) => {
    setLorryReceipt(event.target.files[0]);
  };

  // Handle upload clicks
  const handleProofUploadClick = () => {
    if (proofFileInputRef.current) {
      proofFileInputRef.current.click();
    }
  };

  const handleReceiptUploadClick = () => {
    if (receiptFileInputRef.current) {
      receiptFileInputRef.current.click();
    }
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    if (!proofOfDelivery || !lorryReceipt) {
      alert("Please select files for both Proof of Delivery and Lorry Receipt before submitting!");
      return;
    }

    console.log("Proof of Delivery File:", proofOfDelivery.name);
    console.log("Lorry Receipt File:", lorryReceipt.name);
  };

  return (
    <div className="w-11/12 h-auto">
      {/* Proof of Delivery Form */}
      <div className="w-full h-full p-4">
        <form
          onSubmit={handleSubmit}
          className="w-full p-6 rounded-sm border border-black"
        >
          <h2 className="text-xl font-bold text-[#5b297e] mb-6 text-start">
            Upload Proof of Delivery
          </h2>

          <label
            htmlFor="proof-of-delivery"
            className="block text-gray-400 text-sm font-medium ml-1 mb-2"
          >
            Proof of Delivery<span className="text-red-500">*</span>
          </label>

          <div className="flex md:w-8/12 items-center justify-end border-b border-black mb-4">
            <input
              type="file"
              id="proof-of-delivery"
              ref={proofFileInputRef}
              onChange={handleProofFileChange}
              className="hidden"
            />
            <input
              type="text"
              value={proofOfDelivery ? proofOfDelivery.name : ""}
              readOnly
              placeholder="No file chosen"
              className="flex-1 text-sm rounded-md p-1 focus:outline-none"
            />
            <button
              type="button"
              className="w-14 h-5 border border-[#5b297e] text-[#5b297e] rounded-sm text-[10px] font-medium mb-2"
              onClick={handleProofUploadClick}
            >
              <h1 className="flex justify-center items-center gap-2">
                Upload<span className=""><LuUpload /></span>
              </h1>
            </button>
          </div>
          <button
            type="submit"
            className="w-2/12 md:w-1/12 bg-[#5b297e] text-white py-1 rounded-sm shadow-md text-xs font-inter mb-10"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Lorry Receipt Form */}
      <div className="w-full h-auto p-4">
        <form
          onSubmit={handleSubmit}
          className="w-full p-6 rounded-sm border border-black"
        >
          <h2 className="text-xl font-bold text-[#5b297e] mb-6 text-start">
            Upload Lorry Receipt
          </h2>

          <label
            htmlFor="lorry-receipt"
            className="block text-gray-400 text-sm font-medium ml-1 mb-2"
          >
            Lorry Receipt<span className="text-red-500">*</span>
          </label>

          <div className="flex md:w-8/12 items-center justify-end border-b border-black mb-4">
            <input
              type="file"
              id="lorry-receipt"
              ref={receiptFileInputRef}
              onChange={handleReceiptFileChange}
              className="hidden"
            />
            <input
              type="text"
              value={lorryReceipt ? lorryReceipt.name : ""}
              readOnly
              placeholder="No file chosen"
              className="flex-1 text-sm rounded-md p-1 focus:outline-none"
            />
            <button
              type="button"
              className="w-14 h-5 border border-[#5b297e] text-[#5b297e] rounded-sm text-[10px] font-medium mb-2"
              onClick={handleReceiptUploadClick}
            >
              <h1 className="flex justify-center items-center gap-2">
                Upload<span className=""><LuUpload /></span>
              </h1>
            </button>
          </div>

          <button
            type="submit"
            className="w-2/12 md:w-1/12 bg-[#5b297e] text-white py-1 rounded-sm shadow-md text-xs font-inter mb-10"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default View;
