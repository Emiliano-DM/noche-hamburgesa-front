import React, { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { EventContext } from '../../providers/EventContext'


function Events() {
  const {id} = useParams()
  const {events} = useContext(EventContext)

  const evento = events[id]
  const [loQueLlevo, setLoQueLlevo]= useState('')

  const handleSubmit =(e)=>{
    e.preventDefault()
    alert(`Te has inscrito al evento ${evento.nombre}  y llevarás: ${loQueLlevo}`)
    setLoQueLlevo('')
  }
 
  return (
  
    <div className="container">
      <h1>Inscripción al evento: {evento.nombre}</h1>
      <p>Fecha: {evento.fecha}</p>
      <p>Lugar: {evento.lugar}</p>

      <form onSubmit={handleSubmit}>
        <label>¿Qué vas a llevar?</label>
        <input 
          id="llevo"
          type="text"
          value={loQueLlevo}
          onChange={e => setLoQueLlevo(e.target.value)}
          required
        />
        <button type="submit">Inscribirme</button>
      </form>
    </div>
  )
}

export default Events