import { useState } from 'react'
import { Inicio } from './components/pages/Inicio'
import { Articulos } from './components/pages/Articulos'
import { Crear } from './components/pages/Crear'


function App() {
  
  return (
    <>
      <div className='App'>
        <h1>Blog con react</h1>
      </div>
      <Inicio></Inicio>
      <Articulos></Articulos>
      <Crear></Crear>
    </>
  )
}

export default App
