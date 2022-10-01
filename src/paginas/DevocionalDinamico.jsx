import { formatearFecha } from "../helpers"
import ReactMarkdown from 'react-markdown'
import Spinner from '../components/Spinner'

const DevocionalDinamico = ({devocional, cargando})=> {
 
 const { titulo, contenido, imagen, published_at, id, slug} = devocional

 if(cargando) return <Spinner/>
 
 return (
    <article className='my-5'>
      
        <h3 className='heading capitalize'>{titulo}</h3>
        <div className='mx-12 mt-2'>
          <img  
            className='my-8 rounded-lg mx-auto'
            layout='responsive' 
            width='400px'
            src={imagen.url} 
            alt={`Imagen devocional ${titulo}`}
          />  
          <p className='text-sky-600 my-4 text-center rounded-md uppercase font-bold text-xs'>{formatearFecha(published_at)}</p> 
        </div>
        <div className='whitespace-pre-wrap font-normal mt-12 text-xl'>
                 <ReactMarkdown>{contenido}</ReactMarkdown>
        </div>
    </article>
  )
}

export default DevocionalDinamico
