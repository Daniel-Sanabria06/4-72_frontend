import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { GiNotebook } from 'react-icons/gi'
import logo from '/Icono.png'

const sidebar = () => {

  const { auth, cerrarSesionAuth } = useAuth()

  const handleCerrarSesion = () => {
    cerrarSesionAuth()
    localStorage.removeItem('token')
}

  const Openbar = () => {
    document.querySelector('.sidebar').classList.toggle('left-[-350px]')
  }

  const dropDown = () => {
    document.querySelector('#submenu').classList.toggle('hidden')
    document.querySelector('#arrow').classList.toggle('rotate-180')
  }



    return (
      <div>
       
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600;800&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css" />
        <span className="absolute  text-black} text-5xl sm:top-8 top-5 left-3 cursor-pointer" onClick={Openbar}>
          <i className="bi bi-list  px-2 bg-white rounded-md" />
        </span>
        <div className="sidebar fixed top-0 bottom-0 z-10 left-[-350px] duration-3000
    p-2 w-[350px] overflow-y-auto text-center bg-gray-900 shadow h-screen">
          <div className="text-gray-100 text-xl">
            <div className="p-2.5 mt-1 flex items-center rounded-md ">
                  <Link to='/' className='cursor-pointer mx-auto items-center flex font-bold'>
                    <img
                      src={logo}
                      alt='biblia'
                      width='45rem'
                      height='45rem'
                      onClick={Openbar}
                    />
                    <label className='cursor-pointer font-bold'>Devocionales y  Sermones Cristianos</label>
                  </Link>  
                  <i className="bi bi-x ml-5 mr-5 w-[15px] cursor-pointer " onClick={Openbar}/>
                             
            </div>
            <hr className="my-2 text-gray-600" />
            <div>
              <div className="p-2.5 mt-3 flex items-center rounded-md 
        px-4 duration-300 cursor-pointer  bg-gray-700">
                <i className="bi bi-search text-sm" />
                <input className="text-[15px] ml-4 w-full bg-transparent focus:outline-none" placeholder="Serach" />
              </div>
              <Link onClick={Openbar} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-sky-600" to="/">
                  <i className="bi bi-house-door-fill" />
                  <span className="text-2xl ml-4 text-gray-200">Inicio</span>
              </Link>
              <Link onClick={Openbar} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-sky-600" to="/devocionales">
                <i className="bi bi-journal-text" />
                <span className="text-2xl ml-4 text-gray-200">Devocionales</span>
              </Link>
              <Link onClick={Openbar} className=" p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-sky-600" to="/sermones">
               <GiNotebook/> 
                <span className="text-2xl ml-4 text-gray-200">Sermones</span>
              </Link>

              <a className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-sky-600" target="_blank" rel="noopener noreferrer" href="https://www.amazon.com/-/es/Gonzalo-Sanabria/e/B00ZYMPTSC">   
                <i className="bi bi-book" />
                <span className="text-2xl ml-4 text-gray-200">Libros Cristianos</span>
              </a>

              {auth._id ? (
                <>
                  <Link onClick={Openbar} className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-sky-600" to="favoritos">
                    <i className="bi bi-bookmark-heart-fill" />
                    <span className="text-2xl ml-4 text-gray-200">Favoritos</span>
                  </Link>
                
                  <div className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-sky-600">
                    <i className="bi bi-person-circle" />
                    <div className="flex justify-between w-full items-center" onClick={dropDown}>
                      <span className="text-2xl ml-4 text-gray-200">{auth.nombre}</span>
                      <span className="text-sm rotate-180" id="arrow">
                        <i className="bi bi-chevron-down" />
                      </span>
                    </div>
                  </div>
                  <div className=" leading-7 text-left text-sm font-thin mt-2 w-4/5 mx-auto" id="submenu">
                    <Link onClick={Openbar} to='/olvide-password' className="block cursor-pointer p-2 hover:bg-gray-700 text-lg rounded-md mt-1">Cambiar Contraseña</Link>
                    
                  </div>
                  <div className="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-sky-600"  onClick={handleCerrarSesion}>
                    <i className="bi bi-box-arrow-in-right" />
                    <span className="text-2xl ml-4 text-gray-200">Cerrar Sesión</span>
                  </div>
                </> ) : <>
                    <Link onClick={Openbar}
                      className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-sky-600"
                      to='/login'>
                      <span className="text-2xl ml-4 text-gray-200">Iniciar Sesión</span>         
                    </Link>
                    <Link onClick={Openbar}
                      className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-sky-600"
                      to='/registrar'>
                      <span className="text-2xl ml-4 text-gray-200">Registrarse</span>          
                    </Link>                   
                </> }
                <Link onClick={Openbar}
                  className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-sky-600"
                  to='/nosotros'>
                  <i className="bi bi-people-fill" />
                  <span className="text-2xl ml-4 text-gray-200">Nosotros</span>          
                </Link> 
                <a onClick={Openbar} href='https://www.paypal.com/paypalme/DSan4bria' className="p-2.5 mt-2 flex items-center rounded-md px-4 duration-300 cursor-pointer  hover:bg-sky-600" target="_blank" rel="noopener noreferrer">   
                    <i className="bi bi-paypal" />
                    <span className="text-2xl ml-4 text-gray-200">Donaciones</span>
                </a>
              
            </div>
          </div>
        </div>
      </div>
    );
  }


export default sidebar