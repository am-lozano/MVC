class ModeloFutbolista {
    constructor() {
        this.futbolistas = [];
        this.id = 0;
    }

    // Cargar datos desde el localStorage
    cargarDatosFutbolista() {
        const datosGuardados = localStorage.getItem('futbolistas');
        if (datosGuardados) {
            this.futbolistas = JSON.parse(datosGuardados);
        }
    }

    // Agregar un futbolista y actualizar en el localStorage
    agregarFutbolista(nombre, edad, posicion, fechanacimiento) {
       this.futbolistas.push({ id: this.id++, nombre, edad, posicion, fechanacimiento });
    }   

    //Método para actualizar un futbolista por ID y actualizar el localStorage
    actualizarFutbolista(id, futbolistaActualizado) {
        const index = this.futbolistas.findIndex(f => f.id === id);
        if (index !== -1) {
            this.futbolistas[index] = futbolistaActualizado;
            localStorage.setItem('futbolistas', JSON.stringify(this.futbolistas));
        } else {
            throw new Error("Futbolista no encontrado");
        }
    }

    // Eliminar un futbolista por ID y actualizar el localStorage
    eliminarFutbolista(id) {
        let eliminado = false;
        this.futbolistas.forEach(futbolista => {
            if (futbolista.id === id) {
                this.futbolistas.splice(this.futbolistas.indexOf(futbolista), 1);
                localStorage.setItem('futbolistas', JSON.stringify(this.futbolistas));
                eliminado = true;
            }
        })

        return eliminado;
    }

    //Método para asignar un futbolista a un equipo
    asignarEquipo(idFutbolista, nombreEquipo) {
        let asignado = false;
        this.futbolistas.forEach(futbolista => {
            if (futbolista.id === idFutbolista) {
                futbolista.nombreEquipo = nombreEquipo;
                localStorage.setItem('futbolistas', JSON.stringify(this.futbolistas));
                asignado = true;
            }
        })
        return asignado;
    }

    //Método para filtrar futbolistas por equipo
    filtrarFutbolistasPorEquipo(idEquipo) {
        return this.futbolistas.filter(f => f.idequipo === idEquipo);
    }

    //Método para filtrar futbolistas por posición
    filtrarFutbolistasPorPosicion(posicion) {
        return this.futbolistas.filter(f => f.posicion === posicion);
    }

    //Metodo para mostrar todos los futbolistas
    mostrarFutbolistas() {
        return this.futbolistas;
    }
}