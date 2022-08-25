import React from "react";

const Place = ({ place }) => {
    return (
        <div className="cursor-pointer border border-gray-200 duration-300 hover:scale-105 rounded-lg">
            <img
                src={place.pic}
                alt={place.name}
                className="aspect-video w-full object-cover rounded-t-lg"
            />
            <div className="mt-1 mb-1 flex w-full flex-col items-center">
                <h1 className="text-sm font-medium text-amber-600 md:text-base">
                    {place.name}
                </h1>
                <h1 className="text-sm font-thin text-gray-500 lg:text-base">
                    {place.city}, {place.city}
                </h1>
            </div>
        </div>
    );
};

export default Place;
