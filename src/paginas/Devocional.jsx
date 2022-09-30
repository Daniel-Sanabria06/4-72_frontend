//Routing dinamico de devocionales
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import DevocionalDinamico from "./DevocionalDinamico"

const Devocional = () => {

    const params = useParams()

    const [ devocional, setDevocional ] = useState({}) 
    const [ cargando, setCargando ] = useState(true) 
    

    useEffect(() => {
      const consultarApi = async () => {
        try {
          const url = `http://localhost:1337/devocionales/${params.url}`
          const respuesta = await fetch(url)
          const entradasDevocional = await respuesta.json()
          setDevocional(entradasDevocional)
      
        } catch (error) {
          console.log(error)
        }
        setCargando(false)
      }
      consultarApi()
    }, [])
  

  return (
    <main>
        <DevocionalDinamico
          key={devocional.id}
          devocional={devocional}
          cargando={cargando}
          />
    </main>
  )
}

export default Devocional
