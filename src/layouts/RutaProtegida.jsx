import { Outlet, Navigate } from 'react-router-dom'
import useAuth from '../hooks/useAuth'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import Spinner from '../components/Spinner'

const RutaProtegida = () => {

    const { auth, cargando } = useAuth()

    if(cargando) return <Spinner/>


  return (
    <>
        {auth._id ? (
            <div className='bg-gray-100'>
                <Header />                
                <div className='md:min-h-screen lg2:container lg2:mx-auto lg2:mt-5 p-5 md:flex md:justify-center'>
                    <main>
                        <Outlet/>
                    </main>
                </div>
                <Footer />
            </div>
        ) : <>    
            <Navigate to='/' />
        </>}
    </>
  )
}

export default RutaProtegida
