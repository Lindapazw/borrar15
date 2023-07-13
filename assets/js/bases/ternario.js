// los dias se semana abrimos a las 11
// los fines de semana a las 9 

const dia = 0;
const horaActual = 7;

let horaApertura = ([0,6].includes(dia)) ? 9 : 11;
let mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : `Está cerrado, hoy abrimos a las ${horaApertura}`;

console.log({horaApertura, mensaje});