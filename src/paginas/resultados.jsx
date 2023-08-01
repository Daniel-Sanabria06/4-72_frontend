import React, { useState, useEffect } from 'react';

const resultados = () =>  {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Realizar la petición GET al servidor backend
    fetch('/api/resultados') // Asegúrate de que la ruta coincida con la que configuraste en tu servidor backend
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error al obtener datos:', error));
  }, []);

  return (
    <div>
      <h1>Resultados de la Base de Datos</h1>
      <ul>
        {data.map((item) => (
          <li key={item._id}>{item.nombre}</li> // Reemplaza 'nombre' con el campo que desees mostrar
        ))}
      </ul>
    </div>
  );
}

export default resultados;
