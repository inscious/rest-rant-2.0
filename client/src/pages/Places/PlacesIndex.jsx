import React from "react";

import { placesData } from "./placeData";
import Place from "./Place";

const PlacesIndex = () => {
    // console.log(placesData);
    return (
        <div className="m-auto flex h-full flex-col items-center justify-evenly px-5 dark:bg-darkBG xl:px-0 ">
            <div className="my-10">
                <h1 className="text-3xl font-thin text-primary dark:text-white  ">
                    Places to Rant or Rave about!
                </h1>
            </div>
            <div className="grid w-full grid-cols-2  gap-5 md:grid-cols-4  ">
                {placesData.map((place) => {
                    return <Place place={place} key={place.name} />;
                })}
            </div>
        </div>
    );
};

export default PlacesIndex;
