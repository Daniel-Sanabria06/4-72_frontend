import { useEffect, useState } from "react"
import {ListadoDevocionales} from '../components/ListadoDevocionales'

const Devocionales = () => {

  const [ devocional, setDevocional ] = useState({})

  useEffect(() => {
    const consultarApi = async () => {
      try {
        const url = `http://localhost:1337/devocionales?_sort=createdAt:desc`
        const respuesta = await fetch(url)
        const entradasDevocional = await respuesta.json()
        setDevocional(entradasDevocional)
      } catch (error) {
        console.log(error)
      }
    }
    consultarApi()
  }, [])

  return (
    <>
        <main>
            <h2 className='heading mb-12'>Devocionales</h2>
            <ListadoDevocionales
              entradasDevocional={devocional}
            />
        </main>
    </>
  )
}


export default Devocionales