import styles from '../Styles/Nosotros.module.css'
import nosotros from '/nosotros.jpg'

const Nosotros = () => {
  return (
    <main className='contenedor p-5'>
    <h2 className='heading'>Sobre Nosotros</h2>

    <div className={styles.contenido}>

        <img
            src={nosotros}
            alt='foto pastores'
            width='500'
            height='500'
        />

      <div>
        <p className='text-2xl mt-20'>Gonzalo Sanabria nació en 1972. Colombiano. Estudio Ciencias religiosas y Teología. Certificado en Biblia y ministerio. Durante veinte años ha ejercido su servicio en la iglesia cristiana. Ha publicado más de 150 libros en Amazon.com - Dirige actualmente el ministerio: Vida y Restauración para las Naciones. Profesor Online de la Universidad Jiliu de Miami. Ha escrito una diversidad de textos, seminarios y escuelas para la capacitación de líderes y ministros cristianos. Publica con frecuencia en su sitio web: www.estudiosysermones.com el cual es visitado por miles de personas cada día.<br/><br/>

        Gonzalo Sanabria was born in 1972. Colombian. I study religious sciences and theology. For twenty years he has served in the Christian church. With his wife Andrea he currently directs the ministry: Life and Restoration for the Nations. Online professor at Jiliu University in Miami. He has carried the word of God through more than one hundred and fifty books published on Amazon.com</p>
      </div>
    </div>

</main>
  )
}

export default Nosotros