function crearPersona (nombre, apellido) {
    return {
        nombre: nombre,
        apellido: apellido,
    }
}

const crearPersona2 = (nombre, apellido) =>({nombre,apellido});





const persona = crearPersona('Linda', 'Paz'); 
console.log(persona);
