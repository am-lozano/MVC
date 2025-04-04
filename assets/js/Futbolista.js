class Futbolista {
    // Atributos
    id;
    nombre;
    edad;
    posicion;
    fechanacimiento;
    idEquipo;

    /**
     * Constructor de la clase Equipo
     * @param {number} id - El ID del futbolista
     * @param {string} nombre - El nombre del futbolista
     * @param {number} edad - La edad del futbolista
     * @param {string} posicion - La posición del futbolista
     * @param {string} fechanacimiento - La fecha de nacimiento del futbolista
     */
    constructor(id, nombre, edad, posicion, fechanacimiento) {
        // Validaciones
        if (typeof id !== 'number' || id <= 0) {
            throw new Error("El ID debe ser un número positivo");
        }else{
            this.id = id;
        }
        if (typeof nombre !== 'string' || nombre.trim() === '') {
            throw new Error("El nombre debe ser una cadena no vacía");
        }else{
            this.nombre = nombre;
        }
        if (typeof edad !== 'number' || edad <= 0) {
            throw new Error("La edad debe ser un número positivo");
        }else{
            this.edad = edad;
        }
        if (typeof posicion !== 'string' || posicion.trim() === '') {
            throw new Error("La posición debe ser una cadena no vacía");
        }else{
            this.posicion = posicion;
        }
        if (typeof fechanacimiento !== 'string' || fechanacimiento.trim() === '') {
            throw new Error("La fecha de nacimiento debe ser una cadena no vacía");
        }else{
            this.fechnacimiento = fechanacimiento;
        }
        this.idequipo = null; // Inicializado como null, se puede establecer más tarde

        this.guardarFutbolista();
    }

    // Getters
    getId() {
        return this.id;
    }
    getNombre() {
        return this.nombre;
    }

    getEdad() {
        return this.edad;
    }

    getPosicion() {
        return this.posicion;
    }

    getFechnacimiento() {
        return this.fechnacimiento;
    }

    getIdequipo() {
        return this.idequipo;
    }

    // Setters
    setNombre(nombre) {
        if (typeof nombre !== 'string' || nombre.trim() === '') {
            throw new Error("El nombre debe ser una cadena no vacía");
        }else{
            this.nombre = nombre;
        }
    }
    setEdad(edad) {
        if (typeof edad !== 'number' || edad <= 0) {
            throw new Error("La edad debe ser un número positivo");
        }else{
            this.edad = edad;
        }
    }
    setPosicion(posicion) {
        if (typeof posicion !== 'string' || posicion.trim() === '') {
            throw new Error("La posición debe ser una cadena no vacía");
        }else{
            this.posicion = posicion;
        }
    }

    setFechanacimiento(fechanacimiento) {
        if (typeof fechanacimiento !== 'string' || fechanacimiento.trim() === '') {
            throw new Error("La fecha de nacimiento debe ser una cadena no vacía");
        }else{
            this.fechanacimiento = fechanacimiento;
        }
    }

    //Método para guardar datos en el localStorage
    guardarFutbolista() {
        localStorage.setItem('futbolistas', JSON.stringify(this));
    }
}
