import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Inicio from "../components/Inicio";
import Recetas from "../components/Recetas.tsx";
import HeaderNav from "../components/laoyout/HeaderNav";
import Footer from "../components/laoyout/Footer";
import Alimento from "../components/Alimento";
import Dieta from "../components/Dieta.tsx";


const Rutas = () => {
    return (
        <BrowserRouter>
            <HeaderNav />
            <section className="section">
                <Routes>
                    <Route path="/" element={<Navigate to="/inicio" />}></Route>
                    <Route path="/inicio" element={<Inicio />}></Route>
                    <Route path="/recetas" element={<Recetas />}></Route>
                    <Route path="/dieta" element={<Dieta />}></Route>
                    <Route path="/alimentos/:nombre" element={<Alimento />}></Route>
                    <Route path="*" element={<h1> Error 404 </h1>}></Route>
                </Routes>
            </section>
            <Footer />
        </BrowserRouter>
    )
}

export default Rutas; 