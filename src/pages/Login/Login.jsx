
import React, { useState } from 'react';


function Login({setUser}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      console.log(data)
       setUser({ username: email });
    })
    .catch(err =>{
      console.log(err)
      alert('Error al iniciar sesión')
    })
 
  };

  const handleRegister = () => {
    console.log('Registro enviado con:', { username: email, password });
    fetch (`${API}/register`, {
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
      console.log(data)
      setUser({ username: email });
    })
    .catch(err =>{
      console.log(err)
      alert('Error al registrarse')
    })
  };

  return (
    <div>
      <input
        type='email'
        placeholder='email'
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        type='password'
        placeholder='password'
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Iniciar Sesión</button>
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  );
}

export default Login;
