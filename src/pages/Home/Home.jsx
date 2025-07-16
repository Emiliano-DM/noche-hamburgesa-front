import React from "react";
import { Link } from 'react-router-dom';

const eventosMock = [
  {
    id: 1,
    nombre: "Noche de hamburguesas",
    fecha: "2025-07-20",
    lugar: "Parque Central"
  },
  {
    id: 2,
    nombre: "Tarde de juegos de mesa",
    fecha: "2025-08-01",
    lugar: "Casa de Laura"
  }
];

const Home = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <header style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem" }}>
        <h1>Listado de Eventos</h1>
        <Link to='/profile/12'>
        <button>Mi perfil</button>
        </Link>
      </header>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {eventosMock.map(evento => (
          <li key={evento.id} style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "1rem",
            marginBottom: "1rem"
          }}>
            <h2>{evento.nombre}</h2>
            <p><strong>Fecha:</strong> {evento.fecha}</p>
            <p><strong>Lugar:</strong> {evento.lugar}</p>
          </li>
        ))}
      </ul>
      
      <Link to='/create-event'>
        <button
          style={{
            marginTop: "2rem",
            padding: "0.8rem 1.2rem",
            fontSize: "1rem",
            borderRadius: "50%",
            backgroundColor: "#FBBF3D",
            border: "none",
            cursor: "pointer"
          }}
        >
          +
        </button>
      </Link>
    </div>
  );
};

export default Home;

