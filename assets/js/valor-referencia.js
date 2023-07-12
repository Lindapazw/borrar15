// no importa si transformamos la variable no afecta al espacio por memoria
// pasamos por valor
let a = 10;
let b = a;
a= 30;

console.log({a, b});

// los objetos lo pasamos por referencia
let juan = { nombre:'juan'};
let ana = {...juan};
ana.nombre = 'Ana'

console.log({juan,ana});

const cambiaNombre = ({...persona}) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = {nombre: 'Peter'};
let tony = cambiaNombre( peter );

console.log({peter,tony});

// arreglos
const frutas = ['manzana', 'pera','banana'];
const otrasFrutas = [...frutas];

otrasFrutas.push('mango');
console.table({frutas, otrasFrutas});