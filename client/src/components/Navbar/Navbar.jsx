import React, { useState } from "react";

//  Hooks
// import useDarkMode from "../../hooks";
import { useScrollPosition } from "../../hooks/useScrollPosition";

// Router Imports
import { Link } from "react-router-dom";
import { navbarLinks } from "./navbarData";

// Icon Imports
// import { MdModeNight, MdLightMode } from "react-icons/md";
// import Hamburger from "hamburger-react";

// const ThemeIcon = () => {
//     const [darkTheme, setDarkTheme] = useDarkMode();
//     const handleMode = () => setDarkTheme(!darkTheme);
//     return (
//         <span onClick={handleMode} className="hidden cursor-pointer lg:flex">
//             {darkTheme ? (
//                 <MdLightMode size="24" className="fill-white" />
//             ) : (
//                 <MdModeNight size="24" className="fill-white" />
//             )}
//         </span>
//     );
// };

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => setNav(!nav);
    const scrollPosition = useScrollPosition();
    // console.log(scrollPosition);
    // fixed z-40 mx-auto h-20 w-screen bg-gradient-to-b from-black lg:h-32

    return (
        <div
            className={classNames(
                scrollPosition > 0
                    ? "bg-black/75 backdrop-blur-md"
                    : "bg-gradient-to-b from-black",
                "duration-20 fixed z-40 mx-auto h-20 w-screen lg:h-32"
            )}
        >
            <div className="mx-auto flex h-full w-full items-center justify-between px-5 duration-100 xl:max-w-7xl">
                {/* Logo */}
                <Link to="/">
                    <h1 className="z-50 text-2xl font-bold text-white duration-200 hover:text-amber-500">
                        REST \ RANT
                    </h1>
                </Link>
                {/* Navbar Links */}
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
                <button className="hidden rounded-md border border-amber-500/90 px-3 py-1 text-white drop-shadow-lg backdrop-blur-md duration-200 hover:bg-amber-500/90 lg:flex">
                    <p className="drop-shadow-lg">ADD PLACE</p>
                </button>
                {/* Mobile Controls */}
                <div
                    id="mobile-controls"
                    className="z-50 ml-auto scale-150 cursor-pointer lg:hidden"
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
                    {/* <Hamburger size={20} color="#fff" /> */}
                </div>
            </div>
            {/* Mobile Nav */}
            <div
                className={
                    !nav
                        ? "hidden"
                        : "absolute top-0 flex h-screen w-full flex-col bg-black/50 backdrop-blur-md lg:hidden"
                }
            >
                <ul className="flex h-full flex-col justify-evenly">
                    {navbarLinks.map((link) => {
                        return (
                            <li
                                key={link.title}
                                className="flex h-16 w-full flex-col items-center justify-center duration-200 hover:bg-amber-500"
                            >
                                <Link
                                    to={link.url}
                                    className="flex h-full w-full items-center justify-center text-white duration-200 hover:font-bold hover:text-black"
                                    onClick={handleNav}
                                >
                                    {link.title}
                                </Link>
                            </li>
                        );
                    })}
                    <li>
                        <button className="group h-16 w-full duration-200 hover:bg-amber-500">
                            <p className="text-white duration-200 group-hover:font-bold group-hover:text-black">
                                ADD PLACE
                            </p>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
