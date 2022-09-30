import { FaAmazon } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import styles from '../Styles/Footer.module.css'
import { Link } from "react-router-dom";

const Footer = () => {
	//TODO: cambiar los libros del footer
  return (
    <>
       <div className="bg-gray-50 h-1/2 lg2:mt-12 w-full flex md2:flex-row flex-col justify-around items-start">
				<div className="p-5 ">
					<ul>
						<span className="text-gray-800 font-semibold text-3xl pb-6">
							Síguenos en Nuestras <hr/> <span className={styles.span}>Redes Sociales</span>
						</span>
						<div className={`flex my-5 ${styles.iconos}`}>
							<a href="https://www.amazon.com/-/es/Gonzalo-Sanabria/e/B00ZYMPTSC" target="_blank" rel="noopener noreferrer">
								<FaAmazon className="text-4xl cursor-pointer hover:text-sky-600"/>
							</a>

							<a href="https://www.facebook.com/GonzaloyAndreaSanabria" target="_blank" rel="noopener noreferrer">
								<FaFacebook className="text-4xl cursor-pointer hover:text-sky-600"/>
							</a>
		
							<a href="https://www.youtube.com/user/GonzaloSanabria/videos" target="_blank" rel="noopener noreferrer">
								<FaYoutube className="text-4xl cursor-pointer hover:text-sky-600"/>
							</a>
							<a href="mailto:pastorgonzalosanabria1@gmail.com">
								<CgMail className="text-4xl cursor-pointer hover:text-sky-600"/>
							</a>
						</div>
					</ul>
				</div>

                
				<div className="p-5">
					<ul>
						<p className={` font-bold text-3xl gap-5 pb-4 ${styles.texto}`}>
							<a className=" text-md pb-2 font-semibold hover:text-primary cursor-pointer" href="https://www.amazon.com/-/es/Gonzalo-Sanabria/e/B00ZYMPTSC" target="_blank" rel="noopener noreferrer">Libros Cristianos</a>
						</p>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-sky-600 cursor-pointer">
							<a href="https://www.amazon.com/-/es/gp/product/B07JBC6WW8/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i1" target="_blank" rel="noopener noreferrer">75 Sermones para estudiar y predicar</a>
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-sky-600 cursor-pointer">
							<a href="https://www.amazon.com/-/es/gp/product/B07WHFDXKW/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i0" target="_blank" rel="noopener noreferrer">Reflexiones y sermones que fortalecen<br/> la fe del cristiano</a>
						</li>
						<li className="text-gray-500 text-md pb-2 font-semibold hover:text-sky-600 cursor-pointer">
							<a href="https://www.amazon.com/-/es/gp/product/B07C42HSMP/ref=dbs_a_def_rwt_hsch_vapi_tkin_p1_i6" target="_blank" rel="noopener noreferrer">Sermones Cristianos: Para predicar el domingo</a>
						</li>
					</ul>
				</div>
				<div className="p-5">
					<ul>

					<p className={` font-bold text-3xl pb-4 ${styles.texto}`}>
							<a className=" text-md pb-2 font-semibold cursor-pointer" href="http://feedburner.google.com/fb/a/mailverify?uri=MensajesYSermonesParaPredicar&loc=es_ES" target="_blank" rel="noopener noreferrer">Recibe nuestros devocionales por correo electrónico</a>
					</p>	

					<a className="text-gray-500 text-md pb-2 font-semibold hover:text-primary cursor-pointer" href="http://feedburner.google.com/fb/a/mailverify?uri=MensajesYSermonesParaPredicar&loc=es_ES" target="_blank" rel="noopener noreferrer">
							<CgMail className="text-5xl m-auto cursor-pointer hover:text-sky-600"/>
							<br/>
					</a>
					<div className='flex'>
					<p className={`m-auto font-bold text-3xl pb-4 ${styles.texto}`}>
							<Link className=" text-md pb-2 font-semibold hover:text-sky-600 cursor-pointer" to="/nosotros">Nosotros</Link>
					</p>
					<a href={`https://www.paypal.com/paypalme/DSan4bria`}
					className={`text-md pb-2  font-semibold hover:text-sky-600 cursor-pointer m-auto ${styles.texto}`} target="_blank" rel="noopener noreferrer">
						<span className="text-3xl ml-2 ">Donaciones</span>
					</a>
					</div>
					
					</ul>
				</div>
				
			</div>
			<div className="flex flex-col justify-center items-center text-center  p-5 bg-gray-50">
				<h1 className=" text-gray-800 font-semibold">
					© 2022 | All rights reserved
				</h1>
			</div>
		</>
	);
}

export default Footer;