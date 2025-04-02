class Equipo {

    // Atributos
    id;
    nombre;
    ciudad;
    estadio;

    /**
     * Constructor de la clase Equipo.
     * @param {number} id - El ID del equipo
     * @param {string} nombre - El nombre del equipo
     * @param {string} ciudad - La ciudad del equipo
     * @param {string} estadio - El estadio del equipo
     */
  constructor(id, nombre, ciudad, estadio) {
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
    if (typeof ciudad !== 'string' || ciudad.trim() === '') {
      throw new Error("La ciudad debe ser una cadena no vacía");
    }else{
      this.ciudad = ciudad;
    }
    if (typeof estadio !== 'string' || estadio.trim() === '') {
      throw new Error("El estadio debe ser una cadena no vacía");
    }else{ 
        this.estadio = estadio;
    }
  }

    // Getters
    getId() {
      return this.id;
    }

    getNombre() {
      return this.nombre;
    }

    getCiudad() {
      return this.ciudad;
    }

    getEstadio() {
      return this.estadio;
    }

    // Setters
   setNombre(nombre) {
      if (typeof nombre !== 'string' || nombre.trim() === '') {
        throw new Error("El nombre debe ser una cadena no vacía");
      }else{
        this.nombre = nombre;
      }
    }
    setCiudad(ciudad) {
      if (typeof ciudad !== 'string' || ciudad.trim() === '') {
        throw new Error("La ciudad debe ser una cadena no vacía");
      }else{
        this.ciudad = ciudad;
      }
    }
    setEstadio(estadio) {
      if (typeof estadio !== 'string' || estadio.trim() === '') {
        throw new Error("El estadio debe ser una cadena no vacía");
      }else{
        this.estadio = estadio;
      }
    }
    
    //Método para guardar un equipo en el localStorage
    guardarEquipo() {
        localStorage.setItem('equipos', JSON.stringify(this));
    }

}