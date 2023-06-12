import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/inicio.css'

export const Inicio = ({ onIngresar }) => {
  return (
    <div className='jumbo'>
      <h1>Bienvenidos</h1>
      <p>Colocar mona china en pose de bienvenida</p>
      <p>Colocar el link en la esquina inferior derecha y darle estilo al boton</p>
      <Link to={"/articulos"} className='btnArticulos' onClick={onIngresar}>Ingresar</Link>
    </div>
  )
}
