import React from "react";
import { Routes, Route, BrowserRouter, Navigate} from "react-router-dom";
import { Inicio } from "../components/pages/Inicio";
import { Articulos } from "../components/pages/Articulos";

export const Rutas = () => {
    return(
        <BrowserRouter>
            {/* LAYAOUT */}

            {/* Contenido control y rutas */}
            <section id="content" className="content">
                <Routes>
                    <Route path="/" element={<Inicio/>}/>
                    <Route path="/inicio" element={<Inicio/>}/>
                    <Route path="/Articulos" element={<Articulos/>}/>
                </Routes>
            </section>

        </BrowserRouter>
    )
}