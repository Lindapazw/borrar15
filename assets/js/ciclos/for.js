const heroes = ['batman', 'super man', 'aquaman'];

console.warn('For tradicional');

//  incializacion, condicion, incrementacion
for( let i = 0;  i < heroes.length;  i++ ) {
    console.log(heroes[i]);
}

// for in
for (let i in heroes) {
    console.log(heroes[i]);
}

// for of
for (let i of heroes) {
    console.log(i);
}