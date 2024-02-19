

// function saludar() {
//     console.log("Hola mundo")
// }

// saludar()

// console.log("hello")

// let saludar2 = "hola2"

// console.log(saludar2)

function sumar(a, b) {
    
    return  a + b
}

var valor1 = 1;

var valor2 = 2;

sumar(valor1, valor2);


let resultado = "el resultado es: " + sumar(1, 3);

console.log(resultado);


function validarEdad(edad) {
    if(edad >= 18){
        console.log("Es mayor de edad, su edad es: " + edad );
    }else{
        console.log("Es menor de edad");
    }
}

var edad = validarEdad(18);


function saludarConNombre(nombre) {
    console.log("¡Hola, " + nombre + "!");
  }
  
  // Llamada a la función sin proporcionar un nombre
  saludarConNombre("Juan"); // Resultado: ¡Hola, Juan!



// notas:
/*
en nombre de las funciones deben tener cameCase que quiere decir que
la primera palabra deve ser en minuscula y las siguientes palabras deben
de ir con mayuscula en la primera letra inicial
*/


 


