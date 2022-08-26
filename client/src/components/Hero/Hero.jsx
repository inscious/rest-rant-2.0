import React from "react";
import headerIMG from "../../assets/images/img1.jpg";
// const rstImg =
//     "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

const Hero = ({ rstImg, title }) => {
    return (
        <div className="flex">
            <div
                className="relative h-60 w-screen bg-black bg-cover bg-center lg:h-[30rem]"
                // style={{ backgroundImage: `url(${headerIMG})` }}
            >
                <img
                    src={rstImg}
                    alt="restaurant image"
                    className="absolute h-full w-full object-cover opacity-60"
                />
                <div className="relative top-1/2 flex justify-center">
                    <h1 className="text-xl font-bold text-white drop-shadow-lg duration-200 md:text-2xl lg:text-3xl">
                        {title}
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
