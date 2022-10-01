import imagenLibros from '/imagenLibros.jpg'

const Promocion = ({promocion}) => {

    const {titulo, contenido, enlace} = promocion

  return (
    <section className="lg:scale-110 py-20 lg:py-8 hover:scale-102 transition duration-300 ease-in">
    <div className=''>
        <div className='flex flex-col items-center'>
            <h2 className='text-white font-bold text-5xl lg:text-3xl'>{titulo}</h2>
            <p className='text-white p-2 font-semibold lg2:px-52 text-xl m-5'>{contenido}</p>
            <a className={`uppercase text-white font-bold border-solid border-2 border-sky-600 p-3 hover:bg-sky-600 text-base rounded-lg lg:text-sm`} target="_blank" rel="noopener noreferrer" href={enlace}>
                Más información
            </a>
        </div>
    </div>
    <style>{`
            section {
                background-image: linear-gradient(to right, rgb(0 0 0 /.0), rgb(0 0 0 /.4), rgb(0 0 0 /.4), rgb(0 0 0 /.0)),
                url(${imagenLibros});
                background-size: cover;
                background-position: 50%;  
            }
        `}</style>
    </section>
  )
}

export default Promocion