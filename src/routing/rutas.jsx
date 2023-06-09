import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Inicio } from "../components/pages/Inicio";
import { Articulos } from "../components/pages/Articulos";
import { Header } from "../components/layout/Header";
import { Nav } from "../components/layout/Nav";
import { Sidebar } from "../components/layout/Sidebar";
import { Footer } from "../components/layout/Footer";
import { Crear } from "../components/pages/Crear";

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
                    <Route path="/crear-articulos" element={<Crear/>}/>
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </section>

            {/* Barra lateral*/}
            <Sidebar/>

            {/* Footer */}
            <Footer/>
        </BrowserRouter>
    )
}