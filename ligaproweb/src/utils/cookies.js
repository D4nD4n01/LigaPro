export const guardarIdUsuario = (id) => {
    document.cookie = `idUsuario=${id}; path=/; SameSite=Lax`;
};

export const obtenerIdUsuario = () => {
    const nombre = "idUsuario=";

    const cookies = document.cookie.split(";");

    for (let cookie of cookies) {
        cookie = cookie.trim();

        if (cookie.startsWith(nombre)) {
            return Number(cookie.substring(nombre.length));
        }
    }

    return null;
};

export const eliminarIdUsuario = () => {
    document.cookie =
        "idUsuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
};