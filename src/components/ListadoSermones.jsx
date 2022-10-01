import EntradaSermon from "./EntradaSermon"
import { useState, useEffect } from "react"

const ListadoSermones = () => {

  const [ sermon, setSermon ] = useState([])

  useEffect(() => {
    const consultarApi = async () => {
      try {
        const url = `http://localhost:1337/sermones?_sort=createdAt:desc`
        const respuesta = await fetch(url)
        const entradasSermon = await respuesta.json()
        setSermon(entradasSermon)
      } catch (error) {
        console.log(error)
      }
    }
    consultarApi()
  }, [])

  return (
    <>
        <div className='grid sm:flex sm:flex-col sm2:gap-12 lg:gap-12 lg:grid-cols-2 lg22:gap-12 lg22:grid-cols-3'>
        {sermon.map( sermon => (
              <EntradaSermon
                key={sermon.id}
                sermon={sermon}
              />
            ))}
        </div>
    </>
  )
}

const ListadoSermonesMax = () => {

    const [ sermon, setSermon ] = useState([])

    useEffect(() => {
      const consultarApi = async () => {
        try {
          const url = `http://localhost:1337/sermones?_sort=createdAt:desc&_limit=6&`
          const respuesta = await fetch(url)
          const entradasSermon = await respuesta.json()
          setSermon(entradasSermon)
        } catch (error) {
          console.log(error)
        }
      }
      consultarApi()
    }, [])

    return (
      <>
          <div className='grid sm:flex sm:flex-col sm2:gap-12 lg:gap-12 lg:grid-cols-2 lg22:gap-12 lg22:grid-cols-3'>
          {sermon.map( sermon => (
                <EntradaSermon
                  key={sermon.id}
                  sermon={sermon}
                />
              ))}
          </div>
      </>
    )
}

export { ListadoSermones, ListadoSermonesMax}
