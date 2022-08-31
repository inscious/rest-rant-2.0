import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import PlacesIndex from "./pages/Places";
// import Places from "./pages/Places/Places";
// import Home from "./pages/Home";
// import About from "./pages/About";
import AnimatedRoutes from "./components/AnimatedRoutes";

const App = () => {
    // const location = useLocation();

    return (
        <Router className="">
            {/* <AnimatePresence exitBeforeEnter> */}
            <Navbar />
            {/* <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/places" element={<Places />} />
                <Route exact path="/about" element={<About />} />
            </Routes> */}
            <AnimatedRoutes />
            <Footer />
            {/* </AnimatePresence> */}
        </Router>
    );
};

export default App;
