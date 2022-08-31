import React from "react";
import Home from "../../pages/Home";
import Places from "../../pages/Places";
import About from "../../pages/About";
import NewPlace from "../../pages/NewPlace";
import { Route, Routes, useLocation } from "react-router-dom";

import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/places" element={<Places />} />
                <Route exact path="/about" element={<About />} />
                <Route exact path="/new-place" element={<NewPlace />} />
            </Routes>
        </AnimatePresence>
    );
};

export default AnimatedRoutes;
