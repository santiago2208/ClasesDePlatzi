    
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

    // Personaje vieje a ser igual a data.[posicion]
    data.forEach((Personaje) => {
        Personaje.CrearTargeta(GetLabel)
    });


    
    const GetInputSelect = (idLabel) => {
        return document.querySelector(idLabel);
    }
    

    

    const mostrarAtributos = () => {
        const Rol = GetInputSelect("#Oficio");

        const NewPersVida = document.querySelector('#NewPersVida');
        const NewPersDaño = document.querySelector('#NewPersDaño');
        const NewPersDefensa = document.querySelector('#NewPersDefensa');
        

        const atributNewChar = (VidaBase, DañoBase, DefensaBase) => {
           
            NewPersVida.textContent = `Vida: ${VidaBase}`;
            NewPersDaño.textContent = `Daño ${DañoBase}`;
            NewPersDefensa.textContent = `Defensa ${DefensaBase}`;

        }

        

        
        switch (Rol.value) {
            case 'Espadachín':
                const Espadachín = data[0]
                atributNewChar(Espadachín.vida, Espadachín.daño, Espadachín.defensa);
                break;
            case 'Arquero':
                const Arquero = data[1]
                atributNewChar(Arquero.vida, Arquero.daño, Arquero.defensa);
                break
            case 'Mago':
                const Mago = data[2]
                atributNewChar(Mago.vida, Mago.daño, Mago.defensa);
                break
            case 'Asesino':
                const Asesino = data[3]
                atributNewChar(Asesino.vida, Asesino.daño, Asesino.defensa);
                break
        }

        
        console.log(Rol.value);
    }

    function agregarDato() {
        // const inputSelect = document.querySelector("#Oficio");
        
        const Rol = GetInputSelect("#Oficio").value;
        const newID = data.length + 1
        
     
        const createNewCharacter = (newID1, oficio, vida, daño, defensa) => {
            data.push(new Personaje (newID1 , oficio, vida, daño, defensa))

            data[newID - 1].CrearTargeta(GetLabel)
            console.log(newID - 1)
        }

        // data.push(new Personaje (newID , "Espadachín", 100, 20, 10))


        console.log(Rol)

        

        if(Rol === '') {

        }else{

            switch (Rol) {
                case 'Espadachín':
                    createNewCharacter(newID , Rol, 100, 20, 10)
                    break;
                case 'Arquero':
                    createNewCharacter(newID , Rol, 80, 25, 8)
                    break
                case 'Mago':
                    createNewCharacter(newID , Rol, 60, 30, 5)
                    break
                case 'Asesino':
                    createNewCharacter(newID , Rol, 90, 22, 7)
                    break
            }




        const sectionRight = document.querySelector('#sectionRight');

        const mensaje = funciones.crearEtiqueta(sectionRight, 'div');

        mensaje.classList.add('MensajeEmergente');

        const mensajeText = funciones.crearEtiqueta(mensaje ,'p');

        funciones.crearTexto(mensajeText, "Se ha creado un nuevo personaje")
        
        }

        

        console.log(data)
        
        
        event.preventDefault();
    }

    

    window.mostrarAtributos = mostrarAtributos;
    window.agregarDato = agregarDato;





    












