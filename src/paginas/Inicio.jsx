import useAuth from '../hooks/useAuth'
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react'
import Spinner from '../components/Spinner'
import Alerta from "../components/Alerta"
import clienteAxios from "../config/clienteAxios"
import Header from '../components/Header'
import Footer from '../components/Footer'

const Inicio = () => {

    const Openbar = () => {
     document.querySelector('.sidebar').classList.toggle('left-[-350px]')
    }

    const [ cedula, setCedula ] = useState('')
    const [ alerta, setAlerta ] = useState({})
    const [formularioEnviado, setFormularioEnviado] = useState(false);
    /*const [ nombre, setNombre ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ password, setPassword ] = useState('')
    const [ repetirPassword, setRepetirPassword] = useState('')
   
  */
  
    const handleSubmit = async e => {
      e.preventDefault()
      if(cedula.length === 0) {
        setAlerta({
          msg: 'Campo obligatorio',
          error: true
        })
        return
      }
  
      if(cedula.length > 11 ) {
        setAlerta({
          msg: 'Agrega una cédula válida',
          error: true
        })
        return
      }

      if(cedula.length < 6 ) {
        setAlerta({
          msg: 'Agrega una cédula válida',
          error: true
        })
        return
      }
  
      setAlerta({})
  
      //Creando el usuario en la API
    
      try {
        const { data } = await clienteAxios.post(`/usuarios`, {cedula})
        setAlerta({
          msg: data.msg,
          error: false
        })

        setCedula('')
        const urlBase = window.location.origin
    
        window.location = `${urlBase}/retenido`
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
    }

    const { msg } = alerta

  return (
    <>
     <Header className=""/>
   
    <div className='text-center'>
        <div className=' container'>
          <div className='cosoAmarillo m-3 p-3'>
            <h3 className='textoAmarillo'>Sigue tu envío o descarga tu carta para pago del impuesto del IVA</h3>
            <form
          className="rounded-lg"
          onSubmit={handleSubmit}
        >
          <div className="d-flex justify-content-center row text-center mx-auto">
            <div className="col-12">
                <input
                  id="cedula"
                  type='number'
                  placeholder='Ingresa tu Cédula'
                  className='mw-100 px-4 my-2 p-2 text-center border rounded-xl bg-gray-50'
                  value={cedula}
                  onChange={ e => setCedula(e.target.value)}  
                />
               
            </div>
            <div className="mt-3">
              <p><input type="checkbox" value="Acepto Términos y Condiciones" checked/>Acepto Términos y Condiciones</p>
            </div>
           
            </div>
            { msg && <Alerta alerta={alerta}/> }
          <div className="text-center mt-2">
           <input
              type='submit'
              value='Consultar'
              className='botonRojo py-2 m-auto px-12 text-white camelcase font-bold rounded-xl '
            />
          </div>

        </form>
      
          </div>
        </div> 
    </div>
    <Footer />
    </>
  )
}

export default Inicio