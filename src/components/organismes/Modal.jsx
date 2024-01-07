import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

const Modal = ({ onClose, children }) => {
    return (
        <div className="fixed inset-0 bg-gray-700 bg-opacity-35 flex items-center justify-center transform transition-opacity duration-300 z-30" role="dialog">
            <div className="bg-gray-300 bg-opacity-5 backdrop-blur max-w-full w-6xl  rounded-lg shadow-lg relative">
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-b from-black to-transparent h-20" />
                <button onClick={onClose} className="absolute top-0 right-0 p-4">
                    <AiOutlineClose />
                </button>
                {children}
            </div>
        </div>
    );
};

export default Modal;