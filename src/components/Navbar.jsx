import { useNavigate } from "react-router-dom"
import { LogoIcon } from "../icons/Icon"
import Search from "./Search"

export const Navbar = () => {
    const navigate = useNavigate('')
    return (
        <div className='bg-gray-800 text-white h-14 flex items-center'>
            <div className='wrapper-container w-full'>
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 cursor-pointer" onClick={() => navigate('/')}>
                        <LogoIcon />
                        <p>
                            <span className="text-yellow-500">
                                C
                            </span>
                            rypto
                            <span className="text-yellow-500">
                                U
                            </span>
                            pdate
                        </p>
                    </div>
                    <Search />
                </div>
            </div>
        </div>
    )
}
