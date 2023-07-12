let a = 5 

if(a < 10){
    console.log("A es menor a 10");
} else {
    console.log("A es mayor a 10");
}

console.log("fin de programa");

// creamos instancias
const hoy = new Date();
let dia = hoy.getDay();

console.log(hoy);
console.log(dia);

if (dia === 3){
    console.log('Hoy es Miercoles');
}else{
    console.log('Hoy no es Miercoles');
}

// tarea

dia = 1;

const diasObjeto = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado',
}

console.log(diasObjeto[dia] || 'dia no definido');