import { Link } from "react-router-dom";

export const CoinsTrending = ({ coin }) => {

    return (
        <>
                <div className= "relative h-56  w-56 rounded-3xl bg-white-950 duration-500 drop-shadow-3xl border-2 cursor-pointer hover:h-60 hover:w-60 hover:-translate-y-12 hover:bg-gray-400">
                    <Link to={`/coin/${coin.id}`}>
                        <div className=" items-center gap-1 ">
                            <p className="absolute left-24 text-2xl top-40 font-semibold">{coin.score + 1}.</p>
                            <picture>
                                <img
                                    className="w-40 h-40 mx-auto "
                                    src={coin.large} alt={coin.name} />
                            </picture>
                            <p className="absolute left-20 top-48 !decoration-white" >{coin.name}</p>
                            <small className="text-xs decoration-white absolute right-8 bottom-2 ">({coin.symbol})</small>
                        </div>
                    </Link>
                </div>
            </>
    )
}
