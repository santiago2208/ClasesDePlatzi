import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import  Autos  from '../../json/Autos'

import'./Home.css'






function Home() {

  // Todos los carros → → → → → → → → → → → → → → → → → → → → → → → →
  useEffect(() => {
    console.log('Objeto Autos:', Autos);

    // Mapear los cards y almacenarlos en un array
    const cardsArray = Autos.map((auto) => {
      return auto.Card;
    });

    // Mostrar el array de cards en la consola
    console.log('Array de Cards:', cardsArray);
  }, []);


  // total de carros
  const totalRegistros = Autos.length;


  // Contar el total de carros por marca → → → → → → → → → → → → → → → →
  const contarCarrosPorMarca = () => {
    const conteoPorMarca = {};

    Autos.forEach((auto) => {
      if (conteoPorMarca[auto.Card]) {
        conteoPorMarca[auto.Card]++;
      } else {
        conteoPorMarca[auto.Card] = 1;
      }
    });

    return conteoPorMarca;
  };

  const totalCarrosPorMarca = contarCarrosPorMarca();




  // Contar el total de carros por marca y obtener las 5 marcas con más autos → → → → → → → →
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


  // marca con mas autos → → → → → → → → → → → → → → → → → → → → → → → → → → → →
    // Encontrar la marca con más autos
    const encontrarMarcaConMasAutos = () => {
      const conteoPorMarca = {};
  
      Autos.forEach((auto) => {
        if (conteoPorMarca[auto.Card]) {
          conteoPorMarca[auto.Card]++;
        } else {
          conteoPorMarca[auto.Card] = 1;
        }
      });
  
      // Encontrar la marca con más autos
      const marcaConMasAutos = Object.entries(conteoPorMarca).reduce(
        (maxMarca, currentMarca) =>
          currentMarca[1] > maxMarca[1] ? currentMarca : maxMarca,
        ['', 0]
      );
  
      return marcaConMasAutos;
    };
  
    const [marcaConMasAutos, totalAutos] = encontrarMarcaConMasAutos();


  return (
    <main>
       <h1>Total de Registros: {totalRegistros}</h1>

       <hr />

       {/* Mostrar la marca con más autos en un h1 */}
      <h1>{`Marca con más Autos: ${marcaConMasAutos} (${totalAutos /*+ (totalAutos/3)*/} autos)`}</h1>

      <hr />

      {/* Mostrar las 5 marcas con más autos en un div */}
      <h1>
        <h1>5 marcas con mas autos</h1>
        {cincoMarcasConMasAutos.map(([marca, total]) => (
          <div key={marca}>
            <h3>{`Marca: ${marca}`}</h3>
            <h3>{`Total de Autos: ${total}`}</h3>
            <br />
          </div>
        ))}
      </h1>

       <hr />

       {/* Mostrar el total de carros por marca en etiquetas h3 */}
      <h2>
        {Object.entries(totalCarrosPorMarca).map(([marca, total]) => (
          <h3 key={marca}>{`Total de Carros ${marca}: ${total}`}</h3>
        ))}
      </h2>

      <hr />
      <br />
      <br />
      {/* Mostrar cada carro en etiquetas h2 */}
      <div>
        {Autos.map((auto) => (
          <h2 key={auto.id}>{auto.Card}</h2>
        ))}
      </div>
    </main>
  )
}

export default Home