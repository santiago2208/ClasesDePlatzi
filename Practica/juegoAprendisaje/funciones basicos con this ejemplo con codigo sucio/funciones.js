// export const crearTexto1 = (idEtiqueta, Text) => {
//     return idEtiqueta.appendChild(document.createTextNode(Text))
// }




export const funciones = {
    crearTexto: function (idEtiqueta, Text) {
        return idEtiqueta.appendChild(document.createTextNode(Text))
    },
    crearEtiqueta: function (idEtiqueta, Etiqueta,) {
        return idEtiqueta.appendChild(document.createElement(Etiqueta))
    }
};












