function saludar(){
    // dentro de la funcion hay metodos
    console.log("Hola Linda");
    return  1;
    // despues del return no se se ejecuta el codigo
    console.log("No se ejecuta el codigo");
}

const saludar2 = function(){
    // no son retornos de la función
    console.log("Hola Linda 2");
}

// argumentos
function saludar3(nombre){
    console.log('Hola ' + nombre);
}

const saludar4 = function(nombre){
    console.log(arguments);
};

const saludarFlecha = () => {
    console.log("Flecha");
}

// retornos de la funcion
const retorno = saludar();
console.log(retorno);

saludar2();
saludar3('Linda 3');
saludar4('Abuela',40,true, 'Argentina');
saludarFlecha();


// tarea 
const aleatoreo = () =>  Math.random();


console.log(aleatoreo());