import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
// import PlacesIndex from "./pages/Places";
import Places from "./pages/Places/Places";
import Home from "./pages/Home";
import About from "./pages/About";
import Footer from "./components/Footer";

const App = () => {
    return (
        <Router className="">
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/places" element={<Places />} />
                <Route exact path="/about" element={<About />} />
            </Routes>
            <Footer />
        </Router>
    );
};

export default App;
