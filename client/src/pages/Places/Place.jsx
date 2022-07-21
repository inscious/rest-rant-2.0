import React from "react";

const Place = ({ place }) => {
    return (
        <div className="w-full border dark:border-slate-600 duration-200">
            <img
                src={place.pic}
                alt={place.name}
                className="w-full object-cover"
            />
            <div className="flex flex-col mt-3 w-full mb-3 items-center">
                <h1 className="text-black dark:text-white duration-200">{place.name}</h1>
                <h1 className="text-black dark:text-white duration-200">
                    {place.city}, {place.city}
                </h1>
            </div>
        </div>
    );
};

export default Place;
