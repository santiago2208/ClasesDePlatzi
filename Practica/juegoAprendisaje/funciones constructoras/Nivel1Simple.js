 
import {funciones} from './funciones.js'



const data = [
    {
        id: 1,
        oficio: 'Espadachín',
        vida: 100,
        daño: 20,
        defensa: 10
    },
    {
        id: 2,
        oficio: 'Arquero',
        vida: 80,
        daño: 25,
        defensa: 8
    },
    {
        id: 3,
        oficio: 'Mago',
        vida: 60,
        daño: 30,
        defensa: 5
    },
    {
        id: 4,
        oficio: 'Asesino',
        vida: 90,
        daño: 22,
        defensa: 7
    }
];


const GetMain = document.querySelector("#main");




data.forEach((item, index ) => {

    const Oficio = funciones.crearEtiqueta(GetMain, 'p');
    const Vida = funciones.crearEtiqueta(GetMain, 'p');
    const Daño = funciones.crearEtiqueta(GetMain, 'p');
    const Defensa = funciones.crearEtiqueta(GetMain, 'p');

   

    funciones.crearTexto(Oficio, `Oficio: ${data[index].oficio} ` );
    funciones.crearTexto(Vida, `Vida: ${data[index].oficio} ` );
    funciones.crearTexto(Daño, `Daño: ${data[index].oficio} ` );
    funciones.crearTexto(Defensa, `Defensa: ${data[index].oficio} ` );

    funciones.crearEtiqueta(GetMain, 'br');

});








console.log(data)




