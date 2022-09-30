import styles from "../styles/Predicas.module.css"
import imagenPredica from "/trigo.jpg"
import { Link } from "react-router-dom"

const Predicas = () => {

  return (
    <section >
        <Link to='https://www.youtube.com/user/GonzaloSanabria/videos' className="overflow-hidden h-[16rem] z-0 w-[5rem]aspect-video cursor-pointer rounded-xl relative group">
          <div className="rounded-xl z-50 opacity-0 group-hover:opacity-100 transition duration-300 ease-in-out cursor-pointer absolute from-black/70 to-transparent bg-gradient-to-t inset-x-0 -bottom-2 pt-30 text-white flex items-end">
              <div>
                  <div
                      className="transform-gpu  p-4 space-y-3 text-xl group-hover:opacity-100 group-hover:translate-y-0 translate-y-4 pb-10  transition duration-300 ease-in-out text-center flex-row"
                  >
                      <div className="font-bold text-3xl my-5 capitalize">pa</div>

                      <div className={`opacity-90 text-sm my-5 font-semibold ${styles.resumen}`}>
                       resumen
                      </div>
                  </div>
              </div>
          </div>
          <img
              alt={`Imagen devocional`} 
              className="object-cover w-full h-[5rem] aspect-square group-hover:scale-110 transition duration-300 ease-in-out"
              src={imagenPredica}
          />
      </Link>
    </section>
  )
}

export default Predicas