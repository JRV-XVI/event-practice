export class PokemonModel {
    constructor(url) {
        this.url = url;
    }

    suscribirse(onMessageCallback, onErrorCallback) {
        this.conexion = new EventSource(this.url);

        // Listener
        this.conexion.onmessage = (evento) => {
            try {
                const data = JSON.parse(evento.data);
                onMessageCallback(data);
            } catch (e) {
                onMessageCallback(evento.data);
            }
        };

        this.conexion.onerror = (error) => {
            console.error("Error en Server-Sent Events:", error);
            if (onErrorCallback) onErrorCallback(error);
        };

        return this.conexion;
    }

    desconectarse() {
        if (this.conexion) {
            this.conexion.close();
            console.log("Conexión SSE cerrada");
        }
    }
}
