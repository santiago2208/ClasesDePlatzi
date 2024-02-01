/*↓ aqui se delcara y se asigna una variable ↓ */
var lastName = 'David'
/*↑ aqui se delcara y se asigna una variable ↑ */
lastName = 'Oscar'
console.log(lastName)
lastName 
// var es para variables globales

/* ↑ todo esto es posible porque estamos utilizando var ↑*/





/* con var tambien se puede reasignar el nombre de la variable */
let fruit = 'apple'
fruit = 'kiwi'
console.log(fruit)
// let tiene un alcance de bloque al igual que const

/** ↑  ↑  ↑  ↑ */

/*con const no se puede reasignar el nombre de la variable */
//const es una variable de bloque
const animal = 'dog'
animal = 'cat'
console.log(animal)

const frutas = () => {
    if (true) {
        var fruit1 = 'fruit1'; // funcion scope
        var fruit2 = 'fruit2'; // block scope
        var fruit3 = 'fruit3'; // block scope
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruits();
