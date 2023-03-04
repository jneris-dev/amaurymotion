import { Navigate, Route, Routes } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";

import { Home } from "../pages/Home";
import { Single } from "../pages/Single";

export function Router() {
    return (
        <ScrollToTop>
            <Routes>
                <Route path="*" element={<Navigate replace to="/" />} />
                <Route path="/" element={<Home />} />
                <Route path="/portfolio/:slug" element={<Single />} />
            </Routes>
        </ScrollToTop>
    );
}