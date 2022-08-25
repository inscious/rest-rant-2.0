import React from "react";

import { placesData } from "./placeData";
import Place from "./Place";

const PlacesIndex = () => {
    // console.log(placesData);
    return (
        <div className="mx-auto flex h-full flex-col px-5 xl:max-w-7xl xl:px-0">
            <div className="my-10 flex items-center justify-center">
                <h1 className="text-xl font-medium text-gray-600">
                    Checkout What Others Are Saying!
                </h1>
            </div>
            <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-4">
                {placesData.map((place) => {
                    return <Place place={place} key={place.name} />;
                })}
            </div>
        </div>
    );
};

export default PlacesIndex;
