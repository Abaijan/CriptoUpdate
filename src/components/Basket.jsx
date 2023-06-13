import React, { useContext, useState } from 'react';
import { ArchiveIcon } from '../icons/Icon';
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
                <ArchiveIcon />
            </button>

            {isOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
                    <div className="modal-container bg-white w-1/2 mx-auto rounded shadow-lg p-6">
                        <h2 className="text-xl font-bold mb-4">Модальное окно</h2>
                        <div className="text-black">
                            {basket?.map((item) => (
                                <div
                                    key={item.id}
                                    className="flex items-center justify-end w-full gap-3 h-10"
                                >
                                    <img src={item.image.small} alt="" />
                                    <span>{item.name}</span>
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
