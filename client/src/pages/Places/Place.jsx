import React from "react";

const Place = ({ place }) => {
    return (
        <div className="w-full border dark:border-slate-600  ">
            <img
                src={place.pic}
                alt={place.name}
                className="w-full object-cover"
            />
            <div className="mt-3 mb-3 flex w-full flex-col items-center">
                <h1 className="font-bold text-black   dark:text-white">
                    {place.name}
                </h1>
                <h1 className="text-black dark:text-white  ">
                    {place.city}, {place.city}
                </h1>
            </div>
        </div>
    );
};

export default Place;
