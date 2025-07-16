import React from 'react';

const Error404 = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.subtitle}>Página no encontrada</p>
      <p style={styles.text}>
        Lo sentimos, la página que estás buscando no existe o fue movida.
      </p>
      <a href="/" style={styles.link}>Volver al inicio</a>
    </div>
  );
};

const styles = {
  container: {
    height: '100vh',
    backgroundColor: '#222d65',
    color: '#fbbf3d',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: '20px',
  },
  title: {
    fontSize: '8rem',
    margin: 0,
    animation: 'fadeIn 2s ease-in-out',
  },
  subtitle: {
    fontSize: '2rem',
    fontWeight: 'bold',
    margin: '10px 0',
  },
  text: {
    fontSize: '1.2rem',
    maxWidth: '600px',
    marginBottom: '30px',
  },
  link: {
    padding: '10px 20px',
    backgroundColor: '#fbbf3d',
    color: '#222d65',
    borderRadius: '8px',
    textDecoration: 'none',
    fontWeight: 'bold',
    transition: 'background 0.3s ease',
  },
};

export default Error404;