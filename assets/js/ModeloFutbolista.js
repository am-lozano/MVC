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

    // Agregar un futbolista y actualizar en el localStorage
    agregarFutbolista(futbolista) {
        this.futbolistas.push(futbolista);
        localStorage.setItem('futbolistas', JSON.stringify(this.futbolistas));
    }
    

    // Eliminar un futbolista por ID y actualizar el localStorage
    eliminarFutbolista(id) {
        this.futbolistas = this.futbolistas.filter(futbolista => futbolista.id !== id);
        localStorage.setItem('futbolistas', JSON.stringify(this.futbolistas));
    }

    //Método para asignar un jugador a un equipo
    asignarEquipo(idFutbolista, idEquipo) {
        const futbolista = this.futbolistas.find(f => f.id === idFutbolista);
        if (futbolista) {
            if(idEquipo === ""){
                throw new Error("El id del equipo no puede ser vacío");
            }else{
                futbolista.idequipo = idEquipo;
            localStorage.setItem('futbolistas', JSON.stringify(this.futbolistas));
            }
            
        } else {
            throw new Error("Futbolista no encontrado");
        }
    }
    
}