import React from "react";

import { placesData } from "./placeData";
import Place from "./Place";

import { motion } from "framer-motion";

const PlacesIndex = () => {
    // console.log(placesData);
    return (
        <motion.div
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ y: 100, opacity: 0, transition: { duration: 0.1 } }}
            className="mx-auto flex h-full flex-col px-5 xl:max-w-7xl xl:px-0"
        >
            <div className="my-5 flex items-center justify-center">
                {/* <h1 className="text-xl font-medium text-gray-600">
                    Checkout What Others Are Saying!
                </h1> */}
            </div>
            <div className="grid w-full grid-cols-2 gap-5 duration-200 md:grid-cols-3 lg:grid-cols-4">
                {placesData.map((place, index) => {
                    return <Place place={place} key={index} />;
                })}
            </div>
        </motion.div>
    );
};

export default PlacesIndex;
