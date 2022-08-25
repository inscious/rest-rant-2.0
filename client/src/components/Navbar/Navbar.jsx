import React, { useState } from "react";
import useDarkMode from "../../hooks/useDarkMode";
import { Link } from "react-router-dom";
import { navbarLinks } from "./navbarData";
import { MdModeNight, MdLightMode } from "react-icons/md";
import Hamburger from "hamburger-react";

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
            <div className="mx-auto flex h-full w-full items-center justify-between px-5 duration-100 xl:max-w-7xl">
                <Link to="/">
                    <h1 className="text-2xl font-bold text-white duration-200 hover:text-amber-500">
                        REST \ RANT
                    </h1>
                </Link>
                <ul className="hidden h-10 items-center justify-evenly px-5 font-thin lg:flex ">
                    {navbarLinks.map((link) => {
                        return (
                            <li
                                key={link.title}
                                className="mx-2 px-1 text-white duration-200 hover:font-bold hover:text-amber-500 xl:mx-5"
                            >
                                <Link to={link.url} className="">
                                    {link.title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                {/* <ThemeIcon /> */}
                <button className="hidden rounded-md bg-white px-3 py-1 text-black duration-200 hover:bg-amber-500 lg:flex">
                    Add Place
                </button>
                <div
                    id="mobile-controls"
                    className="ml-auto scale-150 cursor-pointer lg:hidden"
                    onClick={handleNav}
                >
                    <Hamburger size={20} color="#fff" />
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
                            className="flex h-16 w-full flex-col items-center justify-center bg-black"
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
