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

    // Metodo para asignar un futbolista a un equipo
    asignarFutbolistaAEquipo(idFutbolista, idEquipo) {
        if (this.modeloFutbolista.asignarEquipo(idFutbolista, idEquipo)) {
            this.vista.renderizarFutbolistas(this.modeloFutbolista.mostrarFutbolistas());
        } else {
            alert("Error al asignar el futbolista al equipo.");
        }
    }

    // Metodo para filtrar futbolistas por equipo

    // Metodo para filtrar futbolistas por posicion

    // Metodo para filtrar equipos por ciudad

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

    // Metodo para actualizar un futbolista

    // Metodo para actualizar un equipo

    // Metodo para comprobar el boton de futbolista
    comprobarBotonFutbolista(event) {
        if (event.target.tagName === "BUTTON" && event.target.textContent === "Eliminar Futbolista") { 
            const id = parseInt(event.target.getAttribute("id")); // Obtener el id del futbolista
            console.log(id); // Mostrar el id del futbolista a eliminar
            this.eliminarFutbolista(id); // Llamar al método para eliminar el futbolista
        } else if (event.target.tagName === "BUTTON" && event.target.textContent === "Asignar Equipo") {
            const id = parseInt(event.target.getAttribute("id")); // Obtener el id del futbolista
            // Introucir el nombre del equipo al que se desea asignar el futbolista
            const nombreEquipo = prompt("Ingrese el nombre del equipo al que desea asignar el futbolista:");
            // Sacar nombre del equipo y buscar el equipo por su nombre
            const equipo = this.modeloEquipo.mostrarEquipos().find(equipo => equipo.nombre === nombreEquipo);


            this.asignarFutbolistaAEquipo(id, idEquipo); // Llamar al método para asignar el futbolista al equipo
        }
    }

    // Metodo para comprobar el boton de equipo
    comprobarBotonEquipo(event) {
        if (event.target.tagName === "BUTTON" && event.target.textContent === "Eliminar Equipo") {
            const id = parseInt(event.target.getAttribute("id")); // Obtener el id del equipo
            this.eliminarEquipo(id); // Llamar al método para eliminar el equipo
        } else if (event.target.tagName === "BUTTON" && event.target.textContent === "Agregar Futbolista") {
            const id = parseInt(event.target.getAttribute("id")); // Obtener el id del equipo
            const idFutbolista = prompt("Ingrese el ID del futbolista que desea agregar al equipo:"); // Solicitar el ID del futbolista
            this.asignarFutbolistaAEquipo(idFutbolista, id); // Llamar al método para asignar el futbolista al equipo
        }
    }
}