import { useNavigate } from "react-router-dom";
import { LogoIcon, MoonIcon, SunIcon } from "../icons/Icon";
import { useState, useEffect } from "react";

export const Navbar = () => {
    const navigate = useNavigate('');
    const [darkMode, setDarkMode] = useState(false);
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);

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

    useEffect(() => {
        const handleScroll = () => {
            const navbar = document.getElementById("navbar");
            if (navbar) {
                const navbarRect = navbar.getBoundingClientRect();
                const isFixed = navbarRect.top <= 0;
                setIsNavbarFixed(isFixed);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
                    </div>
                </div>
            </div>
        </div>
    );
};