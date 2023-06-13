import { Link, useNavigate, useParams } from "react-router-dom";
import { FavoriteICon, LogoIcon, MoonIcon, SunIcon } from "../icons/Icon";
import { useState, useEffect, useContext } from "react";
import { CustomContext } from "../context/Context";
import Modal from "./Basket";

export const Navbar = () => {
    const navigate = useNavigate('');
    const [darkMode, setDarkMode] = useState(false);

    const { count, basketCount } = useContext(CustomContext)

    const handleThemeToggle = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode) {
            setDarkMode(savedDarkMode === 'true');
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('darkMode', darkMode.toString());

        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    return (
        <div className={`bg-gray-800 text-white h-14 flex items-center mb-10`} id="navbar">
            <div className="wrapper-container w-full">
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
                    <div className="flex items-center gap-2">
                        {
                            darkMode ? (
                                <span onClick={handleThemeToggle} className="w-5 h-5 cursor-pointer">
                                    <SunIcon />
                                </span>
                            ) : (
                                <span onClick={handleThemeToggle} className="w-5 h-5 cursor-pointer">
                                    <MoonIcon />
                                </span>
                            )
                        }
                        <span className="flex items-center cursor-pointer mt-1">
                            <Link to={`/coin/favorite`}>
                                <FavoriteICon />
                            </Link>
                            <span className="relative right-2 bottom-3">
                                {count}
                            </span>
                            <Modal />
                            <span className="relative right-2 bottom-3">
                                {basketCount}
                            </span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};