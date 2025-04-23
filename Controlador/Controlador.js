class Controlador {
    
    constructor() {
        this.modeloEquipo = new ModeloEquipo(); // Instancia del modelo de equipo
        this.modeloFutbolista = new ModeloFutbolista(); // Instancia del modelo de futbolista
        this.vista = new Vista(); // Instancia de la vista

        this.vista.renderizarFutbolistas(this.modeloFutbolista.mostrarFutbolistas()); // Renderizar los futbolistas iniciales
        this.vista.renderizarEquipos(this.modeloEquipo.mostrarEquipos()); // Renderizar los equipos iniciales

        // Agregar el evento click al botón "guardar" para futbolistas
        this.vista.botonAnadirF.addEventListener("click", () => this.crearFutbolista());

        // Agregar el evento click al botón "guardar" para equipos
        this.vista.botonAnadirE.addEventListener("click", () => this.crearEquipo());

        // Comprueba el tipo de boton y crear el evento al pulsar para futbolistas
        this.vista.listaFutbolistas.addEventListener("click", (e) => this.comprobarBotonFutbolista(e));

        // Comprueba el tipo de boton y crear el evento al pulsar para equipos
        this.vista.listaEquipos.addEventListener("click", (e) => this.comprobarBotonEquipo(e));

        // Agregar el evento click al botón de filtrar futbolistas por equipo
        this.vista.botonFiltrarFutbolistaEquipo.addEventListener("click", (e) => this.filtrarFutbolistasPorEquipo(e));

        // Agregar el evento click al botón de filtrar futbolistas por posición
        this.vista.botonFiltrarFutbolistaPosicion.addEventListener("click", (e) => this.filtrarFutbolistasPorPosicion(e));

        // Agregar el evento click al botón de filtrar equipos por ciudad
        this.vista.botonFiltrarEquipoCiudad.addEventListener("click", (e) => this.filtrarEquiposPorCiudad(e));
    }

    // Método para agregar un futbolista, validando los campos de entrada
    crearFutbolista() {
        const nombre = this.vista.inputNombreF.value;
        const edad = this.vista.inputEdadF.value;
        const posicion = this.vista.inputPosicionF.value;
        const fechanacimiento = this.vista.inputfechaF.value;

        // Validar los campos de futbolista
        if (this.validarCamposFutbolista(nombre, edad, posicion, fechanacimiento)) {
            this.modeloFutbolista.agregarFutbolista(nombre, edad, posicion, fechanacimiento);
            this.vista.renderizarFutbolistas(this.modeloFutbolista.mostrarFutbolistas());
            console.log(this.modeloFutbolista.mostrarFutbolistas()); // Mostrar futbolistas en la consola
            this.vista.limpiarForm(); // Limpiar el formulario después de agregar el futbolista
        } else {
            alert("Por favor, completa todos los campos correctamente.");
        }
    }

    // Método para validar los campos de futbolista
    validarCamposFutbolista(nombre, edad, posicion, fechanacimiento) {
        return nombre && edad && posicion && fechanacimiento; // Validar que todos los campos estén completos
    }

    // Metodo para agregar un equipo, validando los campos de entrada
    crearEquipo() {
        const nombre = this.vista.inputNombreE.value;
        const ciudad = this.vista.inputCiudadE.value;
        const estadio = this.vista.inputEstadioE.value;

        // Validar los campos de equipo
        if (this.validarCamposEquipo(nombre, ciudad, estadio)) {
            this.modeloEquipo.agregarEquipo(nombre, ciudad, estadio);
            this.vista.renderizarEquipos(this.modeloEquipo.mostrarEquipos());
            console.log(this.modeloEquipo.mostrarEquipos()); // Mostrar equipos en la consola
            this.vista.limpiarForm(); // Limpiar el formulario después de agregar el equipo
        } else {
            alert("Por favor, completa todos los campos correctamente.");
        }
    }

    // Método para validar los campos de equipo
    validarCamposEquipo(nombre, ciudad, estadio) {
        return nombre && ciudad && estadio; // Validar que todos los campos estén completos
    }

    // Metodo para filtrar futbolistas por equipo
    filtrarFutbolistasPorEquipo() {
        const nombreEquipo = prompt("Ingrese el nombre del equipo para filtrar los futbolistas:"); // Solicitar el nombre del equipo
        const futbolistasFiltrados = this.modeloFutbolista.filtrarFutbolistasPorEquipo(nombreEquipo); // Filtrar los futbolistas por equipo
        this.vista.renderizarFutbolistas(futbolistasFiltrados); // Renderizar los futbolistas filtrados
    }

    // Metodo para filtrar futbolistas por posicion
    filtrarFutbolistasPorPosicion() {
        const posicion = prompt("Ingrese la posición para filtrar los futbolistas:"); // Solicitar la posición
        const futbolistasFiltrados = this.modeloFutbolista.filtrarFutbolistasPorPosicion(posicion); // Filtrar los futbolistas por posición
        this.vista.renderizarFutbolistas(futbolistasFiltrados); // Renderizar los futbolistas filtrados
    }

    // Metodo para filtrar equipos por ciudad
    filtrarEquiposPorCiudad() {
        const ciudad = prompt("Ingrese la ciudad para filtrar los equipos:"); // Solicitar la ciudad
        const equiposFiltrados = this.modeloEquipo.filtrarEquiposPorCiudad(ciudad); // Filtrar los equipos por ciudad
        this.vista.renderizarEquipos(equiposFiltrados); // Renderizar los equipos filtrados
    }

    // Metodo para eliminar un futbolista
    eliminarFutbolista(id) {
        console.log(id); // Mostrar el id del futbolista a eliminar
        if (this.modeloFutbolista.eliminarFutbolista(id)) {
            this.vista.renderizarFutbolistas(this.modeloFutbolista.mostrarFutbolistas());
        } else {
            alert("Error al eliminar el futbolista.");
        }
    }

    // Metodo para eliminar un equipo
    eliminarEquipo(id) {
        if (this.modeloEquipo.eliminarEquipo(id)) {
            this.vista.renderizarEquipos(this.modeloEquipo.mostrarEquipos());
        } else {
            alert("Error al eliminar el equipo.");
        }
    }

    // Metodo para asignar equipo a un futbolista
    asignarEquipoAFutbolista(idFutbolista, nombreEquipo) {
        let equipo = this.modeloEquipo.buscaEquiposPorNombre(nombreEquipo); // Buscar el equipo por nombre
        if (equipo !== null) {
            this.modeloFutbolista.asignarEquipo(idFutbolista, equipo.nombre); // Asignar el equipo al futbolista
            this.vista.renderizarFutbolistas(this.modeloFutbolista.mostrarFutbolistas());
        } else {
            alert("Error al asignar el futbolista al equipo, el equipo no existe.");
        }
    }

    // Metodo para actualizar un equipo
    modificarEquipo(id, nombre, ciudad, estadio) {
        const equipoActualizado = { id, nombre, ciudad, estadio }; // Crear un objeto con los datos actualizados del equipo
        this.modeloEquipo.actualizarEquipo(id, equipoActualizado); // Actualizar el equipo en el modelo
        this.vista.renderizarEquipos(this.modeloEquipo.mostrarEquipos()); // Renderizar los equipos actualizados
        console.log(this.modeloEquipo.mostrarEquipos()); // Mostrar equipos en la consola
    }


    // Metodo para comprobar el boton de futbolista
   comprobarBotonFutbolista(event) {
        if (event.target.tagName === "BUTTON" && event.target.textContent === "Eliminar Futbolista") {
            const id = parseInt(event.target.getAttribute("id")); // Obtener el id del futbolista
            this.eliminarFutbolista(id); // Llamar al método para eliminar el futbolista
        } else if (event.target.tagName === "BUTTON" && event.target.textContent === "Asignar Equipo") {
            const id = parseInt(event.target.getAttribute("id")); // Obtener el id del futbolista
            const nombreEquipo = prompt("Ingrese el nombre del equipo al que desea asignar el futbolista:"); // Solicitar el nombre del equipo
            this.asignarEquipoAFutbolista(id, nombreEquipo); // Llamar al método para asignar el equipo al futbolista
        }
    }

    // Metodo para comprobar el boton de equipo
    comprobarBotonEquipo(event) {
        if (event.target.tagName === "BUTTON" && event.target.textContent === "Eliminar Equipo") {
            const id = parseInt(event.target.getAttribute("id")); // Obtener el id del equipo
            this.eliminarEquipo(id); // Llamar al método para eliminar el equipo
        } else if (event.target.tagName === "BUTTON" && event.target.textContent === "Modificar Equipo") {
            const id = parseInt(event.target.getAttribute("id")); // Obtener el id del equipo
            const nombre = prompt("Ingrese el nuevo nombre del equipo:"); // Solicitar el nuevo nombre del equipo
            const ciudad = prompt("Ingrese la nueva ciudad del equipo:"); // Solicitar la nueva ciudad del equipo
            const estadio = prompt("Ingrese el nuevo estadio del equipo:"); // Solicitar el nuevo estadio del equipo
            this.modificarEquipo(id, nombre, ciudad, estadio); // Llamar al método para modificar el equipo
            this.vista.renderizarEquipos(this.modeloEquipo.mostrarEquipos()); // Renderizar los equipos actualizados
        }
    }
}