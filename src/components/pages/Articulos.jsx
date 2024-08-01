import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Global } from '../../helpers/Global'
import { Peticion } from '../../helpers/Peticion'

import '../styles/articulos.css'
import data from "../../data/data.json"


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

  console.log(articulos);

  return (
    <>
    <section id="content" className="content">
      <header className='headerInicio'>
        <h3>Publicaciones</h3>
      </header>
      <div className='listaArticulo'>

        {/* REPETIR ESTO

        {articulos.map(articulo => {
          return (
            <article key={articulo._id} className="articulo-item">
              <header className='mask'>
              <Link to={"/articulo/"+articulo._id}><h2 className="titleArticulo">{articulo.titulo}</h2></Link>

              </header>
              <figure className='imgArticulo'>
              {articulo.imagen ==="default.png" ? <img src="https://rare-gallery.com/mocahbig/394707-wallpaper-error-404-anime-4k-hd.jpg"/>
              : <img src={articulo.imagen}/>}
              </figure>
            </article>
          );
        })}
        */}
        {
          data.map((item, id)=>{
            return (
              <article key={id} className="articulo-item">
                <header className='mask'>
                <Link to={`/articulo/${id}`}> <h2 className="titleArticulo">{item.titulo}</h2></Link>
                </header>
                <figure className='imgArticulo'>
                  <img src={item.imgPortada}/>
                </figure>
              </article>
            )
          })
        }
      </div>

    </section>
  </>
  )
}
