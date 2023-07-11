// objetos
const personaje = {
    nombre:'Linda',
    codeName: 'Iroman',
    vivo: false,
    edad: 40,
    coords:{
        lat: 24.034,
        lng: -118.6,
    },
    trajes: [
        'Mark I',
        'Mark II',
        'Mark III',
    ],
    dirrecion: {
        zip: '123',
        ubicacion: 'casa 123'
    }
};

console.log(personaje);
console.log('Nombre', personaje.nombre);
console.log('Nombre', personaje['nombre']);
console.log('Edad', personaje.edad);

// anidados
console.log('Coors:', personaje.coords.lng);

// tarea = numero de trajes 
console.log('N° de trajes: ', personaje.trajes.length);

// último traje
console.log('Ultimo traje: ', personaje.trajes[2]);
console.log('Ultimo traje: ', personaje.trajes[personaje.trajes.length -1]);



// ********** Más detalles **********

// eliminar atributos
delete personaje.edad;
console.log(personaje);


