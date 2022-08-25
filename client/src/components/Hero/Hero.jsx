import React from "react";
import headerIMG from "../../assets/images/img1.jpg";
const rstImg =
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const Hero = () => {
    return (
        <div className="flex">
            <div
                className="bg-black h-60 w-screen bg-cover bg-center lg:h-[30rem] relative"
                // style={{ backgroundImage: `url(${headerIMG})` }}
            >
                <img
                    src={rstImg}
                    alt="restaurant image"
                    className="h-full w-full object-cover opacity-70 absolute"
                />
                <div className="top-1/2 flex justify-center relative">
                    <h1 className="text-2xl font-bold text-white drop-shadow-xl lg:text-3xl">
                        Got something to rant or rave about?
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
