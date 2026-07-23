import { useEffect } from "react"

function PartidosPendientes() {
    useEffect = () => {
        saludar()
    }

    function saludar() {
        console.log("hola")
    }

    return (
        <div>
            Hola, esto es partidos pendientes
            <button onClick={() => saludar()}> boton</button>

        </div>

    )
}

export { PartidosPendientes }