

function Casa (nomCasa) {
    this.nomCasa = nomCasa
    this.abrirPuerta = function () {
        console.log('🚪')
    }
}

const Casa1 = new Casa ("casa 1",) 

const Casa2 = new Casa ('casa 2') 


console.log(Casa1.nomCasa)

Casa2.abrirPuerta()



