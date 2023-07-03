import React from 'react'
import { useState} from 'react'
import { NavLink } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import '../styles/nav.css'

export const Nav = () => {

  const {buscar, setBuscar} =  useState("");
  const navegar = useNavigate();

  const hacerBusqueda = (e) =>{
    e.preventDefault();
    let busqueda = e.target.search_file.value;
    navegar("/buscar/"+busqueda);
  }

  return (
    <>
      <nav className="nav">
        <h1>セツナキ</h1>
        <form onSubmit={hacerBusqueda}>
          <div className="search-bar">
              <input type="text" name="search_file" placeholder="Publicacion, autor" />
          </div>
        </form>
        <ul>
          <li><NavLink to={"/inicio"}>Ultimos</NavLink></li>
        </ul>
        
      </nav>
    </>
  )
}
