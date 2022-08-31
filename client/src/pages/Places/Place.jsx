import React from "react";

const Place = ({ place }) => {
    return (
        <div className="cursor-pointer overflow-hidden rounded-lg border border-gray-200 duration-300 hover:scale-105">
            <img
                src={place.pic}
                alt={place.name}
                className="aspect-video w-full rounded-t-lg object-cover"
            />
            <div className="mt-1 mb-1 flex w-full flex-col items-center bg-white">
                <h1 className="text-orange-500 text-sm font-medium md:text-base">
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
