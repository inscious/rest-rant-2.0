import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import PlacesIndex from "./pages/Places";

const App = () => {
    return (
        <Router className="">
            <div className="container mx-auto max-w-7xl">
                <Navbar />
                <Routes>
                    <Route exact path="/places" element={<PlacesIndex />} />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
