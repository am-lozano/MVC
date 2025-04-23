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
        this.listaFutbolistasFiltradosEquipo = document.getElementById("listaFutbolistasFiltradosEquipo");
        this.listaFutbolistasFiltradosPosicion = document.getElementById("listaFutbolistasFitradosPosicion");
        this.listaEquipos = document.getElementById("listaEquipos");
        this.listaEquiposFiltradosCiudad = document.getElementById("listaEquiposFitradosCiudad");
        // inicializamos los botones del formulario
        this.botonAnadirF = document.getElementById("botonAnadirFutbolista");
        this.botonAnadirE = document.getElementById("botonAnadirEquipo");
        //Inicializamos el boton de los botones de filtrar
        this.botonFiltrarFutbolistaEquipo = document.getElementById("filtrarFutbolistaEquipo");
        this.botonFiltrarFutbolistaPosicion = document.getElementById("filtrarFutbolistaPosicion");
        this.botonFiltrarEquipoCiudad = document.getElementById("filtrarEquipoCiudad");
    }

    // funcion para limpiar el texto anterior del formulario
limpiarForm() {
        this.inputNombreE.value = "";
        this.inputCiudadE.value = "";
        this.inputEstadioE.value = "";
        this.inputNombreF.value = "";
        this.inputEdadF.value = "";
        this.inputPosicionF.value = "";
        this.inputfechaF.value = "";
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
            <td> ${element.nombreEquipo} </td>
            <td> <button class="success-btn" id="${element.id}">Asignar Equipo</button> </td>
            <td> <button class="success-btn" id="${element.id}">Eliminar Futbolista</button> </td>
            `;
            this.listaFutbolistas.appendChild(fila);
        });
    }

    // funcion para mostrar los futbolistas por equipo
    renderizarFutbolistasPorEquipo(futbolistas) {
        this.listaFutbolistasFiltradosEquipo.innerHTML = "";
        futbolistas.forEach(element => {
            const fila = document.createElement("tr");
            fila.id = element.id;
            fila.innerHTML = `
            <td> ${element.nombre} </td>
            <td> ${element.edad} </td>
            <td> ${element.posicion} </td>
            <td> ${element.fechanacimiento} </td>
            <td> ${element.nombreEquipo} </td>
            `;
            this.listaFutbolistasFiltradosEquipo.appendChild(fila);
        });
    }

    // funcion para mostrar los futbolistas por posicion
    renderizarFutbolistasPorPosicion(futbolistas) {
        this.listaFutbolistasFiltradosPosicion.innerHTML = "";
        futbolistas.forEach(element => {
            const fila = document.createElement("tr");
            fila.id = element.id;
            fila.innerHTML = `
            <td> ${element.nombre} </td>
            <td> ${element.edad} </td>
            <td> ${element.posicion} </td>
            <td> ${element.fechanacimiento} </td>
            <td> ${element.nombreEquipo} </td>
            `;
            this.listaFutbolistasFiltradosPosicion.appendChild(fila);
        });
    }

    // funcion para mostrar los equipos por ciudad
    renderizarEquiposPorCiudad(equipos) {
        this.listaEquiposFiltradosCiudad.innerHTML = "";
        equipos.forEach(element => {
            const fila = document.createElement("tr");
            fila.id = element.id;
            fila.innerHTML = `
            <td> ${element.nombre} </td>
            <td> ${element.ciudad} </td>
            <td> ${element.estadio} </td>
            `;
            this.listaEquiposFiltradosCiudad.appendChild(fila);
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
            <td> <button class="success-btn" id="${element.id}">Modificar Equipo</button> </td>
            <td> <button class="success-btn" id="${element.id}">Eliminar Equipo</button> </td>
            `;
            this.listaEquipos.appendChild(fila);
        });
    }

}