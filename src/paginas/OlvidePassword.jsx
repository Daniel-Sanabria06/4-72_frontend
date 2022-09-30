import { useState } from 'react'
import { Link } from "react-router-dom"
import clienteAxios from '../config/clienteAxios'
import Alerta from '../components/Alerta'
import useAuth from '../hooks/useAuth'

const OlvidePassword = () => {

  const { auth, cerrarSesionAuth } = useAuth()

    const handleCerrarSesion = () => {
        cerrarSesionAuth()
        localStorage.removeItem('token')
    }

  const [ email, setEmail ] = useState('')
  const [ alerta, setAlerta ] = useState({})

  const handleSubmit =  async e => {
      e.preventDefault()

      if(email === '' || email.length < 5 ) {
        setAlerta({
          msg: 'El Email es obligatorio',
          error: true
        })
        return
      } 

      try {
        const { data } = await clienteAxios.post(`/usuarios/olvide-password`, { email })
        setAlerta({
          msg: data.msg,
          error: false
        })
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
  }

  const { msg } = alerta

  return (
    <div className='lg2:px-52 lg:text-center'>
      <h1 className="text-gray-700 text-center font-bold text-4xl m-auto capitalize">Recupera tu cuenta </h1>
      { msg && <Alerta alerta={alerta} />}
      <form 
        className="my-10 bg-white shadow rounded-lg p-10"
        onSubmit={handleSubmit}  
      >
        <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="email">Email:</label>
            <input
              id="email"
              type='email'
              placeholder=' Email de Registro'
              className='w-full mt-3 p-3 block border rounded-xl bg-gray-50'
              value={email}
              onChange={ e => setEmail(e.target.value)}
              onClick={handleCerrarSesion}
            />
        </div>
      
        <input
          type='submit'
          value='Enviar instrucciones'
          className='bg-sky-600 mb-5 px-2 w-full py-4 text-white text-base uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors'
        />
      </form>
      <nav className="lg2:flex lg2:justify-between">
          <Link
            className="block text-center my-1 text-slate-500 uppercase text-sm"
            to='/'>
            ¿Ya tienes una cuenta? Inicia Sesión           
          </Link>

          <Link
             className="block text-center my-1 text-slate-500 uppercase text-sm"
             to='/registrar'>
             ¿No tienes una cuenta? Regístrate           
           </Link>
      </nav>

  </div>
  )
}

export default OlvidePassword
