// src/components/login/Login.jsx
import React, { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { usuariosMock } from '../../data';
import { guardarIdUsuario } from '../../utils/cookies';
import './login.css';

const imagenesFutbol = [
  "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1000&auto=format&fit=crop",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs12h_AyxlrkAdTewV8W1W9TaY3WNwYra_A2Zp41mL4A&s=10", 
  "https://images.unsplash.com/photo-1511886929837-354d827aae26?q=80&w=1000&auto=format&fit=crop" 
];

export default function Login({ onLogin, onNavigateToRegister }) {
  const [imgIndex, setImgIndex] = useState(0);
  const [usuario, setUsuario] = useState('');
  const [pass, setPass] = useState('');

  // Efecto para cambiar la imagen cada 3 segundos
  useEffect(() => {
    const intervalo = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % imagenesFutbol.length);
    }, 3000);
    return () => clearInterval(intervalo); // Limpieza del intervalo
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userEncontrado = usuariosMock.find(
      (u) => u.usuario.toLowerCase() === usuario.toLowerCase() && u.pass === pass
    );

    if (userEncontrado) {
      toast.success(`¡Bienvenido, ${userEncontrado.usuario}!`);
      guardarIdUsuario(userEncontrado.id);
      onLogin(userEncontrado);
    } else {
      toast.error('Credenciales incorrectas');
    }
  };

  return (
    <div className="login-container">
      <div className="login-image-section">
        <img src={imagenesFutbol[imgIndex]} alt="Fútbol" className="login-image" />
        <div className="login-image-overlay">
          <h2>Liga Pro</h2>
          <p>La mejor plataforma para gestionar tu pasión.</p>
        </div>
      </div>

      <div className="login-form-section">
        <div className="login-box">
          <h2>Iniciar Sesión</h2>
          <p className="subtitle">Ingresa para gestionar tus torneos</p>
          
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Usuario</label>
              <input 
                type="text" 
                value={usuario} 
                onChange={(e) => setUsuario(e.target.value)} 
                placeholder="Ej. Jugador, Organizador..."
                required 
              />
            </div>
            <div className="input-group">
              <label>Contraseña</label>
              <input 
                type="password" 
                value={pass} 
                onChange={(e) => setPass(e.target.value)} 
                placeholder="***"
                required 
              />
            </div>
            <button type="submit" className="btn-primary">Entrar a la Cancha</button>
          </form>

          <p className="register-link">
            ¿No tienes cuenta? <span onClick={onNavigateToRegister}>Regístrate aquí!</span>
          </p>
        </div>
      </div>
    </div>
  );
}