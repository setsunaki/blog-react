import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/inicio.css'
import { Global } from '../../helpers/Global'
import { Peticion } from '../../helpers/Peticion'

export const Inicio = () => {

  const [ultimos, setUltimos] = useState([]);

  useEffect(() =>{
    conseguirUltimos();
  }, [])

  const conseguirUltimos = async() =>{
    const {datos, cargando} = await Peticion(Global.url+"articulos/true","GET");
    if(datos.status === "success"){
      setUltimos(datos.articulo);
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

          {ultimos.map(ultimo => {
            return (
              <article key={ultimo._id} className="articulo-item">
                <header className='mask'>
                  <Link to={"/articulo/"+ultimo._id}><h2 className="titleArticulo">{ultimo.titulo}</h2></Link>
                  
                </header>
                <figure className='imgArticulo'>
                  {/*<img src={Global.url+"imagen/"+ultimo.imagen} />*/}
                  {ultimo.imagen ==="default.png" ? <img src="https://rare-gallery.com/mocahbig/394707-wallpaper-error-404-anime-4k-hd.jpg"/>
                  : <img src={ultimo.imagen}/>}
                  
                </figure>
              </article>
            );
          })}

        </div>

      </section>
    </>
  )
}
