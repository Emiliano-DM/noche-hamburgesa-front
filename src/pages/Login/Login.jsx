import React, { useState } from 'react';
import './Login.styles.css'


function Login({setUser}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [edad, setEdad] = useState('');
  const [interesses, setInteresses] = useState('');

  const API= 'http://localhost:3000'
  
const handleLogin = () => {
     console.log('Enviando login con:', { username: email, password });
    fetch (`${API}/login`, {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: email, password})
    })
    .then(res => {
        if (!res.ok) throw new Error('Credenciales inválidas');
        return res.text();
      })
    .then( data =>{
      console.log(1111111111111,data)
      setUser({ username: email });
    })
    .catch(err =>{
      console.log(err)
      alert('Error al iniciar sesión')
    })
 
  };

  const handleRegister = () => {
    console.log('Registro enviado con:', { 
      username: email, 
      password, 
      nombre, 
      apellido, 
      edad:Number(edad), 
      interesses:interesses.split(',').map(i=> i.trim()) 
    });
    fetch (`${API}/register`, {
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({username: email, password,nombre, 
      apellido, 
      edad:Number(edad), 
      interesses:interesses.split(',').map(i=> i.trim())})
    })
    .then(res => {
      console.log(res)
        if (!res.ok) throw new Error('Credenciales inválidas');
        return res.text();
      })
    .then( data =>{
      console.log(data)
      setUser({ username: email });
    })
    .catch(err =>{
      console.log(err)
      alert('Error al registrarse')
    })
  };

  return (
    <div className="login-container">
    <div className="login-form">

      <div className="input-group">
          <input
            type="text"
            placeholder=" "
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            required
          />
          <label>Nombre</label>
        </div>
        <div className="input-group">
          <input
            type="text"
            placeholder=" "
            value={apellido}
            onChange={e => setApellido(e.target.value)}
            required
          />
          <label>Apellido</label>
        </div>

        <div className="input-group">
        <input
          type="email"
          placeholder=" "
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <label>Email</label>
      </div>

      <div className="input-group">
        <input
          type="password"
          placeholder=" "
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        <label>Contraseña</label>
      </div>

        <div className="input-group">
          <input
            type="number"
            placeholder=" "
            value={edad}
            onChange={e => setEdad(e.target.value)}
            required
          />
          <label>Edad</label>
        </div>

        <div className="input-group">
          <input
            type="text"
            placeholder=" "
            value={interesses}
            onChange={e => setInteresses(e.target.value)}
            required
          />
          <label>Intereses (separados por coma)</label>
        </div>

      <button className="btn primary" onClick={handleLogin}>Iniciar Sesión</button>
      <button className="btn secondary" onClick={handleRegister}>Registrarse</button>
    </div>
</div>
  );
}

export default Login;
