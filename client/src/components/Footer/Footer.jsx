import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFolder } from "react-icons/ai";

const Footer = () => {
    return (
        // <div className="mt-10 h-96 w-screen bg-slate-300">
        //     <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-4">
        //         <div>
        //             <h3 className="mt-4 inline-block border-b-4 border-[#00d8ff] text-xl font-bold">
        //                 Products
        //             </h3>
        //             <ul>
        //                 <li>App</li>
        //                 <li>Analytics</li>
        //                 <li>Token List</li>
        //                 <li>Defi</li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>
        <div className="text-cente mt-10 bg-black">
            <div className="mx-auto flex max-w-7xl items-center justify-evenly px-5 xl:px-0">
                {/* <div
                    className="item-center flex flex-col justify-center"
                    id="grid-item"
                >
                    <h3 className="inline-block text-xl font-thin text-gray-400">
                        Products
                    </h3>
                    <ul className="mt-5">
                        <li>App</li>
                        <li>Analytics</li>
                        <li>Token List</li>
                        <li>Defi</li>
                    </ul>
                </div> */}
                <div
                    className="flex flex-col items-center justify-center py-10 duration-200 lg:py-20"
                    id="grid-item"
                >
                    <a
                        href="https://github.com/inscious/rest-rant-2.0"
                        target="_blank"
                    >
                        <AiFillGithub className="h-10 w-10 fill-gray-300 duration-200 hover:scale-125 hover:fill-amber-500" />
                    </a>
                    <p className="mt-5 text-xs text-gray-300">
                        Repository
                    </p>
                </div>
                <div
                    className="flex flex-col items-center justify-center py-10 duration-200 lg:py-20"
                    id="grid-item"
                >
                    <a
                        href="https://www.linkedin.com/in/ssaulcortes/"
                        target="_blank"
                    >
                        <AiFillLinkedin className="h-10 w-10 fill-gray-300 duration-200 hover:scale-125 hover:fill-amber-500" />
                    </a>
                    <p className="mt-5 text-xs font-thin text-gray-300">
                        Let's connect!
                    </p>
                </div>
                <div
                    className="flex flex-col items-center justify-center py-10 duration-200 lg:py-20"
                    id="grid-item"
                >
                    <a
                        href="https://rest-rant-deploy.herokuapp.com/"
                        target="_blank"
                    >
                        <AiFillFolder className="h-10 w-10 fill-gray-300 duration-200 hover:scale-125 hover:fill-amber-500" />
                    </a>
                    <p className="mt-5 text-xs font-thin text-gray-300">
                        Original
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
