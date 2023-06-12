import React from 'react';

export const Coin = ({ results }) => {
    console.log(results);

    return (
        <div>
            {results?.map((result) => (
                <div key={result.id} className="bg-gray-100 p-4 mb-4 rounded">
                    <h3 className="text-lg font-semibold">{result.name}</h3>
                    <p>{result.symbol}</p>
                </div>
            ))}
        </div>
    );
};