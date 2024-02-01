
function personaje (vida,daño, defensa) {
    this.vida = vida
    this.daño = daño
    this.defensa = defensa
    this.atacar = function () {
        console.log(`Tu personaje acaba de infligir ${daño} puntos de daño al enemigo`)
    }
}

const arquero  = new personaje (10, 3, 1)

const espadachin = new personaje(13, 2, 3)

console.log(`Vida: ${arquero.vida}
Daño: ${arquero.daño}
Defensa: ${arquero.defensa}`)

arquero.atacar()

