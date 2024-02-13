 
import {funciones} from './funciones.js'

function Personaje (id, oficio, vida, daño, defensa) {
    this.id = id;
    this.oficio = oficio;
    this.vida = vida;
    this.daño = daño;
    this.defensa = defensa;

    this.CrearTargeta = function (GetLabel) {
        //crear div
        const Tarjeta = funciones.crearEtiqueta(GetLabel, 'div');
        
         // crear etiqueta p
         //                              ( ID etiqueta, 'etiqueta a crear'  )
        const TextOficio = funciones.crearEtiqueta(Tarjeta, 'p');
        const Textvida = funciones.crearEtiqueta(Tarjeta, 'p');
        const Textdaño = funciones.crearEtiqueta(Tarjeta, 'p');
        const Textdefensa = funciones.crearEtiqueta(Tarjeta, 'p');
       
        const atributo = (varEtiqueta, Texto, atributoValue) =>{
            return funciones.crearTexto(varEtiqueta, `${Texto} ${atributoValue}`)
        }
    
        atributo(TextOficio, "Oficio:", oficio);
        atributo(Textvida, "Vida:", vida);
        atributo(Textdaño, "Daño:", daño);
        atributo(Textdefensa, "Defensa:", defensa);
    
    
        funciones.crearEtiqueta(GetLabel, 'br');

    }
}


const data = [

    new Personaje (1, "Espadachín", 100, 20, 10),

    new Personaje (2, "Arquero", 80, 25, 8),
    
    new Personaje (3, "Mago", 60, 30, 5),

    new Personaje (4, "Asesino", 90, 22, 7)
];



const GetLabel = document.querySelector("#section");


data.forEach((Personaje) => {
    Personaje.CrearTargeta(GetLabel)
});








console.log(data)




