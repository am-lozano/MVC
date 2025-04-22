class Vista {

    // constructor
    constructor() {
        this.form = document.getElementById("#");
        this.formInput = document.getElementById("#");
        this.lista = document.getElementById("#");
        this.boton = document.getElementById("#");
    }

    // devolvemos el formulario
    getInput() {
        return this.formInput.value;
    }

    // funcion para limpiar el texto anterior del formulario
    limpiarForm() {
        this.formInput.value = "";
    }

    /**
     * @param {*} falta
     * anadir formularios para actualizar datos
     * 
     * @param {*} duda
     * actualizarInfoJugador() y cambiarEquipo() ?????????????
     * 
     * @param {*} falta
     * mostrar los jugadores con card bootstrap, y su info debajo
     */

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