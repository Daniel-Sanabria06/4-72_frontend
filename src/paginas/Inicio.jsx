import useAuth from '../hooks/useAuth'
import { ListadoDevocionalesMax } from '../components/ListadoDevocionales'
import { ListadoSermonesMax } from '../components/ListadoSermones'
import { Link } from 'react-router-dom'
import {useEffect, useState} from 'react'
import Promocion from '../components/Promocion'
import imagenPredica from "/trigo.jpg"
import imagenLibros from '/imagenLibros.jpg'
import Spinner from '../components/Spinner'

const Inicio = ({devocional, sermon}) => {

    const Openbar = () => {
     document.querySelector('.sidebar').classList.toggle('left-[-350px]')
    }

    const [ cargando, setCargando ] = useState(true)
  
    const [ promocion, setPromocion ] = useState({}) 

    useEffect(() => {
      const consultarApi = async () => {
        try {
          const url = `http://localhost:1337/promocion`
          const respuesta = await fetch(url)
          const libros = await respuesta.json() 
          setPromocion(libros)
        } catch (error) {
          console.log(error)
        }
        setCargando(false)
      }
      consultarApi()
    }, [])

    const { auth } = useAuth()

    if(cargando) return <Spinner/>

  return (
    <div className='text-center'>
      <div>
        <Promocion
          promocion={promocion}
        />
      </div>
        <div className='container mx-auto mb-10'>
          <h2 className='heading my-12'>Devocionales</h2>
          <ListadoDevocionalesMax
            entradasDevocional={devocional}
          />
        </div> 
        <Link className="p-2.5 mx-auto text-center items-center rounded-md px-4 duration-300 cursor-pointer bg-sky-600 hover:bg-sky-500" to="/devocionales">
                <span className="text-2xl text-white">Ver Mas</span>
        </Link> 

        <div className=' mt-10 container mx-auto'>
        <div target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/user/GonzaloSanabria/videos' className={`shadow-xl  h-[20rem] z-0 aspect-video cursor-pointer rounded-xl relative group`}>
          <div className="rounded-xl z-50  cursor-pointer absolute to-transparent bg-gradient-to-r inset-x-0 my-6 sm:my-2 text-white flex-row"> 
          
                  <h1 className="font-bold text-5xl sm:text-3xl my-5 capitalize">Libros Cristianos</h1>
                  <p className={` text-lg w-[35rem] sm:w-[20rem] mx-auto my-8 font-bold `}>
                   Libros, folletos, compendios de diversos temas y estudios bíblicos, además de libros de sermones y bosquejos para predicar
                  </p>
                  <a className={`block uppercase font-bold border-solid border-2 border-sky-600 py-2 hover:bg-sky-600 rounded-lg w-[15rem] mx-auto`} target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/-/es/Gonzalo-Sanabria/e/B00ZYMPTSC">
                      Ver Libros
                  </a>      
                    
          </div>
          <img
              alt={`Imagen devocional`} 
              className='object-cover w-full h-[20rem] aspect-square group-hover:scale-102 transition duration-300 ease-in '
              src={imagenLibros}
          />
      </div>








        </div>  
        <div className='my-12 container mx-auto'>
          <h2 className='heading mb-12'>Sermones</h2>
          <ListadoSermonesMax
            entradasSermon={sermon}
          />
        </div> 

        <Link className="p-2.5 mx-auto text-center items-center  rounded-md px-4 duration-300 cursor-pointer bg-sky-600 hover:bg-sky-500" to="/sermones">
                <span className="text-2xl  text-white">Ver Mas</span>
        </Link>  

        <div className='mt-10 container mx-auto'>
        <div target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/user/GonzaloSanabria/videos' className={` shadow-xl  h-[20rem] z-0 w-[5rem]aspect-video cursor-pointer rounded-xl relative group`}>
          <div className="rounded-xl z-50  cursor-pointer absolute to-transparent bg-gradient-to-t inset-x-0 my-12 sm:my-2 text-white flex-row"> 
          
                  <h1 className="font-bold text-5xl my-5 capitalize">Prédicas en video</h1>
                  <p className={` text-lg w-[25rem] sm:w-[20rem] mx-auto my-8 font-bold `}>
                  Sermones en video que edificarán y fortalecerán tu fe en Cristo Jesús.
                  </p>
                  <a className={`block uppercase font-bold border-solid border-2 border-lime2 py-2 hover:bg-lime2  rounded-lg w-[15rem] mx-auto`} target="_blank" rel="noopener noreferrer" href='https://www.youtube.com/user/GonzaloSanabria/videos'>
                      Ver Prédicas
                  </a>      
                    
          </div>
          <img
              alt={`Imagen devocional`} 
              className='object-cover w-full h-[20rem] aspect-square group-hover:scale-102 transition duration-300 ease-in'
              src={imagenPredica}
          />
      </div>
        
        </div>
    </div>
  )
}

export default Inicio