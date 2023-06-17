import { useParams } from 'react-router-dom';
import { useAxios } from '../hooks/useAxios';
import { useContext, useState } from 'react';
import { CustomContext } from '../context/Context';
import { SuccessIcon } from '../icons/Icon';
import { LiveBackground } from './LiveBackground';

export const CoinDetail = () => {
    const { id } = useParams();
    const { response } = useAxios(`coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`);
    const [variant, setVariant] = useState('Add to basket')

    const { AddProductToBasket, basketCount, setBasketCount, basket } = useContext(CustomContext)

    Array.from(response).map(el => el)

    const handleAddToBasket = () => {
        const productExists = basket.some((product) => response.id === product.id);

        if (!productExists) {
            AddProductToBasket(response);
            setBasketCount(basketCount + 1)
            setVariant(<SuccessIcon />)
        } else {
            alert('Product already in the basket');
        }
    };

    if (!response) {
        return (
            <div className="wrapper-container mt-8">
            </div>
        )
    }

    return (
        <div className='my-6 wrap'>
            <div className='flex gap-2 items-center'>
                <img src={response.image?.small} alt={response.name} />
                <h1 className='text-2xl mb-2 capitalize font-bold'>{response.name}</h1>
                <button
                    onClick={handleAddToBasket}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    {variant === 'Add to basket' ? 'Add to basket' : <SuccessIcon />}
                </button>
            </div>
            <p className='mt-6 text-gray-500 [&>a]:text-blue-600 [&>a]:underline' dangerouslySetInnerHTML={{ __html: response.description?.en }}></p>
        </div>
    )
}