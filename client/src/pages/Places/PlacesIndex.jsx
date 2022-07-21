import React from "react";

import { placesData } from "./placeData";
import Place from "./Place";

const PlacesIndex = () => {
    // console.log(placesData);
    return (
        <div className="flex flex-col px-5 xl:px-0 justify-evenly items-center m-auto h-full dark:bg-darkBG duration-200">
            <div className="my-10">
                <h1 className="text-3xl font-thin text-primary dark:text-white duration-200">
                    Places to Rant or Rave about!
                </h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full duration-200">
                {placesData.map((place) => {
                    return <Place place={place} key={place.name}/>;
                })}
            </div>
        </div>
    );
};

export default PlacesIndex;
