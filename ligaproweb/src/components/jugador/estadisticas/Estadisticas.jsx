import { stats } from "../../../data";
import { obtenerIdUsuario } from "../../../utils/cookies";
import './estadisticas.css'

function Estadisticas() {

    const idUsuario = obtenerIdUsuario();

    const estadisticas = stats[idUsuario];

    if (!estadisticas) {
        return (
            <div className="view-placeholder">
                <h3>Estadísticas del Jugador</h3>
                <p>No existen estadísticas para este jugador.</p>
            </div>
        );
    }

    return (
    <div className="stats-page">

    <div className="player-card">

        <h2>Equipo {estadisticas.equipo}</h2>

        <div className="player-info">
            <span>#{estadisticas.numeroJugador}</span>
            <span>{estadisticas.posicionPreferida}</span>
            <span>{estadisticas.edad} años</span>
        </div>

    </div>

    <div className="stats-grid">

        <div className="stat-card">
            <span>{estadisticas.goles}</span>
            <p>Goles</p>
        </div>

        <div className="stat-card">
            <span>{estadisticas.partidosJugados}</span>
            <p>Partidos</p>
        </div>

        <div className="stat-card">
            <span>{estadisticas.tarjetaAmarilla}</span>
            <p>Amarillas</p>
        </div>

        <div className="stat-card">
            <span>{estadisticas.tarjetaRoja}</span>
            <p>Rojas</p>
        </div>

        <div className="stat-card">
            <span>{estadisticas.pieDerecho}</span>
            <p>Pie derecho</p>
        </div>

        <div className="stat-card">
            <span>{estadisticas.pieIzquierdo}</span>
            <p>Pie izquierdo</p>
        </div>

    </div>

</div>
    );
}

export { Estadisticas };