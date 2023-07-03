import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { Global } from '../../helpers/Global'
import { Peticion } from '../../helpers/Peticion'

import '../styles/articulos.css'


export const Busqueda = () => {

  const [articulos, setArticulos] = useState([]);
  const params = useParams();

  useEffect(() =>{
    conseguirArticulos();
    
  }, []);

  useEffect(() =>{
    conseguirArticulos();
  }, [params]);

  const conseguirArticulos = async() =>{
    const {datos, cargando} = await Peticion(Global.url+"buscar/"+params.busqueda,"GET");
    if(datos.status === "success"){
      setArticulos(datos.articulos);
    }
  }

  return (
    <>
    <section id="content" className="content">
      <header className='headerInicio'>
        <h3>Publicaciones</h3>
      </header>
      <div className='listaArticulo'>

        {/* REPETIR ESTO*/}
        {articulos && articulos.length > 0 ? (
          articulos.map(articulo => {
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
          })
        ):(
          <p>No se encontraron artículos</p>
        )}
        


      </div>

    </section>
  </>
  )
}

