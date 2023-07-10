import { Link } from "react-router-dom";

export const CoinsTrending = ({ coin }) => {

    return (
        <>
                <div className= "relative h-56  w-56 rounded-3xl bg-white-950 drop-shadow-2xl border-2 cursor-pointer hover:h-60 hover:w-60 hover:-translate-y-12 transition-2">
                    <Link to={`/coin/${coin.id}`}>
                        <div className=" items-center gap-1 ">
                            <p className="absolute left-24 text-2xl top-40 font-semibold">{coin.score + 1}.</p>
                            <picture>
                                <img
                                    className="w-40 h-40 absolute left-7 top-1 "
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
