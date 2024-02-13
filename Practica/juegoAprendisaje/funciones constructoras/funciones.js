// export const crearTexto1 = (idEtiqueta, Text) => {
//     return idEtiqueta.appendChild(document.createTextNode(Text))
// }




export const funciones = {
    crearTexto: function crearTexto (idEtiqueta, Text) {
        return idEtiqueta.appendChild(document.createTextNode(Text))
    },
    crearEtiqueta: function crearEtiqueta (idEtiqueta, Etiqueta,) {
        return idEtiqueta.appendChild(document.createElement(Etiqueta))
    }
};












