function crearPersona (nombre, apellido) {
    return {
        // nombre de propiedad es igual a nombre de la variable 
        nombre,
        apellido,
    }
}
const persona = crearPersona('Linda', 'Paz'); 
console.log(persona);

// cambiamos a funcion de flecha
const crearPersona2 = (nombre, apellido) =>({nombre,apellido});
