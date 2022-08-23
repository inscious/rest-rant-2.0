import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import PlacesIndex from "./pages/Places";
import Home from "./pages/Home";
import About from "./pages/About";

const App = () => {
    return (
        <Router className="">
            {/* <main className="container mx-auto max-w-7xl main-body"> */}
            <Navbar />
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/places" element={<PlacesIndex />} />
                <Route exact path="/about" element={<About />} />
            </Routes>
            {/* </main> */}
        </Router>
    );
};

export default App;
