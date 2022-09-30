//sector Publico o sin autenticacion
import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'

const AuthLayout = () => {
  return (
    <>
          <div className='bg-gray-100'>
                <Header/>
                <div className='md:min-h-screen lg2:container lg2:mx-auto lg2:mt-5 p-5 md:flex md:justify-center'>
                    <main>
                        <Outlet/>
                    </main>
                </div>
                <Footer />  
            </div>
    </>
    
  )
}

export default AuthLayout
