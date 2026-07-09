// src/components/menu/Menu.jsx
import React, { useState } from 'react';
import { menuMock, nombresRoles } from '../../data';
import './menu.css';

const VistasComponentes = {
    partidosPendientes: () => <div className="view-placeholder"><h3>Partidos Pendientes</h3></div>,
    partidosJugados: () => <div className="view-placeholder"><h3>Partidos Jugados</h3></div>,
    estadisticas: () => <div className="view-placeholder"><h3>Estadísticas del Jugador</h3></div>,
    torneosOrg: () => <div className="view-placeholder"><h3>Gestión de Torneos</h3></div>,
    pagos: () => <div className="view-placeholder"><h3>Control de Pagos</h3></div>,
    equipos: () => <div className="view-placeholder"><h3>Mis Equipos</h3></div>,
    jugadores: () => <div className="view-placeholder"><h3>Plantilla de Jugadores</h3></div>,
    torneosEnt: () => <div className="view-placeholder"><h3>Torneos Inscritos</h3></div>,
};

export default function Menu({ usuario, onLogout }) {
    const [vistaActual, setVistaActual] = useState(null);

    const [menuAbierto, setMenuAbierto] = useState(true);

    const [categoriaAbierta, setCategoriaAbierta] = useState(usuario.roles[0]);

    const userRoles = usuario.roles;

    const toggleCategoria = (roleId) => {
        if (categoriaAbierta === roleId) {
            setCategoriaAbierta(null); 
        } else {
            setCategoriaAbierta(roleId);
        }
    };

    const renderizarContenido = () => {
        if (!vistaActual) {
            return (
                <div className="view-placeholder">
                    <h3>¡Bienvenido a la Cancha, {usuario.usuario}!</h3>
                    <p>Selecciona una opción del menú lateral para comenzar a gestionar.</p>
                </div>
            );
        }
        const Componente = VistasComponentes[vistaActual];
        return Componente ? <Componente /> : <div>Componente no encontrado</div>;
    };

    return (
        <div className="dashboard-container">
            <aside className={`sidebar ${menuAbierto ? 'open' : 'closed'}`}>
                <div className="sidebar-content">
                    <h2>LigaProWeb</h2>

                    <div className="menu-opciones">
                        {userRoles.map((roleId) => {
                            const opcionesMenu = menuMock.filter(item => item.idUserType === roleId);
                            const estaAbierta = categoriaAbierta === roleId;

                            return (
                                <div key={roleId} className="role-section">
                                    <div className="role-header" onClick={() => toggleCategoria(roleId)}>
                                        <span>{nombresRoles[roleId]}</span>
                                        <span>{estaAbierta ? '▼' : '▶'}</span>
                                    </div>

                                    {estaAbierta && (
                                        <div className="role-items">
                                            {opcionesMenu.map(opcion => (
                                                <button
                                                    key={opcion.intId}
                                                    className={`menu-btn ${vistaActual === opcion.strDBName ? 'active' : ''}`}
                                                    onClick={() => setVistaActual(opcion.strDBName)}
                                                >
                                                    {opcion.strName}
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>

                <div className="sidebar-footer">
                    <button className="btn-logout-sidebar" onClick={onLogout}>
                        Salir de la Cuenta
                    </button>
                </div>
            </aside>

            <main className="main-content">
                <header className="topbar">
                    <button
                        className="btn-toggle-menu"
                        onClick={() => setMenuAbierto(!menuAbierto)}
                        style={{ fontSize: '1.2rem', padding: '8px 16px' }} 
                    >
                        {menuAbierto ? '<' : '>'}
                    </button>

                    <div style={{ fontWeight: 'bold', color: '#666' }}>
                        Usuario activo: {usuario.usuario}
                    </div>
                </header>

                <div className="content-area">
                    {renderizarContenido()}
                </div>
            </main>
        </div>
    );
}