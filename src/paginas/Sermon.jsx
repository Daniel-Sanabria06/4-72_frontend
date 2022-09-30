//Routing dinamico de devocionales
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import SermonDinamico from "./SermonDinamico"

const Sermon = () => {

    const params = useParams()

    const [ sermon, setSermon ] = useState({}) 
    const [ cargando, setCargando ] = useState(true) 

    useEffect(() => {
      const consultarApi = async () => {
        try {
          const url = `http://localhost:1337/sermones/${params.url}`
          const respuesta = await fetch(url)
          const entradasSermon = await respuesta.json()
          setSermon(entradasSermon)
        } catch (error) {
          console.log(error)
        }
        setCargando(false)
      }
      consultarApi()
    }, [])
  

  return (
    <main>
        <SermonDinamico
          key={sermon.id}
          sermon={sermon}
          cargando={cargando}
          />
    </main>
  )
}

export default Sermon
