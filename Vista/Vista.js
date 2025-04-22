class Vista {

    // constructor
    constructor() {
        // inicializamos el formulario y los inputs
        this.formF = document.getElementById("formFutbolista");
        this.formE = document.getElementById("formEquipo");
        this.inputNombreE = document.getElementById("nombreEquipo");
        this.inputCiudadE = document.getElementById("ciudadEquipo");
        this.inputEstadioE = document.getElementById("estadioEquipo");
        this.inputNombreF = document.getElementById("nombreFutbolista");
        this.inputEdadF = document.getElementById("edadFutbolista");
        this.inputPosicionF = document.getElementById("posicionFutbolista");
        this.inputfechaF = document.getElementById("fechaFutbolista");
        // inicializamos la lista de futbolistas y equipos
        this.listaFutbolistas = document.getElementById("listaFutbolistas");
        this.listaEquipos = document.getElementById("listaEquipos");
        // inicializamos los botones del formulario
        this.botonAnadirF = document.getElementById("botonAnadirFutbolista");
        this.botonAnadirE = document.getElementById("botonAnadirEquipo");
    }

    // devolvemos el formulario
    getInput() {
        return this.formInput.value;
    }

    // funcion para limpiar el texto anterior del formulario
    limpiarForm() {
        this.formF.value = "";
        this.formE.value = "";
    }

    // funcion para mostrar los futbolistas
    renderizarFutbolistas(futbolistas) {
        this.listaFutbolistas.innerHTML = "";
        futbolistas.forEach(element => {
            const fila = document.createElement("tr");
            fila.id = element.id;
            fila.innerHTML = `
            <td> ${element.nombre} </td>
            <td> ${element.edad} </td>
            <td> ${element.posicion} </td>
            <td> ${element.fechanacimiento} </td>
            <td> <button class="success-btn" data-id="#${element.id}">Asignar Equipo</button> </td>
            <td> <button class="success-btn" data-id="#${element.id}">Eliminar Futbolista</button> </td>
            `;
            this.listaFutbolistas.appendChild(fila);
        });
    }

    // funcion para mostrar los equipos
    renderizarEquipos(equipos) {
        this.listaEquipos.innerHTML = "";
        equipos.forEach(element => {
            const fila = document.createElement("tr");
            fila.id = element.id;
            fila.innerHTML = `
            <td> ${element.nombre} </td>
            <td> ${element.ciudad} </td>
            <td> ${element.estadio} </td>
            <td> <button class="success-btn" data-id="#${element.id}">Agregar Futbolista</button> </td>
            <td> <button class="success-btn" data-id="#${element.id}">Eliminar Equipo</button> </td>
            `;
            this.listaEquipos.appendChild(fila);
        });
    }

}