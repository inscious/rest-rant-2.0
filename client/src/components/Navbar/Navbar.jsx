import React, { useState } from "react";
import useDarkMode from "../../hooks/useDarkMode";
import { Link } from "react-router-dom";
import { navbarLinks } from "./navbarData";
import { MdModeNight, MdLightMode } from "react-icons/md";

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
        <span onClick={handleMode} className="hidden cursor-pointer lg:flex">
            {darkTheme ? (
                <MdLightMode size="24" className="fill-white" />
            ) : (
                <MdModeNight size="24" className="fill-white" />
            )}
        </span>
    );
};

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);
    const handleClose = () => setNav(!nav);

    return (
        <div className="fixed z-50 mx-auto h-20 w-screen bg-gradient-to-b from-black lg:h-32">
            <div className="mx-auto flex h-full w-full items-center justify-between px-5 duration-100">
                <Link to="/">
                    <h1 className="text-2xl font-bold text-white dark:text-white">
                        REST \ RANT
                    </h1>
                </Link>
                <ul className="hidden h-10 items-center justify-evenly px-5 font-thin lg:flex ">
                    {navbarLinks.map((link) => {
                        return (
                            <li
                                key={link.title}
                                className="mx-2 px-1 text-white hover:font-bold hover:text-primary dark:text-white"
                            >
                                <Link to={link.url} className="">
                                    {link.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <ThemeIcon />
                <div
                    id="mobile-controls"
                    className="ml-auto scale-150 cursor-pointer lg:hidden"
                    onClick={handleNav}
                >
                    {!nav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 fill-white"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fillRule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 fill-white"
                            viewBox="0 0 20 20"
                            fill="black"
                        >
                            <path
                                fillRule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}
                </div>
            </div>

            <ul
                className={
                    !nav ? "hidden" : "absolute flex w-full flex-col lg:hidden"
                }
            >
                {navbarLinks.map((link) => {
                    return (
                        <li
                            key={link.title}
                            className="flex h-16 w-full flex-col items-center justify-center backdrop-opacity-60"
                        >
                            <Link
                                to={link.url}
                                className="p-5 text-white hover:font-bold hover:text-primary"
                                onClick={handleClose}
                            >
                                {link.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Navbar;
