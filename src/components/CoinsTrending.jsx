export const CoinsTrending = ({ coin }) => {

    console.log(coin);

    return (
        <div className="font-light mb-2 p-2 border-gray-200 border-2 rounded hover:bg-gray-300">
            <h1>
                {coin.name}
            </h1>
        </div>
    )
}
