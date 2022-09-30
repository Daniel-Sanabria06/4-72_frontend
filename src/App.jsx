import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AuthLayout from './layouts/AuthLayout'
import RutaProtegida from './layouts/RutaProtegida'
import Login from './paginas/Login'
import Inicio from './paginas/Inicio'
import Registrar from './paginas/Registrar'
{/*import OlvidePassword from './paginas/OlvidePassword'
import NuevoPassword from './paginas/NuevoPassword'
import ConfirmarCuenta from './paginas/ConfirmarCuenta' */}
import Devocionales from './paginas/Devocionales'
import Sermones from './paginas/Sermones'
import Devocional from './paginas/Devocional'
import Sermon from './paginas/Sermon'
import Nosotros from './paginas/Nosotros'

import { AuthProvider } from './context/AuthProvider'

function App() {
  return (
    <BrowserRouter>
     <AuthProvider>
        <Routes>
          <Route path='/' element={<AuthLayout/>}>
              <Route index element={<Inicio/>}/>
              <Route path='login' element={<Login/>}/>
              <Route path='registrar' element={<Registrar/>}/>               
         {/*   <Route path='olvide-password' element={<OlvidePassword/>}/>             
              <Route path='olvide-password/:token' element={<NuevoPassword/>}/>
              <Route path='confirmar/:id' element={<ConfirmarCuenta/>}/>*/}  
              <Route path='nosotros' element={<Nosotros/>}/>
              <Route path='devocionales' element={<Devocionales/>}/>
              <Route path='devocionales/:url' element={<Devocional/>}/>
              <Route path='sermones' element={<Sermones/>}/>
              <Route path='sermones/:url' element={<Sermon/>}/>
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
