import { useState } from "react"
import { Link} from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/clienteAxios"

const Registrar = () => {

  const [ nombre, setNombre ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ repetirPassword, setRepetirPassword] = useState('')
  const [ alerta, setAlerta ] = useState({})


  const handleSubmit = async e => {
    e.preventDefault()
    if([ nombre, email, password, repetirPassword].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }

    if(password !== repetirPassword) {
      setAlerta({
        msg: 'Las Contraseñas No Son Iguales',
        error: true
      })
      return
    }

    if(nombre.length > 15 ) {
      setAlerta({
        msg: 'Nombre muy largo, agrega máximo 15 caracteres',
        error: true
      })
      return
    }

    if(password.length < 6 ) {
      setAlerta({
        msg: 'La Contraseña es muy corta, agrega mínimo 6 caracteres',
        error: true
      })
      return
    }

    setAlerta({})

    //Creando el usuario en la API
    try {
      const { data } = await clienteAxios.post(`/usuarios`, {nombre, email, password})
      setAlerta({
        msg: data.msg,
        error: false
      })

      setNombre('')
      setPassword('')
      setEmail('')
      setRepetirPassword('')
    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
    
  }

  const { msg } = alerta

  return (
    <div className='px-52'>
        <h1 className="text-gray-700 text-center font-bold text-4xl m-auto capitalize">Crear Cuenta</h1>
        <form 
          className="my-10 bg-white shadow rounded-lg p-8"
          onSubmit={handleSubmit}
        >
          <div className="lg2:flex gap-28">
            <div className="my-5  mx-auto">
                <label className="uppercase text-gray-600 text-center block text-xl font-bold" htmlFor="nombre">Nombre:</label>
                <input
                  id="nombre"
                  type='text'
                  placeholder=' Tu Nombre'
                  className='w-full mt-3 p-3 px-8 text-center border rounded-xl bg-gray-50'
                  value={nombre}
                  onChange={ e => setNombre(e.target.value)}  
                />
            </div>

            <div className="my-5  mx-auto">
                <label className="uppercase text-center text-gray-600 block text-xl font-bold" htmlFor="email">Email:</label>
                <input
                  id="email"
                  type='email'
                  placeholder=' Email de Registro'
                  className='w-full mt-3 p-3 px-8 text-center border rounded-xl bg-gray-50'
                  value={email}
                  onChange={ e => setEmail(e.target.value)}    
                />
            </div>
          </div>
          
          <div className="lg2:flex gap-28">
            <div className="my-5  mx-auto">
                <label className="uppercase text-center text-gray-600 block text-xl font-bold" htmlFor="password">Contraseña:</label>
                <input
                  id="password"
                  type='password'
                  placeholder=' Contraseña de Registro'
                  className='w-full mt-3 p-3 px-8 text-center border rounded-xl bg-gray-50'
                  value={password}
                  onChange={ e => setPassword(e.target.value)}    
                />
            </div>
            
            <div className="my-5  mx-auto">
                <label className="uppercase text-gray-600 text-center block text-xl font-bold" htmlFor="password2">Repetir Contraseña:</label>
                <input
                  id="password2"
                  type='password'
                  placeholder=' Repite tu Contraseña'
                  className='w-full mt-3 p-3 px-8 text-center border rounded-xl bg-gray-50'
                  value={repetirPassword}
                  onChange={ e => setRepetirPassword(e.target.value)}    
                />
            </div>
          </div>
          { msg && <Alerta alerta={alerta}/> }
          <div className="text-center mt-5">
            <input
              type='submit'
              value='Crear Cuenta'
              className='bg-sky-600 py-2 m-auto px-12 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors'
            />
          </div>
         

        </form>

        <nav className="lg2:flex lg2:justify-between">
            <Link
              className="block text-center my-1 text-slate-500 uppercase text-sm"
              to='/login'>
              ¿Ya tienes una cuenta? Inicia Sesión           
            </Link>

            <Link
              className="block text-center my-1 text-slate-500 uppercase text-sm"
              to='/olvide-password'>
              Olvide Mi Contraseña           
            </Link>
        </nav>
    </div>
  )
}

export default Registrar
