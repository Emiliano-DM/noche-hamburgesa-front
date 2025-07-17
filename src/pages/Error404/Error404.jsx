import React from 'react';
import './Error404.style.css'

const Error404 = () => {
  return (
    <div className='container'>
      <h1 className='title'>404</h1>
      <p className='subtitle'>Página no encontrada</p>
      <p className='text'>
        Lo sentimos, la página que estás buscando no existe o fue movida.
      </p>
      <a href="/"  className='link'>Volver al inicio</a>
    </div>
  );
};



export default Error404;