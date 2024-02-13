 
import {funciones} from './funciones.js'

// function Personaje (id, oficio, vida, daño, defensa) {
//     this.id = id;
//     this.oficio = oficio;
//     this.vida = vida;
//     this.daño = daño;
//     this.defensa = defensa;

//     this.CrearTargeta = function (GetLabel) {
//         //crear div
//         const Tarjeta = funciones.crearEtiqueta(GetLabel, 'div');
        
//          // crear etiqueta p
//          //                              ( ID etiqueta, 'etiqueta a crear'  )
//         const TextOficio = funciones.crearEtiqueta(Tarjeta, 'p');
//         const Textvida = funciones.crearEtiqueta(Tarjeta, 'p');
//         const Textdaño = funciones.crearEtiqueta(Tarjeta, 'p');
//         const Textdefensa = funciones.crearEtiqueta(Tarjeta, 'p');
       
//         const atributo = (varEtiqueta, Texto, atributoValue) =>{
//             return funciones.crearTexto(varEtiqueta, `${Texto} ${atributoValue}`)
//         }
    
//         atributo(TextOficio, "Oficio:", oficio);
//         atributo(Textvida, "Vida:", vida);
//         atributo(Textdaño, "Daño:", daño);
//         atributo(Textdefensa, "Defensa:", defensa);
    
    
//         funciones.crearEtiqueta(GetLabel, 'br');

//     }
// }

const Personaje = (id, oficio, vida, daño, defensa) => ({
    id: id,
    oficio: oficio,
    vida: vida,
    daño: daño,
    defensa: defensa,

    CrearTargeta: (GetLabel) => {
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
})


const data = [

    
    Personaje  (1, "Espadachín", 100, 20, 10),

    Personaje (1, "Espadachín", 100, 20, 10),

    Personaje (2, "Arquero", 80, 25, 8),
    
    Personaje (3, "Mago", 60, 30, 5),

    Personaje (4, "Asesino", 90, 22, 7)
];



const GetLabel = document.querySelector("#section");


data.forEach((Personaje) => {
    Personaje.CrearTargeta(GetLabel)
});


// ejemplo

const ejemplo = (numero, texto) => ({
    numero: numero,
    texto: texto
})

const ejemplo1= ejemplo(1, "hola")

console.log(`numero: ${ejemplo1.numero} \nTexto: ${ejemplo1.texto}`)




console.log(data)




