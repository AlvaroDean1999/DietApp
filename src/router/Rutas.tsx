import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Inicio from "../components/Inicio";
import CreaTuDieta from "../components/Crea-Tu-Dieta.tsx";
import Blog from "../components/Blog";
import Contacto from "../components/Contacto";
import HeaderNav from "../components/laoyout/HeaderNav";
import Footer from "../components/laoyout/Footer";
import Alimento from "../components/Alimento";


const Rutas = () => {
    return (



        <BrowserRouter>


            <HeaderNav />

            <section className="section">
                <Routes>
                    <Route path="/" element={<Navigate to="/inicio" />}></Route>
                    <Route path="/inicio" element={<Inicio />}></Route>
                    <Route path="/alimentos" element={<CreaTuDieta />}></Route>
                    <Route path="/blog" element={<Blog />}></Route>
                    <Route path="/contacto" element={<Contacto />}></Route>
                    <Route path="/alimentos/:nombre" element={<Alimento />}></Route>
                    <Route path="*" element={<h1> Error 404 </h1>}></Route>
                </Routes>
            </section>

            <Footer />

        </BrowserRouter>
    )
}

export default Rutas; 