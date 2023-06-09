import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li><NavLink to={"/articulos"}>Articulos</NavLink></li>
        <li><NavLink to={"/crear-articulos"}>Crear articulo</NavLink></li>
      </ul>
    </nav>
  )
}
