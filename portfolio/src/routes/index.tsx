import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Projects } from "../pages/Projects/Projects"

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/projects" element={<Projects />} />
        </Routes>
    )
}