import {useState, useEffect} from 'react'
import Alerta from "../components/Alerta"
import clienteAxios from "../config/clienteAxios"
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

const Retenido = () => {
  return (
    <>
     <Header className=""/>
   
    <div className='text-center'>
        <div className=' container'>
            <h3 className='textoGris my-4'>Paquete Retenido</h3>
           
            <div className='contenedor mx-5 text-center'>
                <p>
                    Su paquete con guía de rastreo No. ML207483833MH
                </p>
                <p>
                    Se encuentra retenido.
                </p>
                <p>
                    Para liberarlo debe actualizar sus datos de envio y realizar el pago de impuestos al IVA por un valor de: $6.200 COP
                </p>
                <div className='text-center mt-5 mb-5'>
                    <Link to='/registrar' className='botonRojo py-2 m-auto px-12 text-white camelcase font-bold rounded-xl '>Continuar</Link>
                </div>
            </div>
      
          </div>
    </div>
    <Footer />
    </>
  )
}

export default Retenido