import { useState, useEffect, useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5percent from "@amcharts/amcharts5/percent";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import Autos from '../../json/Autos'



function OtrosGraf_Autos(props) {
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
  
      // Crear un array de objetos con propiedades "marca" y "total"
      const resultado = marcasOrdenadas.map(([marca, total]) => ({
        marca,
        total,
      }));
  
      return resultado;
    };
  
    const fivecards = obtenerCincoMarcasConMasAutos();
    console.log(fivecards);
  
    console.log(`${fivecards[0].marca} tiene ${fivecards[0].total} autos.`);
  
    useLayoutEffect(() => {
      let root = am5.Root.new("chartdiv");
      let chart = root.container.children.push(
        am5percent.PieChart.new(root, {})
      );

      let series = chart.series.push(
        am5percent.PieSeries.new(root, {
          name: "Marcas",
          categoryField: "marca",
          valueField: "total"
        })
      );
      series.data.setAll(fivecards);


        // Add legend
        let legend = chart.children.push(am5.Legend.new(root, {
          centerX: am5.percent(50),
          x: am5.percent(50),
          layout: root.horizontalLayout
        }));

        legend.data.setAll(series.dataItems);
  
  
      return () => {
        root.dispose();
      };
    }, [fivecards]); // Agregar fivecards como dependencia

    
  
    return (
      <div className='MainGraficos_Targeta' id="chartdiv" ></div>
    );
  }
export default OtrosGraf_Autos;