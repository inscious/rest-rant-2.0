import React from "react";
import headerIMG from "../../assets/images/img1.jpg";
// const rstImg =
//     "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80";

import { motion } from "framer-motion";

const Hero = ({ rstImg, title }) => {
    return (
        <div className="flex">
            <div
                className="relative h-60 w-screen bg-black bg-cover bg-center lg:h-[30rem]"
                // style={{ backgroundImage: `url(${headerIMG})` }}
            >
                <motion.img
                    src={rstImg}
                    alt="restaurant image"
                    className="opacity- absolute h-full w-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0, transition: { duration: 0.1 } }}
                />
                <div className="relative top-1/2 flex justify-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{
                            y: 100,
                            opacity: 0,
                            transition: { duration: 0.1 },
                        }}
                        className="text-xl font-bold text-white drop-shadow-lg duration-200 md:text-3xl lg:text-5xl"
                    >
                        {title}
                    </motion.h1>
                </div>
            </div>
        </div>
    );
};

export default Hero;
