import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import clienteAxios from "../config/clienteAxios"
import Alerta from "../components/Alerta"

const NuevoPassword = () => {

  const [ tokenValido, setTokenValido] = useState(false)
  const [ password, setPassword ] = useState('')
  const [ alerta, setAlerta ] = useState({})
  const [ passwordModificado, setPasswordModificado] = useState(false)
  const params = useParams()
  const { token } = params

  useEffect(() => {
    const comprobarToken = async () => {
      try {
        await clienteAxios(`/usuarios/olvide-password/${token}`)
        setTokenValido(true)
      } catch (error) {
        setAlerta({
          msg: error.response.data.msg,
          error: true
        })
      }
    }
    comprobarToken()
  }, [])



  const handleSubmit = async e => {
    e.preventDefault()

    if(password.length < 6 ) {
      setAlerta({
        msg: 'La Contraseña es muy corta, agrega mínimo 6 caracteres',
        error: true
      })
      return
    }

    try {
      const url = `/usuarios/olvide-password/${token}`
      const { data } = await clienteAxios.post( url, { password } )
      setAlerta({
        msg: data.msg,
        error: false
      })
      setPasswordModificado(true)
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
    <h1 className="text-gray-700 text-center font-bold text-4xl m-auto capitalize">Reestablece tu contraseña</h1>
    
    { msg && <Alerta alerta={alerta}/> }

    { tokenValido && (
      <form 
        className="my-10 bg-white shadow rounded-lg p-10" 
        onSubmit={handleSubmit}>
      <div className="my-5">
         <label className="uppercase text-gray-600 block text-xl font-bold" htmlFor="password">Nueva Contraseña:</label>
         <input
           id="password"
           type='password'
           placeholder=' Escribe Tu Nueva Contraseña'
           className='w-full mt-3 p-3 border rounded-xl bg-gray-50'
           value={password}
           onChange={ e => setPassword(e.target.value)}
          />
     </div>
   
     <input
       type='submit'
       value='Guardar Nueva Contraseña'
       className='bg-sky-600 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-sky-800 transition-colors'
     />
   </form>
    )}

  </div>
  )
}

export default NuevoPassword
