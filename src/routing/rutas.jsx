import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Inicio } from "../components/pages/Inicio";
import { Articulos } from "../components/pages/Articulos";
import { Header } from "../components/layout/Header";
import { Nav } from "../components/layout/Nav";
import { Footer } from "../components/layout/Footer";
import { Articulo } from "../components/pages/Articulo";
import { Busqueda } from "../components/pages/Busqueda";

export const Rutas = () => {
    return(
        <BrowserRouter>
            {/* LAYAOUT */}
            <Header/>
            <Nav/>
            {/* Contenido control y rutas */}
            <section id="content" className="content">
                <Routes>
                    <Route path="/" element={<Inicio/>}/>
                    <Route path="/articulos" element={<Articulos/>}/>
                    <Route path="/articulo/:id" element={<Articulo/>}/>
                    <Route path="/buscar/:busqueda" element={<Busqueda/>}/>

                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </section>
            {/* Footer */}
            <Footer/>
        </BrowserRouter>
    )
}