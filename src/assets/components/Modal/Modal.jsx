// Modal.jsx
import React from 'react';

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null; 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white w-96 p-5 rounded-lg shadow-lg relative">
        <button className="absolute top-2 right-2 text-red-500" onClick={closeModal}>X</button>
         <children/>
        {children || <p>No content available</p>}
      </div>
    </div>
  );
};

export default Modal;
