import React from "react";

import Hero from "../../components/Hero";

import { motion } from "framer-motion";

const rstImg =
    "https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1310&q=80";
const title = "Add New Place";

const NewPlace = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="h-full">
            <Hero rstImg={rstImg} title={title} />
            {/* <label for="name">Your name</label> */}
            <div className="mx-auto w-full">
                <motion.form
                    initial={{ opacity: 0, y: -100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ y: 100, opacity: 0, transition: { duration: 0.1 } }}
                    className="mx-auto my-10 w-full px-5 lg:w-[60rem]"
                >
                    <input
                        className="mx-auto mb-5 block w-full rounded-md bg-gray-200 py-3 px-3 leading-tight text-gray-600 focus:outline-none"
                        placeholder="Place Name"
                        type="text"
                        id="place_name"
                        name="place_name"
                    />
                    <input
                        className="mx-auto mb-5 block w-full rounded-md bg-gray-200 py-3 px-3 leading-tight text-gray-600 focus:outline-none"
                        placeholder="Image URL"
                        type="text"
                        id="place_image"
                        name="place_image"
                    />
                    <input
                        id="place_city"
                        name="place_city"
                        type="text"
                        className="mx-auto mb-5 block w-full rounded-md bg-gray-200 py-3 px-3 leading-tight text-gray-600 focus:outline-none"
                        placeholder="State"
                    ></input>
                    <input
                        id="place_state"
                        name="place_state"
                        type="text"
                        className="mx-auto mb-5 block w-full rounded-md bg-gray-200 py-3 px-3 leading-tight text-gray-600 focus:outline-none"
                        placeholder="State"
                    ></input>
                    <input
                        id="place_cuisines"
                        name="place_cuisines"
                        type="text"
                        className="mx-auto mb-5 block w-full rounded-md bg-gray-200 py-3 px-3 leading-tight text-gray-600 focus:outline-none"
                        placeholder="Cuisines"
                    ></input>
                    <input
                        id="place_founded"
                        name="place_founded"
                        type="text"
                        className="mx-auto mb-5 block w-full rounded-md bg-gray-200 py-3 px-3 leading-tight text-gray-600 focus:outline-none"
                        placeholder="Founded"
                    ></input>
                    <button
                        onClick={handleSubmit}
                        className="mx-auto block w-full rounded-md border border-orange-500 py-3 px-3 text-gray-600 duration-200 hover:border-black/0 hover:bg-orange-500 hover:text-white"
                    >
                        ADD PLACE
                    </button>
                </motion.form>
            </div>
        </div>
    );
};

export default NewPlace;
