import React from 'react';

function CreateEvents() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Nuevo Evento</h1>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Nombre del evento:</label>
          <input type="text" name="nombre" required style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Fecha del evento:</label>
          <input type="date" name="fecha" required style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Lugar del evento:</label>
          <input type="text" name="lugar" required style={styles.input} />
        </div>
        <button type="submit" style={styles.button}>Crear Evento</button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: '500px',
    margin: '0 auto',
    padding: '20px',
    backgroundColor: '#fbbf3d',
    borderRadius: '12px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    fontFamily: 'Arial, sans-serif',
  },
  title: {
    textAlign: 'center',
    color: '#222d65',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '6px',
    fontWeight: 'bold',
    color: '#222d65',
  },
  input: {
    padding: '10px',
    border: '2px solid #222d65',
    borderRadius: '8px',
    fontSize: '1rem',
  },
  button: {
    marginTop: '20px',
    padding: '10px',
    backgroundColor: '#222d65',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontWeight: 'bold',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.3s',
  }
};

export default CreateEvents;
