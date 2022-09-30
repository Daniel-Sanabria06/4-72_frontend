import styles from '../styles/Entrada.module.css'
import { formatearFecha } from "../helpers"
import { Link } from 'react-router-dom'


const EntradaSermon = ({sermon})=> {

   const { titulo, resumen, imagen, published_at, id, slug } = sermon
   
  return (
    <>     
      <Link to={`/sermones/${slug}`} className="shadow-xl overflow-hidden z-0 aspect-video cursor-pointer rounded-xl relative group">
          <div className="rounded-xl lg2:opacity-0 z-50 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/90 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 px-5 text-white flex items-end">
              <div>
                  <div
                      className="transform-gpu space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 lg2:translate-y-4 lg2:pb-10 lg:pb-14  transition duration-300 ease-in-out text-center flex-row"
                  >
                      <div className="font-bold text-2xl my-1 capitalize">{titulo}</div>

                      <div className={`text-xs font-semibold ${styles.resumen}`}>
                       {resumen}
                      </div>
                      <p className='text-sky-400 mt-3 rounded-md uppercase font-bold text-xs'>{formatearFecha(published_at)}</p>
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

export default EntradaSermon



{/*
<Link to={`/devocionales/${slug}`} class="overflow-hidden  aspect-video  cursor-pointer rounded-xl relative group">
    <div class="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/80 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
        <div>
            <div
                class="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10 transform transition duration-300 ease-in-out"
            >
                <div class="font-bold">{titulo}</div>

                <div class="opacity-60 text-sm ">
                  {resumen}
                  <p className='text-sky-600 my-4 rounded-md uppercase font-bold text-xs'>{formatearFecha(published_at)}</p>
                </div>
            </div>
        </div>
    </div>
    <img
        alt={`Imagen devocional ${titulo}`} 
        class="object-cover w-full aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
        src={imagen.url}
    />
</Link>

*/}