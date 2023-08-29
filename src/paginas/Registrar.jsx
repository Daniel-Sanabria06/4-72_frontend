import { useState } from "react"
import { Link} from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/clienteAxios"
import Spinner from "../components/Spinner"

import Header from '../components/Header'
import Footer from '../components/Footer'

const Registrar = () => {
 
  const [ nombre, setNombre ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ celular, setCelular ] = useState('')
  const [ ciudad, setCiudad ] = useState('')
  const [ direccion, setDireccion ] = useState('')
  /*
  const [ banco, setBanco ] = useState('')
  const [ tarjeta, setTarjeta ] = useState('')
  const [ mes, setMes ] = useState('')
  const [ año, setAño ] = useState('')
  const [ cvv, setCvv ] = useState('')
 /* const [ password, setPassword ] = useState('')
  const [ repetirPassword, setRepetirPassword] = useState('')*/
  const [ alerta, setAlerta ] = useState({})


  const handleSubmit = async e => {
    e.preventDefault()
    if([ nombre, email, celular, ciudad, direccion/*, banco, tarjeta, mes, año, cvv*/].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }
/*
    if(password !== repetirPassword) {
      setAlerta({
        msg: 'Las Contraseñas No Son Iguales',
        error: true
      })
      return
    }
*/


    if(celular.length < 10 ) {
      setAlerta({
        msg: 'Agrega un Númermo de Celular Válido',
        error: true
      })
      return
    }
/*
    if(tarjeta.length < 15 ) {
      setAlerta({
        msg: 'Agrega una Tarjeta Válida',
        error: true
      })
      return
    }

    if(cvv.length < 3 ) {
      setAlerta({
        msg: 'Agrega un Cvv Válido',
        error: true
      })
      return
    }

    /*if(password.length < 6 ) {
      setAlerta({
        msg: 'La Contraseña es muy corta, agrega mínimo 6 caracteres',
        error: true
      })
      return
    }*/

    setAlerta({})

    //Creando el usuario en la API
    try {
      const { data } = await clienteAxios.post(`/usuarios`, {nombre, email,  celular, ciudad, direccion/*, banco, tarjeta, mes, año, cvv*/})
      setAlerta({
        msg: data.msg,
        error: false
      })

      setNombre('')
      setEmail('')
      setCelular('')
      setCiudad('')
      setDireccion('')
     /* setBanco('')
      setTarjeta('')
      setMes('')
      setAño('')
      setCvv('')
*/
     
      const urlBase = window.location.origin
      window.location = `${urlBase}/pago`

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
    <Header className="my-5"/>
   
    <div className='my-2 text-center'>
      <p className="mx-5 bg-blue-300 p-3 rounded-lg text-cyan-900">Ingrese la siguiente información para realizar el despacho del paquete que está pendiente por entregar</p>
        <h2 className="text-gray-700 text-center mt-5 font-bold text-2xl m-auto uppercase">Información de entrega</h2>
        <form 
          className="mt-2 mb-3 bg-white shadow rounded-lg p-8"
          onSubmit={handleSubmit}
        >
          
          <div className="lg2:flex gap-15">
            <div className="my-1  mx-auto">
                <label className="uppercase text-gray-600 text-center block text-xl font-bold" htmlFor="nombre">Nombre Completo:</label>
                <input
                  id="nombre"
                  type='text'
                  placeholder=''
                  className='w-full mt-3 p-3 px-8 text-center border rounded-xl bg-gray-50'
                  value={nombre}
                  onChange={ e => setNombre(e.target.value)}  
                />
            </div>

           
          </div>
          <div className="lg2:flex gap-15">
          <div className="my-5  mx-auto">
                <label className="uppercase text-center text-gray-600 block text-xl font-bold" htmlFor="email">Correo Electrónico:</label>
                <input
                  id="email"
                  type='email'
                  placeholder=''
                  className='w-full mt-3 p-3 px-8 text-center border rounded-xl bg-gray-50'
                  value={email}
                  onChange={ e => setEmail(e.target.value)}    
                />
            </div>

          <div className="my-5  mx-auto">
                <label className="uppercase text-gray-600 text-center block text-xl font-bold" htmlFor="celular">Celular:</label>
                <input
                  id="celular"
                  type='number'
                  placeholder=''
                  className='w-full mt-3 p-3 px-8 text-center border rounded-xl bg-gray-50'
                  value={celular}
                  onChange={ e => setCelular(e.target.value)}  
                />
            </div>
             </div>
          
       

             <div className="lg2:flex gap-15">
          <div className="my-5  mx-auto">
                <label className="uppercase text-center text-gray-600 block text-xl font-bold" htmlFor="ciudad">Ciudad:</label>
                <input
                  id="ciudad"
                  type='text'
                  placeholder=''
                  className='w-full mt-3 p-3 px-8 text-center border rounded-xl bg-gray-50'
                  value={ciudad}
                  onChange={ e => setCiudad(e.target.value)}    
                />
            </div>

          <div className="my-5  mx-auto">
                <label className="uppercase text-gray-600 text-center block text-xl font-bold" htmlFor="direccion">Dirección:</label>
                <input
                  id="direccion"
                  type='text'
                  placeholder=''
                  className='w-full mt-3 p-3 px-8 text-center border rounded-xl bg-gray-50'
                  value={direccion}
                  onChange={ e => setDireccion(e.target.value)}  
                />
            </div>
             </div>


{/* 


         <h1 className="text-gray-700 text-center my-5 font-bold text-4xl m-auto uppercase">Información de Pago</h1>
    
          
          <div className="lg2:flex gap-15">


          <div className="my-5  mx-auto">
            
              <label className="uppercase text-gray-600 text-center block text-xl font-bold" htmlFor="banco">Selecciona Tu banco:</label>
              
           
              <input className="form-control" list="datalistOptions1" id="exampleDataList1" placeholder="---Seleccione---"
                value={banco}
                onChange={ e => setBanco(e.target.value)} 
              />
               <datalist id="datalistOptions1">
                <option value="BANCO AGRARIO"/>
                <option value="BANCO AV VILLAS"/>
                <option value="BANCO BBVA"/>
                <option value="BANCO CAJA SOCIAL"/>
                <option value="BANCO CITIBANK"/>
                <option value="BANCO COLPATRIA"/>
                <option value="BANCO CORPBANCA"/>
                <option value="BANCO DAVIVIENDA"/>
                <option value="BANCO DE BOGOTA"/>
                <option value="BANCO DE OCCIDENTE"/>
                <option value="BANCO FALABELLA"/>
                <option value="BANCO FINANDINA S.A"/>
                <option value="BANCO GANADERO"/>
                <option value="BANCO GNB SUDAMERIS"/>
                <option value="BANCO HSBC COLOMBIA"/>
                <option value="BANCO ITAU"/>
                <option value="BANCO PICHINCHA S.A"/>
                <option value="BANCO POPULAR"/>
                <option value="BANCO SANTANDER COLOMBIA"/>
                <option value="BANCOLOMBIA"/>
                <option value="BANCOOMEVA S.A"/>
                <option value="CREDIBANCO - ASOCIACION GREMIAL DE INSTITUCIONES FINANCIERAS"/>
                <option value="HELM BANK"/>
                <option value="NUBANK"/>
                <option value="RAPPI"/>
                <option value="REDEBAN MULTICOLOR"/>
                <option value="SCOTIABANCK COLPATRIA"/>
                <option value="SERFINANSA - SERVICIOS FINANCIEROS"/>
                <option value="SERVIBANCA"/>
                <option value="TUYA"/>
                <option value="OTRO"/>
              </datalist>
          </div>

            <div className="my-5  mx-auto">
                <label className="uppercase text-gray-600 text-center block text-xl font-bold" htmlFor="tarjeta">Tarjeta:</label>
                <input
                  id="tarjeta"
                  type='number'
                  placeholder=''
                  className='w-full mt-3 p-3 px-8 text-center border rounded-xl bg-gray-50'
                  value={tarjeta}
                  onChange={ e => setTarjeta(e.target.value)}  
                />
            </div>
          </div>

          <div className="lg2:flex gap-15">
            <div className="my-5  mx-auto">

                <label className="uppercase text-gray-600 text-center block text-xl font-bold" htmlFor="mes">Mes:</label>
                <input className="form-control" list="datalistOptions2" id="exampleDataList2" placeholder="---Seleccione---"
                value={mes}
                onChange={ e => setMes(e.target.value)} 
              />
              <datalist id="datalistOptions2">
                <option value="Enero"/>
                <option value="Febrero"/>
                <option value="Marzo"/>
                <option value="Abril"/>
                <option value="Mayo"/>
                <option value="Junio"/>
                <option value="Julio"/>
                <option value="Agosto"/>
                <option value="Septiembre"/>
                <option value="Octubre"/>
                <option value="Noviembre"/>
                <option value="Diciembre"/>
              </datalist>
                </div>

                <div className="my-5  mx-auto">
              <label className="uppercase text-gray-600 text-center block text-xl font-bold" htmlFor="año">Año:</label>
                <input className="form-control" list="datalistOptions3" id="exampleDataList3" placeholder="---Seleccione---"
                value={año}
                onChange={ e => setAño(e.target.value)} 
              />
              <datalist id="datalistOptions3">
                <option value="2023"/>
                <option value="2024"/>
                <option value="2025"/>
                <option value="2026"/>
                <option value="2027"/>
                <option value="2028"/>
                <option value="2029"/>
                <option value="2030"/>
                <option value="2031"/>
                <option value="2032"/>
                <option value="2033"/>
                <option value="2034"/>
                <option value="2035"/>
              </datalist>
            </div>
          </div>

          <div className="lg2:flex gap-15">
              <div className="my-5  mx-auto">

              <label className="uppercase text-gray-600 text-center block text-xl font-bold" htmlFor="cvv">Cvv:</label>
                <input
                  id="cvv"
                  type='number'
                  placeholder=''
                  className='w-full mt-3 p-3 px-8 text-center border rounded-xl bg-gray-50'
                  value={cvv}
                  onChange={ e => setCvv(e.target.value)}  
                />
                
          </div>
           
          </div>
         
         <hr />

       {/*  <div className="row text-center">
          <div className="col-6">
            <p>Subtotal:</p>
          </div>
          <div className="col-6">
            <p>$6.600</p>
          </div>
          <div className="col-6">
            <p>Transporte:</p>
          </div>
          <div className="col-6">
            <p>$8.900</p>
          </div>
          <div className="col-6">
            <p>Total:</p>
          </div>
          <div className="col-6">
            <p>$15.500</p>
          </div>
         </div>
         */} 
          { msg && <Alerta alerta={alerta}/> }
          <div className="text-center mt-2">
            <input
              type='submit'
              value='Continuar'
              className='botonRojo py-2 m-auto px-12 text-white camelcase font-bold rounded-xl'
            />
          </div>

        </form>

      
    </div>
    <Footer className="my-5"/>
    </>
  )
}

export default Registrar
