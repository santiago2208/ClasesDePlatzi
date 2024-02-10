 
import {funciones} from './funciones.js'



const data = [
    {
        id: 1,
        oficio: 'Espadachín',
        vida: 100,
        daño: 20,
        defensa: 10,
        metodo1: function (varEtiqueta) {
            funciones.crearEtiqueta(varEtiqueta, 'p').appendChild(document.createTextNode(`Oficio: ${this.oficio}`))
            funciones.crearEtiqueta(varEtiqueta, 'p').appendChild(document.createTextNode(`vida: ${this.vida}`))
            funciones.crearEtiqueta(varEtiqueta, 'p').appendChild(document.createTextNode(`daño: ${this.daño}`))
            funciones.crearEtiqueta(varEtiqueta, 'p').appendChild(document.createTextNode(`defensa: ${this.defensa}`))

            
        },
        metodo2: function (varEtiqueta) {
            // Crear etiquetas p
            const Oficio = funciones.crearEtiqueta(varEtiqueta, 'p');
            const vida = funciones.crearEtiqueta(varEtiqueta, 'p');
            const daño = funciones.crearEtiqueta(varEtiqueta, 'p');
            const defensa = funciones.crearEtiqueta(varEtiqueta, 'p');
            
            // Asignarle texto a las etiquetas P
            funciones.crearTexto(Oficio, `Oficio: ${this.oficio}`);
            funciones.crearTexto(vida, `Vida: ${this.vida}`);
            funciones.crearTexto(daño, `Daño: ${this.daño}`);
            funciones.crearTexto(defensa, `Defensa: ${this.defensa}`);
        }
    },
    {
        id: 2,
        oficio: 'Arquero',
        vida: 80,
        daño: 25,
        defensa: 8,
        metodo1: function (varEtiqueta) {
            funciones.crearEtiqueta(varEtiqueta, 'p').appendChild(document.createTextNode(`Oficio: ${this.oficio}`))
            funciones.crearEtiqueta(varEtiqueta, 'p').appendChild(document.createTextNode(`vida: ${this.vida}`))
            funciones.crearEtiqueta(varEtiqueta, 'p').appendChild(document.createTextNode(`daño: ${this.daño}`))
            funciones.crearEtiqueta(varEtiqueta, 'p').appendChild(document.createTextNode(`defensa: ${this.defensa}`))

            
        },
        metodo2: function (varEtiqueta) {
            // Crear etiquetas p
            const Oficio = funciones.crearEtiqueta(varEtiqueta, 'p');
            const vida = funciones.crearEtiqueta(varEtiqueta, 'p');
            const daño = funciones.crearEtiqueta(varEtiqueta, 'p');
            const defensa = funciones.crearEtiqueta(varEtiqueta, 'p');
            
            // Asignarle texto a las etiquetas P
            funciones.crearTexto(Oficio, `Oficio: ${this.oficio}`);
            funciones.crearTexto(vida, `Vida: ${this.vida}`);
            funciones.crearTexto(daño, `Daño: ${this.daño}`);
            funciones.crearTexto(defensa, `Defensa: ${this.defensa}`);
        }
    },
    {
        id: 3,
        oficio: 'Mago',
        vida: 60,
        daño: 30,
        defensa: 5,
        metodo1: function (varEtiqueta) {
            funciones.crearEtiqueta(varEtiqueta, 'p').appendChild(document.createTextNode(`Oficio: ${this.oficio}`))
            funciones.crearEtiqueta(varEtiqueta, 'p').appendChild(document.createTextNode(`vida: ${this.vida}`))
            funciones.crearEtiqueta(varEtiqueta, 'p').appendChild(document.createTextNode(`daño: ${this.daño}`))
            funciones.crearEtiqueta(varEtiqueta, 'p').appendChild(document.createTextNode(`defensa: ${this.defensa}`))

            
        },
        metodo2: function (varEtiqueta) {
            // Crear etiquetas p
            const Oficio = funciones.crearEtiqueta(varEtiqueta, 'p');
            const vida = funciones.crearEtiqueta(varEtiqueta, 'p');
            const daño = funciones.crearEtiqueta(varEtiqueta, 'p');
            const defensa = funciones.crearEtiqueta(varEtiqueta, 'p');
            
            // Asignarle texto a las etiquetas P
            funciones.crearTexto(Oficio, `Oficio: ${this.oficio}`);
            funciones.crearTexto(vida, `Vida: ${this.vida}`);
            funciones.crearTexto(daño, `Daño: ${this.daño}`);
            funciones.crearTexto(defensa, `Defensa: ${this.defensa}`);
        }
    },
    {
        id: 4,
        oficio: 'Asesino',
        vida: 90,
        daño: 22,
        defensa: 7,
        metodo1: function (varEtiqueta) {
            funciones.crearEtiqueta(varEtiqueta, 'p').appendChild(document.createTextNode(`Oficio: ${this.oficio}`))
            funciones.crearEtiqueta(varEtiqueta, 'p').appendChild(document.createTextNode(`vida: ${this.vida}`))
            funciones.crearEtiqueta(varEtiqueta, 'p').appendChild(document.createTextNode(`daño: ${this.daño}`))
            funciones.crearEtiqueta(varEtiqueta, 'p').appendChild(document.createTextNode(`defensa: ${this.defensa}`))
        },
        metodo2: function (varEtiqueta) {
            // Crear etiquetas p
            const Oficio = funciones.crearEtiqueta(varEtiqueta, 'p');
            const vida = funciones.crearEtiqueta(varEtiqueta, 'p');
            const daño = funciones.crearEtiqueta(varEtiqueta, 'p');
            const defensa = funciones.crearEtiqueta(varEtiqueta, 'p');
            
            // Asignarle texto a las etiquetas P
            funciones.crearTexto(Oficio, `Oficio: ${this.oficio}`);
            funciones.crearTexto(vida, `Vida: ${this.vida}`);
            funciones.crearTexto(daño, `Daño: ${this.daño}`);
            funciones.crearTexto(defensa, `Defensa: ${this.defensa}`);
        }
    },
];



const GetMain = document.querySelector("#main");



data.forEach((item, index ) => {

    data[index].metodo2(GetMain)
    funciones.crearEtiqueta(GetMain, 'br');
    
});








console.log(data)




