import React, { createContext, useState } from 'react';

export const CustomContext = createContext();

export const ContextProvider = ({ children }) => {

    const [basketCount, setBasketCount] = useState(0);
    const [count, setCount] = useState(0);
    const [portfolio, setPortfolio] = useState([]);
    const [basket, setBasket] = useState([]);

    const AddProductToBasket = (item) => {
        setBasket((previewItem) => [...previewItem, item])
    }

    const AddProductToPortfolio = (item) => {
        setPortfolio((previewItem) => [...previewItem, item])
    }

    const value = {
        count,
        portfolio,
        basket,
        basketCount,
        setCount,
        setBasketCount,
        AddProductToBasket,
        AddProductToPortfolio
    };

    return (
        <CustomContext.Provider value={value} >
            {children}
        </CustomContext.Provider>
    )
}