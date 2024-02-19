import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import  Autos  from '../../../json/Autos'







function Tabla() {

  // Todos los carros → → → → → → → → → → → → → → → → → → → → → → → →
  useEffect(() => {
    // console.log('Objeto Autos:', Autos);

    // Mapear los cards y almacenarlos en un array
    const cardsArray = Autos.map((auto) => {
      return auto.Card;
    });

    // Mostrar el array de cards en la consola
    // console.log('Array de Cards:', cardsArray);
  }, []);


  // total de carros
  const totalRegistros = Autos.length;




  // 5 marcas con mas usuarios → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → →
  const obtenerCincoMarcasConMasAutos = () => {
    const conteoPorMarca = {};

    Autos.forEach((auto) => {
      if (conteoPorMarca[auto.Card]) {
        conteoPorMarca[auto.Card]++;
      } else {
        conteoPorMarca[auto.Card] = 1;
      }
    });

    // Convertir el objeto en un array y ordenarlo por cantidad de autos
    const marcasOrdenadas = Object.entries(conteoPorMarca)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    return marcasOrdenadas;
  };

  const cincoMarcasConMasAutos = obtenerCincoMarcasConMasAutos();


  return (
      <table className='Table'>
        <thead className='thead'>
          <tr>
            <th className='th'>Marca</th>
            <th className='th'>Total de usuarios</th>
          </tr>
        </thead>
        <tbody>

        {cincoMarcasConMasAutos.map(([marca, total]) => (
          <tr key={marca}>
            <td className='td'>{` ${marca}`}</td>
            <td className='td'>{` ${total}`}</td>
          </tr>
        ))}
        </tbody>
      </table> 
  )
}

export default Tabla