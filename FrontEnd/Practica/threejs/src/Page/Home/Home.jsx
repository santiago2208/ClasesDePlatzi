import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import  Autos  from '../../json/Autos'

import CompGrafBarras from '../../components/Graficos.jsx/Amchard1/Chart'
import CompGrafTorta from '../../components/Graficos.jsx/Amchard2/Chart'
import CompTablaAutos from '../../components/Graficos.jsx/Tabla/Tabla'


import'./Home.css'

import IconGrafBarras from '../../assets/Iconos/IconGrafBarras.png'
import IconGrafTorta from '../../assets/Iconos/IconGrafTorta.png'
import IconTabla from '../../assets/Iconos/IconTabla.png'




function Home() {

  const [GrafBarras, setGrafBarras] = useState(true);
  const [GrafTorta, setGrafTorta] = useState(false);
  const [TablaAutos, setTablaAutos] = useState(false);

  const [Registros, setRegistros] = useState(false);

  const ShowGrafBarras = () => {
    setGrafBarras(true);
    setGrafTorta(false);
    setTablaAutos(false);
  };
  
  const ShowGrafTorta = () => {
    setGrafBarras(false);
    setGrafTorta(true);
    setTablaAutos(false);
  };
  
  const ShowTablaAutos = () => {
    setGrafBarras(false);
    setGrafTorta(false);
    setTablaAutos(true);
  };

  const ShowRegistros = () => {
    setRegistros(!Registros)
  };

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
    <main className='Main'>
    


    <section className='SecGraficos'>
      <h2 className='SecGraficos_subTitle'>Contexto de los grafico</h2>
      <p className='SecGraficos_Text'>Los siguientes graficos te permitiran ver de 500 registros <br /> las 5 marcas de autos con mas usuarios</p>

      <div className='Graficos'>
        <div className='Graficos__header'>
          <img onClick={ShowGrafBarras} 
          className={GrafBarras ? 'Graficos__IconBtn Graficos__IconBtnTrue': 'Graficos__IconBtn'} 
          src={IconGrafBarras} 
          alt="Icono de grafico de barras" />

          <img onClick={ShowGrafTorta} 
          className={GrafTorta ? 'Graficos__IconBtn Graficos__IconBtnTrue':'Graficos__IconBtn'} 
          src={IconGrafTorta} 
          alt="Icono de grafico de torta" />

          <img onClick={ShowTablaAutos} 
          className={TablaAutos ? 'Graficos__IconBtn Graficos__IconBtnTrue':'Graficos__IconBtn'} 
          src={IconTabla} 
          alt="Icono tabla de datos" />
        </div>

        {GrafBarras && (<>
          <CompGrafBarras/>
        </>)}

        {GrafTorta && (<>
          <CompGrafTorta/>
        </>)}

        {TablaAutos && (<>
          <CompTablaAutos/>
        </>)}



      </div>
    </section>





       <h1>Total de Registros: {totalRegistros}</h1>


       {/* Mostrar la marca con más autos en un h1 */}
      <h1>{`Marca con más Autos: ${marcaConMasAutos} (${totalAutos /*+ (totalAutos/3)*/} autos)`}</h1>

<br />

          <hr />


       {/* Mostrar el total de carros por marca en etiquetas h3 */}

          <h1>Total de usuarios por marca</h1>
          <br />
        <div className='TotalUsuariosPorMarca'>
          {Object.entries(totalCarrosPorMarca).map(([marca, total]) => (
            <span className='TotalUsuariosPorMarca__text' key={marca}>{`${marca}: ${total}`}</span>
          ))}
        </div>


          <button onClick={ShowRegistros}>Mostrar todos los registros</button>

      {Registros && (<>
        <table className='Table'>
          <thead className='thead'>
            <tr>
              <th className='th'>id</th>
              <th className='th'>Name</th>
              <th className='th'>Card</th>
            </tr>
          </thead>
          <tbody>
            {Autos.map((auto) => (
            <tr key={auto.id}>
              <td className='td'>{auto.id}</td>
              <td className='td'>{auto.first_name}</td>
              <td className='td'>{auto.Card}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </>)}


      <br /><br /><br /><br />
      
    </main>
  )
}

export default Home