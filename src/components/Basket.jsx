import React, { useContext, useEffect, useState } from 'react';
import { ArrowRightIcon, BasketIcon } from '../icons/Icon';
import { CustomContext } from '../context/Context';

const Modal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { basket, setBasket } = useContext(CustomContext);

    const openModal = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
    };

    console.log(basket);

    return (
        <div className="flex items-center justify-center">
            <button
                className="text-white font-bold py-2 rounded"
                onClick={openModal}
            >
                <BasketIcon />
            </button>

            {isOpen && (
                <div className="fixed top-0 left-0 w-full h-full flex items-center justify-end bg-opacity-50 bg-black">
                    <div className="bg-gray-800 rounded shadow-lg w-96 h-full overflow-y-auto transform transition-all duration-300 ease-in-out">
                        <div className="p-6 h-full">
                            <h2 className="text-xl font-bold mb-4 text-white-800">Корзина</h2>
                            <div className="text-white">
                                {basket?.map((item) => (
                                    <div
                                        key={item.id}
                                        className="flex items-center justify-start flex-col w-full gap-2 min-h-fit mt-4 p-2 bg-gray-700 rounded"
                                    >
                                        <div className="flex justify-center items-center gap-2">
                                            <img
                                                className="w-10 h-10 rounded"
                                                src={item.image.small}
                                                alt=""
                                            />
                                            <span className="text-white font-bold">{item.name}</span>
                                            <div className="flex justify-center ml-4 gap-2">
                                                <p className="text-yellow-400">
                                                    Stars: <span>{item.developer_data.stars}</span>
                                                </p>
                                                ||
                                                <p className="text-red-600 font-bold">
                                                    Subscribers:{' '}
                                                    <span>{item.developer_data.subscribers}</span>
                                                </p>
                                            </div>
                                        </div>
                                        <div>{item.description.en.slice(0, 190) === true ? 'no info' : item.description.en.slice(0, 190)}</div>
                                        <span className="flex items-center justify-center gap-2">
                                            <a
                                                href={item.links.chat_url}
                                                className="text-blue-600 text-xl hover:underline"
                                            >
                                                MoreInfo
                                            </a>
                                            <ArrowRightIcon />
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <div className='flex items-start justify-start flex-col text-white mt-10 text-xl uppercase'>
                                {/* total results */}

                                <span>total subscribers: {' '}</span>
                                <span>total stars: {' '}</span>
                                <span>total coins: {setBasket}</span>
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
                </div>
            )}
        </div>
    );
};

export default Modal;
