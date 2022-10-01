import nosotros from '/nosotros.jpg'

const Nosotros = () => {
  return (
    <main className='contenedor p-5'>
    <h2 className='heading'>Sobre Nosotros</h2>

    <div className='grid sm:flex sm:flex-col sm2:gap-12 mt-20 grid-cols-2'>

        <img
            className='m-auto lg22:w-[20rem] lg22:h-[28rem]'
            src={nosotros}
            alt='foto pastores'
            width='500'
            height='500'
        />

      <div>
        <p className='text-2xl sm:mt-12'>Gonzalo Sanabria nació en 1972. Colombiano. Estudio Ciencias religiosas y Teología. Certificado en Biblia y ministerio. Durante veinte años ha ejercido su servicio en la iglesia cristiana. Ha publicado más de 150 libros en Amazon.com - Dirige actualmente el ministerio: Vida y Restauración para las Naciones. Profesor Online de la Universidad Jiliu de Miami. Ha escrito una diversidad de textos, seminarios y escuelas para la capacitación de líderes y ministros cristianos. Publica con frecuencia en su sitio web: www.estudiosysermones.com el cual es visitado por miles de personas cada día.</p>
      </div>
    </div>

</main>
  )
}

export default Nosotros