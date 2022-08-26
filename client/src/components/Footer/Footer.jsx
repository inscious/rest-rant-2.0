import React from "react";
import { AiFillGithub, AiFillLinkedin, AiFillFolder } from "react-icons/ai";

const Footer = () => {
    return (
        <div className="text-cente mt-10 bg-black">
            <div className="mx-auto flex max-w-7xl items-center justify-evenly px-5 xl:px-0">
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
                    <p className="mt-5 text-xs font-thin text-gray-300">
                        Check out
                    </p>
                    <p className="text-xs font-thin text-gray-300">the repo.</p>
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
                        Connect
                    </p>
                    <p className="text-xs font-thin text-gray-300">with me!</p>
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
                        Check out the
                    </p>
                    <p className="text-xs font-thin text-gray-300">
                        first version!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
