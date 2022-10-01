import { formatearFecha } from "../helpers"
import { Link } from 'react-router-dom'


const EntradaDevocional = ({devocional})=> {

   const { titulo, resumen, imagen, published_at, id, slug } = devocional
   
  return (
    <>     
      <Link to={`/devocionales/${slug}`} className="shadow-xl overflow-hidden z-0 aspect-video cursor-pointer rounded-xl relative group">
          <div className="rounded-xl z-50 lg2:opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/90 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 px-5 text-white flex items-end">
              <div>
                  <div
                      className="transform-gpu space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 lg2:translate-y-4 lg2:pb-16 lg:pb-12  transition duration-300 ease-in-out text-center flex-row my-auto"
                  >
                      <div className="font-bold text-2xl my-5 capitalize">{titulo}</div>

                      <div className={` text-sm  font-semibold my-5 overflow-hidden`}>
                       {resumen}
                      </div>
                      <p className='text-sky-400 my-3 rounded-md uppercase font-semibold text-xs'>{formatearFecha(published_at)}</p>
                  </div>
              </div>
          </div>
          <img
              alt={`Imagen devocional ${titulo}`} 
              className="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
              src={imagen.url}
          />
      </Link>
    </>
  )
}

export default EntradaDevocional