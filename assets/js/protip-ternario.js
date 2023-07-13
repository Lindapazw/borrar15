const elMayor = (a,b) => (a > b) ? a : b;
console.log( elMayor(10,15) );

const tieneMenbresia = (miembro) => (miembro) ? '2 Dólares' : '10 Dólares';
console.log( tieneMenbresia(false) );

// ternario anidado

const nota = 95;
const grago =   nota >= 95 ? 'A+' : 
                nota >= 85 ? 'B+' : 'F';
console.log(nota,grago);

