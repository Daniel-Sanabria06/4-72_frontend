import styles from '../styles/Header.module.css'
import { Link } from 'react-router-dom'
import useAuth from '../hooks/useAuth';
import Sidebar from './Sidebar';
import logo from '/Icono.png'

const Header = () => {

    const { auth, cerrarSesionAuth } = useAuth()

    const handleCerrarSesion = () => {
        cerrarSesionAuth()
        localStorage.removeItem('token')
    }

  return (
    <header>
        <Sidebar/>
        <div className="px-4 py-5 sm:p-7 lg:p-9  bg-white border-b">
            <div className="flex justify-between">
                  <Link to='/' className='cursor-pointer flex mx-auto items-center  font-bold'>
                    <img
                      src={logo}
                      alt='biblia'
                      width='45rem'
                      height='45rem'
                      className="sm:absolute sm:w-[3.5rem] sm:top-7 sm:right-4 cursor-pointer lg:hidden "
                    />
                    <h2 className='lg:text-3xl sm:text-base sm:w-[10rem] sm:m-auto ml-5 text-4xl text-sky-600 font-black text-center'>Devocionales y  Sermones Cristianos</h2>
                    <img
                      src={logo}
                      alt='biblia'
                      width='45rem'
                      height='45rem'
                      className="lg:absolute lg:w-[3.5rem] lg:top-7 lg:right-4 cursor-pointer lg2:hidden"
                    />
                  </Link>

                <div className='flex items-center gap-4'>
                
                {auth._id ? (
                     <button
                        type='button'
                        className='text-white text-sm bg-sky-600 hover:bg-sky-500 p-3 rounded-md uppercase lg:hidden font-bold mr-3'
                        onClick={handleCerrarSesion}
                    >Cerrar Sesión
                    </button>) : <>
                    <Link
                      className='text-white text-sm bg-sky-600 hover:bg-sky-500 p-3 rounded-md uppercase lg:hidden font-bold'
                      to='/login'>
                      <span>Iniciar Sesión</span>         
                    </Link>
                    <Link
                      className='text-white text-sm bg-sky-600 hover:bg-sky-500 p-3 rounded-md uppercase lg:hidden font-bold mr-3'
                      to='/registrar'>
                      <span>Registrarse</span>          
                    </Link> 
                    </>}
                   
                </div>
            
            </div>

        </div>
    </header>
  )
}

export default Header