import { Navigate, Route, Routes } from "react-router-dom";

import ScrollToTop from "./ScrollToTop";

import { Home } from "../pages/Home";

export function Router() {
    return (
        <Routes>
            <Route path="*" element={<Navigate replace to="/" />} />
            <Route path="/" element={<Home />} />
        </Routes>
    );
}