
 const personaje = (vida,daño, defensa) => ({
    vida: vida,
    daño: daño,
    defensa: defensa,
    atacar: () => {
        console.log(`Tu personaje acaba de infligir ${daño} puntos de daño al enemigo`)
    }
})

const arquero  = personaje (10, 3, 1)

const espadachin = personaje(13, 2, 3)

console.log(`Vida: ${arquero.vida}
Daño: ${arquero.daño}
Defensa: ${arquero.defensa}`)

arquero.atacar()

