import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Music from "./pages/Music.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/" || "/home"} element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/music" element={<Music />} />
            </Routes>
        </BrowserRouter>
    );
}
