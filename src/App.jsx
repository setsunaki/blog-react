import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Rutas } from './routing/rutas'
import { Inicio } from './components/pages/Inicio'


function App() {

  const[mostrarRutas, setMostrarRutas] = useState(false);

  const handleIngresar = () => {
    setMostrarRutas(true);
  };

  return (
    <> 
      <div className='layout'>
        {mostrarRutas ? ( 
            <Rutas/>
        ):(
          <Router>
            <Inicio onIngresar={handleIngresar}/>
          </Router>
        )}
        
      </div>

    </>
  )
}

export default App
