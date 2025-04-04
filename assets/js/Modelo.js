class ModeloFutbolista {
    constructor() {
        this.futbolistas = [];
    }

    // Cargar datos desde el localStorage
    cargarDatosFutbolista() {
        const datosGuardados = localStorage.getItem('futbolistas');
        if (datosGuardados) {
            this.futbolistas = JSON.parse(datosGuardados);
        }
    }

    // Agregar un futbolista y guardar en el localStorage
    agregarFutbolista(futbolista) {
        this.futbolistas.push(futbolista);
    }
    

    // Eliminar un futbolista por ID
    eliminarFutbolista(id) {
        this.futbolistas = this.futbolistas.filter(futbolista => futbolista.id !== id);
    }
}