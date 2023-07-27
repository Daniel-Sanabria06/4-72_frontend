import { FaAmazon } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";
import logo from '/logoFooter.png'

const Footer = () => {
	//TODO: cambiar los libros del footer
  return (
    <>
       <div className="footer h-1/2 lg2:mt-12 w-full flex md2:flex-row flex-col justify-around items-start">
				<div className="p-5 ">
					<ul>
						<span className="textoFooter">
						Sede principal:
						</span>
						<p className="cajonFooter mt-5">
						Diagonal 25 G # 95 A 55, Bogotá - Colombia - Código postal: 11091

						Sede Administrativa: (+57) (601) 472 2005

						Canales físicos y electrónicos para atención al público

						Puedes denunciar en Línea anticorrupción: (+57) (601) 4722005 Opciones 6 y luego *

						Línea gratuita: 01 8000 111 210

						Contact Center: (+57) (601) 472 2000

						Servicio al cliente: servicioalcliente@4-72.com.co

						Notificaciones judiciales: notificaciones.judiciales@4-72.com.co
						</p>
						<Link to='/' className='cursor-pointer text-center my-5'>
							<img
								src={logo}
								alt='logo'
								width='250rem'
								height='250rem'
								className="mx-auto my-5"
							/>
                		</Link>
						<p className="text-white text-center">
							© 2023 | All rights reserved
						</p>
					</ul>
				</div>

                </div>
			
		</>
	);
}

export default Footer;