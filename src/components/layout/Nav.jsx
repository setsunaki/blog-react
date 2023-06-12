import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/nav.css'

export const Nav = () => {
  return (
    <nav className="nav">
      <ul>
        <li><NavLink to={"/inicio"}>Ultimos</NavLink></li>
        <li><NavLink to={"/crear-articulos"}>Publicar</NavLink></li>
      </ul>
    </nav>
  )
}
