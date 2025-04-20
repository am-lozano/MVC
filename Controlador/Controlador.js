class Controlador {
    constructor() {
        this.modeloEquipo = new ModeloEquipo(); // Instancia del modelo de equipo
        this.modeloFutbolista = new ModeloFutbolista(); // Instancia del modelo de futbolista
        this.vista = new Vista(); // Instancia de la vista

        this.vista.renderizarJugadores(this.modeloFutbolista.mostrarFutbolistas()); // Renderizar los futbolistas iniciales
        this.vista.renderizarEquipos(this.modeloEquipo.mostrarEquipos()); // Renderizar los equipos iniciales


    }

    agregarUsuario(usuario) {
        this.usuarios.push(usuario);
    }

    obtenerUsuarios() {
        return this.usuarios;
    }
}