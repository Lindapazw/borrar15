// los dias se semana abrimos a las 11
// los fines de semana a las 9 

const dia = 1;
const horaActual = 11;

let horaApertura;
let mensaje;

if( dia === 0 || dia === 6) {
    console.log('Es fin de semana');
    horaApertura = 9;
} else {
    console.log('es un dia de semana');
    horaApertura = 11;
}

if(horaActual >= horaApertura) {
    mensaje = 'Esta abierto';
} else {
    mensaje = `Está cerrado, hoy abrimos a las ${horaApertura}`;
}

console.log({horaApertura, mensaje});