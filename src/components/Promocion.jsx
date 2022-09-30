import styles from "../styles/Libros.module.css"
import imagenLibros from '/imagenLibros.jpg'

const Promocion = ({promocion}) => {

    const {titulo, contenido, enlace} = promocion

  return (
    <section className="lg:scale-110 py-20 lg:py-8">
    <div className={` ${styles.grid}`}>
        <div className={styles.contenido}>
            <h2 className='text-white font-bold text-5xl lg:text-3xl'>{titulo}</h2>
            <p className='text-white p-2 font-semibold text-xl m-5'>{contenido}</p>
            <a className={`rounded-md text-xl lg:text-sm font-bold ${styles.enlace}`} target="_blank" rel="noopener noreferrer" href={enlace}>
                Más información
            </a>
        </div>
    </div>
    <style>{`
            section {
                background-image: linear-gradient(to right, rgb(0 0 0 /.0), rgb(0 0 0 /.2), rgb(0 0 0 /.6)),
                url(${imagenLibros});
                background-size: cover;
                background-position: 50%;  
            }
        `}</style>
    </section>
  )
}

export default Promocion