import React, { useState } from "react";
import useDarkMode from "../../hooks/useDarkMode";
import { Link } from "react-router-dom";
import { navbarLinks } from "./navbarData";
import { MdModeNight, MdLightMode } from "react-icons/md";

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
        <span onClick={handleMode} className="cursor-pointer">
            {darkTheme ? (
                <MdLightMode size="24" className="top-navigation-icon" />
            ) : (
                <MdModeNight size="24" className="top-navigation-icon" />
            )}
        </span>
    );
};

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);
    const handleClose = () => setNav(!nav);

    return (
        <div className="h-20 mx-auto z-10  max-w-7xl w-full bg-white dark:bg-darkBG duration-200">
            <div className="px-5 xl:px-0 flex justify-between items-center w-full h-full duration-200">
                <Link to="/">
                    <h1 className="text-3xl font-bold dark:text-white duration-200">
                        REST | RANT
                    </h1>
                </Link>
                <ul className="hidden lg:flex font-thin h-10 px-5 items-center justify-evenly ">
                    {navbarLinks.map((link) => {
                        return (
                            <li
                                key={link.title}
                                className="hover:text-primary hover:font-bold mx-2 px-1 dark:text-white duration-200"
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
                    className="lg:hidden scale-150 ml-auto cursor-pointer"
                    onClick={handleNav}
                >
                    {!nav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 dark:fill-white duration-200"
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
                            className="h-5 w-5 dark:fill-white duration-200"
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
                    !nav
                        ? "hidden"
                        : "absolute w-full lg:hidden flex flex-col"
                }
            >
                {navbarLinks.map((link) => {
                    return (
                        <li
                            key={link.title}
                            className="flex flex-col h-16 items-center justify-center dark:bg-darkBG duration-200 w-full bg-white"
                        >
                            <Link
                                to={link.url}
                                className="hover:text-primary hover:font-bold duration-200 p-5 dark:text-white"
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
