import EntradaDevocional from "./EntradaDevocional"
import styles from '../styles/Devocionales.module.css'
import { useState, useEffect } from "react"

const ListadoDevocionales = () => {

  const [ devocional, setDevocional ] = useState([])

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
        <div className={styles.listado}>
        {devocional.map( devocional => (
              <EntradaDevocional 
                key={devocional.id}
                devocional={devocional}
              />
            ))}
        </div>
    </>
  )
}

const ListadoDevocionalesMax = () => {
 
      const [ devocional, setDevocional ] = useState([])

      useEffect(() => {
        const consultarApi = async () => {
          try {
            const url = `http://localhost:1337/devocionales?_sort=createdAt:desc&_limit=6&`
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
            <div className={styles.listado}>
            {devocional.map( devocional => (
                  <EntradaDevocional 
                    key={devocional.id}
                    devocional={devocional}
                  />
                ))}
            </div>
        </>
      )
}

export {ListadoDevocionales, ListadoDevocionalesMax}
