import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import Alerta from '../components/Alerta'
import clienteAxios from '../config/clienteAxios'
import useAuth from '../hooks/useAuth'

const Login = () => {

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ alerta, setAlerta ] = useState({})
  const { setAuth } = useAuth()
  const navigate = useNavigate()

  const handleSubmit =  async e => {
    e.preventDefault()

    if([ email, password ].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }

    try {
      const { data } = await clienteAxios.post('/usuarios/login', { email, password})
      setAlerta({})
      localStorage.setItem('token', data.token)
      setAuth(data)
      navigate("/Auth")
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
      <h1 className="text-gray-700 text-center font-bold text-4xl m-auto capitalize">Iniciar Sesión</h1>
      { msg && <Alerta alerta={alerta}/>}
      <form 
        className="my-10 bg-white shadow rounded-lg p-10 "
        onSubmit={handleSubmit}
      >
        <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="email">Email:</label>
            <input
              id="email"
              type='email'
              placeholder=' Email de Registro'
              className='w-full mt-3 p-3 px-8 text-center border rounded-xl bg-gray-50'
              value={email}
              onChange={ e => setEmail( e.target.value )}  
            />
        </div>

        <div className="my-5">
            <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="password">Contraseña:</label>
            <input
              id="password"
              type='password'
              placeholder=' Contraseña de Registro'
              className='w-full mt-3 p-3 px-8 text-center border rounded-xl bg-gray-50'
              value={password}
              onChange={ e => setPassword( e.target.value )}  />
        </div>
        
        <input
          type='submit'
          value='Iniciar Sesión'
          className='bg-sky-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors'
        />

      </form>

      <nav className="lg2:flex lg2:justify-between">
           <Link
             className="block text-center my-1 text-slate-500 uppercase text-sm"
             to='/registrar'>
             ¿No tienes una cuenta? Regístrate           
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

export default Login
