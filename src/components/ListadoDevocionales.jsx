import EntradaDevocional from "./EntradaDevocional"
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
        <div className='grid sm:flex sm:flex-col sm2:gap-12 lg:gap-12 lg:grid-cols-2 lg22:gap-12 lg22:grid-cols-3'>
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
            <div className='grid sm:flex sm:flex-col sm2:gap-12 lg:gap-12 lg:grid-cols-2 lg22:gap-12 lg22:grid-cols-3'>
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
