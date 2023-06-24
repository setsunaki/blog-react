import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/inicio.css'

export const Inicio = () => {
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
          <article className="articulo-item">
            <header className='mask'>
              <Link to={"/detalle-articulo"}><h2 className="title">Desarrollo web</h2></Link>
            </header>
            <figure className='imgArticulo'>
              <img src='https://depor.com/resizer/x8BOWblrz58cnhq3Sirk3covoLk=/1200x800/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DAYT2F5NUNB7VPAFKUPHNDXVQA.jpg' />
            </figure>
          </article>
        </div>
      </section>
    </>
  )
}
