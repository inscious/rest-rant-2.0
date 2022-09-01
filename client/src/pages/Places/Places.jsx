import React from "react";
import PlacesIndex from "./PlacesIndex";
import Hero from "../../components/Hero";

import { motion } from "framer-motion";

const rstImg =
    "https://images.unsplash.com/photo-1587899897387-091ebd01a6b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2413&q=80";

const title = "Check out what others are saying!";

const Places = () => {
    return (
        <div>
            <Hero rstImg={rstImg} title={title} />
            <PlacesIndex />
            <PlacesIndex />
        </div>
    );
};

export default Places;
