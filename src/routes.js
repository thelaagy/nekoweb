import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Music from "./pages/Music.js";
import Home from "./pages/Home.js";
import About from "./pages/About.js";

const url = "/nekoweb";

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={url + "/"} element={<Home />} />
                <Route path={url + "/about"} element={<About />} />
                <Route path={url + "/music"} element={<Music />} />
            </Routes>
        </BrowserRouter>
    );
}
