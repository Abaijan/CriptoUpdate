import { Link } from "react-router-dom";
import { StarIcon } from "../icons/Icon";

export const CoinsTrending = ({ coin }) => {

    return (
        <>
            <div className="font-light mb-2 p-2 border-gray-200 border-2 rounded hover:bg-gray-800 cursor-pointer">
                <Link to={`/coin/${coin.id}`}>
                    <div className="flex items-center gap-1">
                        <p className="font-semibold">{coin.score + 1}.</p>
                        <picture>
                            <img
                                className="w-6"
                                src={coin.small} alt={coin.name} />
                        </picture>
                        <p>{coin.name}</p>
                        <small className="text-xs">({coin.symbol})</small>
                    </div>
                </Link>
            </div>
        </>
    )
}
