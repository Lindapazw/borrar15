// objetos
let personaje = {
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

