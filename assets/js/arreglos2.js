// lenght
let juegos = ['zelda', 'Mario', 'Chrono', 'Fifa'];
console.log('Largo: ', juegos.length);

let primera = juegos[0];
let ultimo = juegos[ juegos.length - 1];

console.log({ primera, ultimo });

juegos.forEach( (elemento, indice, arr) => {
    console.log({ elemento, indice, arr });
});

// agrega al final
let nuevosJuegos = juegos.push('F-zero');
console.log({nuevosJuegos, juegos});

