import React from "react";
import PlacesIndex from "./PlacesIndex";
import Hero from "../../components/Hero";

const rstImg =
    "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80";

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