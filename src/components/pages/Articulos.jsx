import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Global } from '../../helpers/Global'
import { Peticion } from '../../helpers/Peticion'

import '../styles/articulos.css'


export const Articulos = () => {

  const [articulos, setArticulos] = useState([]);

  useEffect(() =>{
    conseguirArticulos();
  }, [])

  const conseguirArticulos = async() =>{
    const {datos, cargando} = await Peticion(Global.url+"articulos","GET");
    if(datos.status === "success"){
      setArticulos(datos.articulo);
    }
  }

  return (
    <>
    <section id="content" className="content">
      <header className='headerInicio'>
        <h3>Ultimas Publicaciones</h3>
        <div className='verMas'>
          <Link to={"/articulos"}>Ver mas</Link>
        </div>
      </header>
      <div className='listaArticulo'>

        {/* REPETIR ESTO*/}

        {articulos.map(articulo => {
          return (
            <article key={articulo._id} className="articulo-item">
              <header className='mask'>
              <Link to={"/articulo/"+articulo._id}><h2 className="titleArticulo">{articulo.titulo}</h2></Link>

              </header>
              <figure className='imgArticulo'>
                <img src={Global.url+"imagen/"+articulo.imagen} />
              </figure>
            </article>
          );
        })}

      </div>

    </section>
  </>
  )
}
