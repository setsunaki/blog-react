import React, { useState, useEffect } from 'react' 
import { useParams } from 'react-router-dom'


import '../styles/articulo.css'
import data from "../../data/data.json"

export const Articulo = () => {
  const [articulo, setArticulo] = useState(null);
  const { id } = useParams();

  useEffect(()=>{
    const buscaArticulo = data[id];
    setArticulo(buscaArticulo);
  },[id]);

  if (!articulo) return <p>Cargando...</p>
  

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
                <img src={articulo.imgPortada}/>
              </figure>
            </header>
          </article>
        </section>

        <div className='datoArticulo'>
          <main>
            <section>
            <div>
              {articulo.contenido.map((item, index) => (
                <div key={index}>
                  <p>{item.mainParrafo}</p>
                  {item.imgNota && <img src={item.imgNota} alt="" />}
                  <p>{item.endParrafo}</p>
                </div>
              ))}
            </div>
            </section>
          </main>
        </div>
      </div>
    </>
  )
}
