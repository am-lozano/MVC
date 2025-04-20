class ModeloEquipo {
    constructor() {
        this.equipos= [];
        this.id = 0;
    }

    // Cargar datos desde el localStorage
    cargarDatosEquipo() {
        const datosGuardados = localStorage.getItem('equipos');
        if (datosGuardados) {
            this.equipos = JSON.parse(datosGuardados);
        }
    }

    // Agregar un equipo y actualizar en el localStorage
    agregarEquipo(nombre, ciudad, estadio) {
        this.equipos.push(this.id++, nombre, ciudad, estadio);
        localStorage.setItem('equipos', JSON.stringify(this.equipos));
    }

    //Método para actualizar un equipo por ID y actualizar el localStorage
    actualizarEquipo(id, equipoActualizado) {
        const index = this.equipos.findIndex(e => e.id === id);
        if (index !== -1) {
            this.equipos[index] = equipoActualizado;
            localStorage.setItem('equipos', JSON.stringify(this.equipos));
        } else {
            throw new Error("Equipo no encontrado");
        }
    }

    // Eliminar un equipo por ID y actualizar el localStorage
    eliminarEquipo(id) {
        let elimnado = false;
        this.equipos.forEach(equipo => {
            if (equipo.id === id) {
                this.equipos.splice(this.equipos.indexOf(equipo), 1);
                localStorage.setItem('equipos', JSON.stringify(this.futbolistas));
                eliminado = true;
            }
        })

        return eliminado;
    }

    // Método para filtrar equipos por ciudad
    filtrarEquiposPorCiudad(ciudad) {
        return this.equipos.filter(e => e.ciudad === ciudad);
    }

    //Método para mostrar todos los equipos
    mostrarEquipos() {
        return this.equipos;
    }
}