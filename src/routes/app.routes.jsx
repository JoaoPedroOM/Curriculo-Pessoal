import { Routes, Route } from "react-router-dom";

import {Home} from "../pages/Home"
import {Projetos} from "../pages/Projetos"
import ProjetoDetalhe from "../pages/ProjetoDetalhe";

export function AppRoutes(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projetos" element={<Projetos />} />
            <Route path="/projetos/:projectName" element={<ProjetoDetalhe />} />
        </Routes>
    )
}