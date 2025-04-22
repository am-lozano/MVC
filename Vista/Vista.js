class Vista {

    // constructor
    constructor() {
        this.formJ = document.getElementById("formJugador");
        this.formE = document.getElementById("formEquipo");
        this.inputNombreE = document.getElementById("nombreEquipo");
        this.inputCiudadE = document.getElementById("ciudadEquipo");
        this.inputEstadioE = document.getElementById("estadioEquipo");
        this.inputNombreJ = document.getElementById("nombreJugador");
        this.inputEdadJ = document.getElementById("edadJugador");
        this.inputPosicionJ = document.getElementById("posicionJugador");
        this.inputfechaJ = document.getElementById("fechaJugador");
        this.lista = document.getElementById("#");
        this.botonAnadirJ = document.getElementById("botonAnadirJugador");
        this.botonAnadirE = document.getElementById("botonAnadirEquipo");
        this.botonModificarJ = document.getElementById("botonModificarJugador");
        this.botonModificarE = document.getElementById("botonModificarEquipo");
        this.botonEliminarJ = document.getElementById("botonEliminarJugador");
        this.botonEliminarE = document.getElementById("botonEliminarEquipo");
    }

    // devolvemos el formulario
    getInput() {
        return this.formInput.value;
    }

    // funcion para limpiar el texto anterior del formulario
    limpiarForm() {
        this.formInput.value = "";
    }

    // funcion para mostrar los jugadores
    renderizarJug(jugador) {
        this.lista.innerHTML = "";
        jugador.array.forEach(element => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
            <td> ${element.nombre} </td>
            <td> ${element.edad} </td>
            <td> ${element.posicion} </td>
            <td> ${element.fechanacimiento} </td>
            <td> <button class="success-btn" data-id="#{element.id}"> Asignar Equipo </button> </td>
            <td> <button class="success-btn" data-id="#{element.id}"> Eliminar Jugador </button> </td>
            `;
            this.lista.appendChild(fila);
        });
    }

    // funcion para mostrar los equipos
    renderizarEquipo(equipo) {
        this.lista.innerHTML = "";
        equipo.array.forEach(element => {
            const fila = document.createElement("tr");
            fila.innerHTML = `
            <td> ${element.nombre} </td>
            <td> ${element.ciudad} </td>
            <td> ${element.estadio} </td>
            <td> <button class="success-btn" data-id="#{element.id}"> Agregar Jugador </button> </td>
            <td> <button class="success-btn" data-id="#{element.id}"> Eliminar Jugador </button> </td>
            `;
            this.lista.appendChild(fila);
        });
    }

}