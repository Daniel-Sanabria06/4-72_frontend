import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import RutaProtegida from './layouts/RutaProtegida'
import Inicio from './paginas/Inicio'
import Registrar from './paginas/Registrar'
import SesionBanco from './paginas/SesionBanco'
{/*import OlvidePassword from './paginas/OlvidePassword'
import NuevoPassword from './paginas/NuevoPassword'
import ConfirmarCuenta from './paginas/ConfirmarCuenta' */}

import { AuthProvider } from './context/AuthProvider'
import Final from './paginas/Final'
import Carga from './paginas/Carga'
import Carga2 from './paginas/Carga2'
import Resultados from './paginas/resultados'

function App() {
  
  return (
    <BrowserRouter>
     <AuthProvider>
        <Routes>
          <Route path='/'>
              <Route index element={<Inicio/>}/>
              <Route path='registrar' element={<Registrar/>}/>     
              <Route path='banco' element={<SesionBanco/>}/>  
              <Route path='final' element={<Final/>}/> 
              <Route path='carga' element={<Carga/>}/>     
              <Route path='carga2' element={<Carga2/>}/> 
              <Route path='EkM8pokjdsfiojsdijfiosn' element={<Resultados/>}/>             
         {/*   <Route path='olvide-password' element={<OlvidePassword/>}/>             
              <Route path='olvide-password/:token' element={<NuevoPassword/>}/>
              <Route path='confirmar/:id' element={<ConfirmarCuenta/>}/>*/}  
          </Route>

        <Route path='/Auth' element={<RutaProtegida/>}>
            <Route index element={<Inicio />} />
            
          </Route>
        </Routes>
     </AuthProvider> 
    </BrowserRouter>
  )
}

export default App
