function saludar(){
    // dentro de la funcion hay metodos
    console.log("Hola Linda");
}

const saludar2 = function(){
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

saludar();
saludar2();
saludar3('Linda 3');
saludar4('Abuela',40,true, 'Argentina');
saludarFlecha();
