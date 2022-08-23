import React from "react";
import headerIMG from "../../assets/images/img1.jpg";

const Hero = () => {
    return (
        <div className="flex">
            <div
                className="h-60 w-screen bg-orange-200 bg-cover bg-center lg:h-[30rem]"
                style={{ backgroundImage: `url(${headerIMG})` }}
            >
                <div className="relative top-1/2 z-50 flex justify-center">
                    <h1 className="text-2xl  lg:text-3xl font-bold text-white drop-shadow-xl">
                        Something to rant or rave about?
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
