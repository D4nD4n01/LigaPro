export const usuariosMock = [
  { id: 1, usuario: "Jugador", pass: "123", roles: [1] },
  { id: 2, usuario: "Organizador", pass: "123", roles: [2] },
  { id: 3, usuario: "Entrenador", pass: "123", roles: [3] },
  { id: 4, usuario: "Multi", pass: "123", roles: [1, 2, 3] },
];

export const menuMock = [
  // JUGADOR (idUserType: 1)
  { intId: 1, strName: "Partidos pendientes", strDBName: "partidosPendientes", idUserType: 1 },
  { intId: 2, strName: "Partidos jugados", strDBName: "partidosJugados", idUserType: 1 },
  { intId: 3, strName: "Estadísticas", strDBName: "estadisticas", idUserType: 1 },
  
  // ORGANIZADOR (idUserType: 2)
  { intId: 4, strName: "Torneos", strDBName: "torneosOrg", idUserType: 2 },
  { intId: 5, strName: "Pagos", strDBName: "pagos", idUserType: 2 },
  
  // ENTRENADOR (idUserType: 3)
  { intId: 6, strName: "Equipos", strDBName: "equipos", idUserType: 3 },
  { intId: 7, strName: "Jugadores", strDBName: "jugadores", idUserType: 3 },
  { intId: 8, strName: "Torneos", strDBName: "torneosEnt", idUserType: 3 },
];

export const nombresRoles = {
  1: "JUGADOR",
  2: "ORGANIZADOR",
  3: "ENTRENADOR"
};

export const stats = {
  1:{
    idJugador:1,
    pieDerecho:9.1,
    pieIzquierdo:7.8,
    goles:4,
    partidosJugados:2,
    tarjetaAmarilla:1,
    tarjetaRoja:0,
    posicionPreferida:"Delantero",
    edad:15,
    numeroJugador:8,
    equipo:"Los pingüinos emperador"
  },
  4:{
    idJugador:4,
    pieDerecho:7.1,
    pieIzquierdo:8.9,
    goles:7,
    partidosJugados:3,
    tarjetaAmarilla:2,
    tarjetaRoja:1,
    posicionPreferida:"MedioCampista Derecho",
    edad:17,
    numeroJugador:5,
    equipo:"Tornado de fuego"
  }
}