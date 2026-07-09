// src/App.js
import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import Login from './components/login/Login';
import Register from './components/login/Register';
import Menu from './components/menu/Menu';

function App() {
  // Estados para manejar la navegación simple
  const [currentView, setCurrentView] = useState('login'); // 'login', 'register', 'menu'
  const [loggedUser, setLoggedUser] = useState(null);

  const handleLogin = (user) => {
    setLoggedUser(user);
    setCurrentView('menu');
  };

  const handleLogout = () => {
    setLoggedUser(null);
    setCurrentView('login');
  };

  return (
    <>
      <Toaster position="top-right" />
      
      {currentView === 'login' && (
        <Login 
          onLogin={handleLogin} 
          onNavigateToRegister={() => setCurrentView('register')} 
        />
      )}

      {currentView === 'register' && (
        <Register 
          onNavigateToLogin={() => setCurrentView('login')} 
        />
      )}

      {currentView === 'menu' && loggedUser && (
        <Menu 
          usuario={loggedUser} 
          onLogout={handleLogout} 
        />
      )}
    </>
  );
}

export default App;