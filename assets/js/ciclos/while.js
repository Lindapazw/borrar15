const carros = ['Ford', 'BMW', 'Fiat','Toyota'];

let i = 0;

while (i < carros.length) {
    console.log( carros[i] );
    i++;
}

// DO WHILE
// por lo menos ejecuta el bloque interno una vez

j = 0;

do {
    console.log(carros[j]);
    j++;
} while(carros[j]);
