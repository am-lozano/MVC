class Controlador {
    constructor() {
        this.modeloEquipo = new ModeloEquipo(); // Instancia del modelo de equipo
        this.modeloFutbolista = new ModeloFutbolista(); // Instancia del modelo de futbolista
        this.vista = new Vista(); // Instancia de la vista

        this.vista.renderizarJugadores(this.modeloFutbolista.mostrarFutbolistas()); // Renderizar los futbolistas iniciales
        this.vista.renderizarEquipos(this.modeloEquipo.mostrarEquipos()); // Renderizar los equipos iniciales

        // Agregar el evento click al botón "guardar" para futbolistas
        document.getElementById("guardarFutbolista").addEventListener("click", () => this.crearFutbolista());

        // Agregar el evento click al botón "guardar" para equipos
        document.getElementById("guardarEquipo").addEventListener("click", () => this.crearEquipo());

        // Comprueba el tipo de boton y crear el evento al pulsar para futbolistas
        document.getElementById("listaFutbolistas").addEventListener("click", (e) => this.comprobarBotonFutbolista(e));

        // Comprueba el tipo de boton y crear el evento al pulsar para equipos
        document.getElementById("listaEquipos").addEventListener("click", (e) => this.comprobarBotonEquipo(e));
    }

    // Método para agregar un futbolista, validando los campos de entrada

    // Metodo para agregar un equipo, validando los campos de entrada

    // Metodo para asignar un futbolista a un equipo

    // Metodo para filtrar futbolistas por equipo

    // Metodo para filtrar futbolistas por posicion

    // Metodo para filtrar equipos por ciudad

    // Metodo para eliminar un futbolista

    // Metodo para eliminar un equipo

    // Metodo para actualizar un futbolista

    // Metodo para actualizar un equipo

    // Metodo para comprobar el boton de futbolista

    // Metodo para comprobar el boton de equipo
}

// Instanciar el controlador de forma global
function inicializar() {
    const controller = new Controlador();
}

// Inicializar el controlador al iniciar
window.onload = inicializar();