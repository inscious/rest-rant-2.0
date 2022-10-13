import React from "react";

const Place = ({ place }) => {
    return (
        <div className="border-orange-5 border-gray-20 group cursor-pointer overflow-hidden rounded-md border duration-300 hover:scale-105 hover:border- hover:border-orange-500">
            <div className="my-3 ml-3 flex w-full flex-col items-start bg-white z-50">
                <h1 className="truncate text-sm font-medium text-orange-500 md:text-base">
                    {place.name}
                </h1>
                <h1 className="text-sm font-thin text-gray-500 lg:text-base">
                    {place.city}, {place.city}
                </h1>
            </div>
            <img
                src={place.pic}
                alt={place.name}
                className=" scale-110 group-hover:scale-100 relative aspect-video w-full object-cover duration-200"
            />
        </div>
    );
};

export default Place;
