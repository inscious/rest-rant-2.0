import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

import Navbar from "./components/Navbar";

const App = () => {
    return (
        <Router>
            <div className="container mx-auto max-w-7xl">
                <Navbar />
                <Routes>
                    
                </Routes>
            </div>
        </Router>
    );
};

export default App;
