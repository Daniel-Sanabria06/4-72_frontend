import React, { useEffect } from 'react';
import carga from '/carga.gif'
import Header from '../components/Header'
import Footer from '../components/Footer'

const urlBase = window.location.origin

const Carga = () => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      window.location = `${urlBase}/banco`
    }, 5000); // 5000 ms = 5 segundos

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className='bg-white'>
      <Header className="my-5"/>
      <div className='text-center mx-auto'>
         <img className='mx-auto' decoding="async" src={carga} width="250rem" height="auto"/>
         <p className='my-3 mx-5'>
          Transacción en progreso, espere un momento mientras contactamos con su banco...
         </p>
      </div>
         
      <Footer />
    </div>
  );
};

export default Carga;