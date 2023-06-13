import { useParams } from 'react-router-dom';
import { useAxios } from '../hooks/useAxios';
import { useContext, useEffect } from 'react';
import { CustomContext } from '../context/Context';

export const CoinDetail = () => {
    const { id } = useParams();
    const { response } = useAxios(`coins/${id}?localization=false&tickers=false&market_data=false&community_data=false&sparkline=false`);

    const { AddProductToBasket, basketCount, setBasketCount, basket } = useContext(CustomContext)

    Array.from(response).map(el => el)

    const handleAddToBasket = () => {
        const productExists = basket.some((product) => response.id === product.id);

        if (!productExists) {
            AddProductToBasket(response);
            setBasketCount(basketCount + 1)
        } else {
            console.log('Product already in the basket');
        }
    };

    // useEffect(() => {
    //     if (window.onload) {
    //         localStorage.setItem('basket_product', JSON.stringify(response))
    //     }
    // }, [])

    if (!response) {
        return (
            <div className="wrapper-container mt-8">
            </div>
        )
    }

    return (
        <div className='my-6'>
            <div className='flex gap-2 items-center'>
                <img src={response.image?.small} alt={response.name} />
                <h1 className='text-2xl mb-2 capitalize font-bold'>{response.name}</h1>
                <button
                    onClick={handleAddToBasket}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    Добавить в корзину
                </button>
            </div>
            <p className='mt-6 text-gray-500 [&>a]:text-blue-600 [&>a]:underline' dangerouslySetInnerHTML={{ __html: response.description?.en }}></p>
        </div>
    )
}