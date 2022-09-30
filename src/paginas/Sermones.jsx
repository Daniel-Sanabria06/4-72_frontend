import { useEffect, useState } from "react"
import {ListadoSermones} from '../components/ListadoSermones'

const Sermones = () => {

  const [ sermon, setSermon ] = useState({})

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
        <main>
            <h2 className='heading mb-12'>Sermones</h2>
            <ListadoSermones
              entradasSermon={sermon}
            />
        </main>
    </>
  )
}


export default Sermones