import React, { useContext } from "react";
import { Link } from 'react-router-dom';
import { EventContext } from "../../providers/EventContext";

const Home = () => {
  const {events}= useContext(EventContext)
  return (
    <div style={{ padding: "2rem" }}>
      <header style={{ display: "flex", justifyContent: "space-between", marginBottom: "2rem" }}>
        <h1>Listado de Eventos</h1>
        <Link to='/profile/12'>
        <button>Mi perfil</button>
        </Link>
      </header>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {events.map((evento, index )=> (
        
            <li key={index} style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "1rem",
              marginBottom: "1rem"
            }}>
              <h2>{evento.nombre}</h2>
              <p><strong>Fecha:</strong> {evento.fecha}</p>
              <p><strong>Lugar:</strong> {evento.lugar}</p>
              <Link   
                to={`/events/${index}`}
                key={index}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <button style={{
                    padding: "10px 20px",
                    backgroundColor: "#222d65",
                    color: "#fbbf3d",
                    border: "none",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    cursor: "pointer",
                    fontSize: "1rem",
                    transition: "background-color 0.3s ease"
                }}>
                  Inscripción
                </button>
              </Link>
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

