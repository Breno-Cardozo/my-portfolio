import { Routes, Route } from "react-router-dom"
import { Home } from "../pages/Home/Home"
import { Projects } from "../pages/Projects/Projects"
import { Conhecimentos } from "../pages/Conhecimentos/Conhecimentos"

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />}  />
            <Route path="/projects" element={<Projects />} />
            <Route path="/conhecimentos" element={<Conhecimentos />} />
        </Routes>
    )
}