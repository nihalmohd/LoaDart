// Modal.jsx
import React from 'react';

const Modal = ({ isOpen, closeModal, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 w-full h-screen bg-black bg-opacity-85 flex justify-center items-center z-50   "
         onClick={closeModal}
         >
            <div 
                className="relative"
                onClick={(event) => event.stopPropagation()}
            >
                {children || <p>No content available</p>}
            </div>
        </div>
    );
};

export default Modal;
