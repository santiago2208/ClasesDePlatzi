
function descontarProducto (precio, porcentaje) {
     const descuento = (precio * porcentaje) / 100
     const precioConDescuento = precio - descuento
 
    return precioConDescuento

}

valorProducto = 10000

descontar = 20

presioFinal = descontarProducto(valorProducto, descontar)

console.log(presioFinal)