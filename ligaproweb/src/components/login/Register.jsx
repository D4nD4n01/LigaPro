// src/components/login/Register.jsx
import React from 'react';
import toast from 'react-hot-toast';
import './login.css'; 

export default function Register({ onNavigateToLogin }) {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Funcionalidad de registro en construcción');
  };

  return (
    <div className="login-container">
      <div className="login-form-section" style={{ flex: 1 }}>
        <div className="login-box">
          <h2>Ficha de Registro</h2>
          <p className="subtitle">Únete a la liga y empieza a jugar</p>
          
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Nombre Completo</label>
              <input type="text" placeholder="Tu nombre" required />
            </div>
            <div className="input-group">
              <label>Correo Electrónico</label>
              <input type="email" placeholder="correo@ejemplo.com" required />
            </div>
            <div className="input-group">
              <label>Contraseña</label>
              <input type="password" placeholder="***" required />
            </div>
            <button type="submit" className="btn-primary">Registrarme</button>
          </form>

          <p className="register-link">
            ¿Ya tienes cuenta? <span onClick={onNavigateToLogin}>Inicia sesión aquí</span>
          </p>
        </div>
      </div>
    </div>
  );
}