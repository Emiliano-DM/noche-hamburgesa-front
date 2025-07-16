import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function Profile() {
  const { id } = useParams();

  // Estado para los datos del usuario
  const [userData, setUserData] = useState({
    nombre: '',
    apellidos: '',
    edad: '',
    intereses: ''
  });

  // Simular carga de datos (ej. llamada a API)
  useEffect(() => {
    // Aquí simularíamos obtener los datos según el id
    // Por ahora, pongo datos fijos para el ejemplo
    const fetchedUser = {
      nombre: 'Juan',
      apellidos: 'Pérez',
      edad: 30,
      intereses: 'Música, deportes, programación'
    };
    setUserData(fetchedUser);
  }, [id]);

  // Manejador para cambios en inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Manejador para guardar cambios (puede ser llamada a API)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos guardados:', userData);
    alert('Perfil guardado!');
  };

  return (
    <div style={{ padding: '1rem', maxWidth: '500px', margin: 'auto' }}>
      <h2>Perfil de usuario (ID: {id})</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1rem' }}>
          <label>Nombre:</label><br />
          <input
            type="text"
            name="nombre"
            value={userData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Apellidos:</label><br />
          <input
            type="text"
            name="apellidos"
            value={userData.apellidos}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Edad:</label><br />
          <input
            type="number"
            name="edad"
            value={userData.edad}
            onChange={handleChange}
            min="0"
            max="120"
            required
          />
        </div>
        <div style={{ marginBottom: '1rem' }}>
          <label>Intereses personales:</label><br />
          <textarea
            name="intereses"
            value={userData.intereses}
            onChange={handleChange}
            rows={3}
            placeholder="Escribe tus intereses..."
          />
        </div>
        <button type="submit" style={{ backgroundColor: '#FBBF3D', border: 'none', padding: '0.5rem 1rem', cursor: 'pointer' }}>
          Guardar cambios
        </button>
      </form>
    </div>
  );
}

export default Profile;
