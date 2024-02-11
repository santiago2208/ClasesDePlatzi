 
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


const GetMain = document.querySelector("#section");




data.forEach((item, index ) => {

    const Targeta = funciones.crearEtiqueta(GetMain, 'div');
    const Oficio = funciones.crearEtiqueta(Targeta, 'p');
    const vida = funciones.crearEtiqueta(Targeta, 'p');
    const daño = funciones.crearEtiqueta(Targeta, 'p');
    const defensa = funciones.crearEtiqueta(Targeta, 'p');
   
    const atributo = (varEtiqueta, atributoItem, atributoValue) =>{
        return funciones.crearTexto(varEtiqueta, `${atributoItem} ${atributoValue}`)
    }

    atributo(Oficio, "Oficio:", data[index].oficio);
    atributo(vida, "Vida:", data[index].vida);
    atributo(daño, "Daño:", data[index].daño);
    atributo(defensa, "Defensa:", data[index].defensa);


    funciones.crearEtiqueta(GetMain, 'br');
});








console.log(data)




