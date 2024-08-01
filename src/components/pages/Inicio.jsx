import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/inicio.css'
import data from "../../data/data.json"

export const Inicio = () => {
  const primerosSeisArticulos = data.slice(0, 8);

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

          {
            primerosSeisArticulos.map((item, id) =>{
              return <article key={id} className="articulo-item">
                  <header className='mask'>
                    <Link to={`/articulo/${id}`}> <h2 className="titleArticulo">{item.titulo}</h2></Link>
                  </header>
                  <figure className='imgArticulo'>
                    <img src={item.imgPortada}/>
                  </figure>
              </article>
            })
          }

        </div>

      </section>
    </>
  )
}
