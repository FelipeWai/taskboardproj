import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home"
import Login from "../pages/Login"

export function AppRoutes(){
    return (
        <Routes>
            <Route path="/auth/login" element={<Login />} />
            <Route path="/tasks" element={<Home />} />
        </Routes>
    )
}