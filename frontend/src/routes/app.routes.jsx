import { Routes, Route } from "react-router-dom";

import Tasks from "../pages/Tasks"
import Login from "../pages/Login"
import Registry from "../pages/Registry"
import Home from "../pages/Home"

export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth/login" element={<Login />} />
            <Route path="/auth/signup" element={<Registry/>}/>
            <Route path="/tasks" element={<Tasks />} />
        </Routes>
    )
}