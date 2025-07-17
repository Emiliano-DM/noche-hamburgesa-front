import React, {useContext, useState} from 'react';
import { EventContext } from '../../providers/EventContext';
import './CreateEvents.styles.css'

function CreateEvents() {
  const {addEvent}=useContext(EventContext)
  const [nombre, setNombre] = useState('')
  const [fecha, setFecha] = useState('')
  const [lugar, setLugar] = useState('')


  const handleSubmit =(e) =>{
    console.log('holaaa')
      e.preventDefault();
      const nuevoEvento = {nombre, fecha, lugar}
      addEvent(nuevoEvento)
      setNombre('')
      setFecha('')
      setLugar('')

  }

  return (
    <div className="container">
    <h1 className="title">Nuevo Evento</h1>
    <form className="form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label className="label">Nombre del evento:</label>
        <input
          type="text"
          name="nombre"
          value={nombre}
          required
          className="input"
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="label">Fecha del evento:</label>
        <input
          type="date"
          name="fecha"
          value={fecha}
          required
          className="input"
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label className="label">Lugar del evento:</label>
        <input
          type="text"
          name="lugar"
          value={lugar}
          required
          className="input"
          onChange={(e) => setLugar(e.target.value)}
        />
      </div>
      <button type="submit" className="button">Crear Evento</button>
    </form>
</div>

  );
}

export default CreateEvents;
