import EntradaSermon from "./EntradaSermon"
import styles from '../styles/Devocionales.module.css'
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
        <div className={styles.listado}>
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
          <div className={styles.listado}>
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
