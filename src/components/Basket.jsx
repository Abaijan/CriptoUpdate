import React, { useContext, useState } from 'react';
import { BasketIcon } from '../icons/Icon';
import { CustomContext } from '../context/Context';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { basket } = useContext(CustomContext);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <div className="flex items-center justify-center">
            <button
                className="text-white font-bold py-2 rounded"
                onClick={openModal}
            >
                <BasketIcon />
            </button>

            {isOpen && (
                <div className="absolute right-40 top-6 h-full overflow-hidden">
                    <div className="fixed bg-white rounded shadow-lg p-6 h-full w-96 overflow-hidden">
                        <h2 className="text-xl font-bold mb-4 text-red-800"></h2>
                        <div className="text-black">
                            {basket?.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-start w-full gap-3 h-10"
                                >
                                    <img src={item.image.small} alt="" />
                                    <span>{item.name}</span>
                                    <a href={item.links.homepage}>Link</a>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end mt-6">
                            <button
                                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded"
                                onClick={closeModal}
                            >
                                Закрыть
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
