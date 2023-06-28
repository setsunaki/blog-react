import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Global } from '../../helpers/Global'
import { Peticion } from '../../helpers/Peticion'

import '../styles/articulo.css'

export const Articulo = () => {

  const [articulo, setArticulo] = useState([]);
  const params = useParams();

  useEffect(() =>{
    conseguirArticulo();
  }, [])

  const conseguirArticulo = async() =>{
    const {datos, cargando} = await Peticion(Global.url+"articulo/"+params.id,"GET");
    console.log(datos);
    if(datos.status === "success"){
      setArticulo(datos.encontrado);
    }
  }

  return (
    <>
      <div className='detalleArticulo'>
        <section className='Articulo'>
          <article>
            <header className='ArticuloHeader'>
              <div className='detalleHeader'>
                <h1 className='titleArticulo'>{articulo.titulo}</h1>
                <div className='articuloFecha'>
                  <span>{articulo.autor}</span>
                  <span>{articulo.fecha}</span>
                </div>
              </div>
              <figure className='articuloImg'>
                {/*<img src={Global.url+"imagen/"+articulo.imagen}/>*/}
                <img src={articulo.imagen}/>
              </figure>
            </header>
          </article>
        </section>

        <div className='datoArticulo'>
          <main>
            <section>
              <div>
                <p>{articulo.contenido}</p>
              </div>
              
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
