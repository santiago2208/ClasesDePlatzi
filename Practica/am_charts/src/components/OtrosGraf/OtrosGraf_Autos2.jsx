import { useState, useEffect, useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import Autos from '../../json/Autos'


function OtrosGraf_Autos2(props) {
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
    // console.log(fivecards);
  
    // console.log(`${fivecards[0].marca} tiene ${fivecards[0].total} autos.`);
  
    useLayoutEffect(() => {
      let root = am5.Root.new("chartdiv2");
  
      root.setThemes([am5themes_Animated.new(root)]);
  
      let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panY: false,
          layout: root.verticalLayout
        })
      );
  
      // Create Y-axis
      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {})
        })
      );
  
      // Create X-Axis
      let xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
            categoryField: "marca", // Cambiar a "marca" en lugar de "category"
            renderer: am5xy.AxisRendererX.new(root, {}),
        })
      );
      xAxis.data.setAll(fivecards);

  
      // Create series
      let series = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Marcas",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "total", // Cambiar a "total" en lugar de "value1"
          categoryXField: "marca", // Cambiar a "marca" en lugar de "category"
          tooltip: am5.Tooltip.new(root, {
            themeTags: ["axis "]
          })
        })
      );
      series.data.setAll(fivecards);

      series.get("tooltip").label.set("text", "[bold] {categoryX}: {valueY} usuarios");
        series.data.setAll(fivecards);



        am5.Label.new(root, {
          text: "Texto grande",
          fontSize: 30,
      });


      // Add cursor
      chart.set("cursor", am5xy.XYCursor.new(root, {
        // behavior: "zoomXY",
        // xAxis: xAxis
      }));

    //   xAxis.set("tooltip", am5.Tooltip.new(root, {
    //     themeTags: ["axis"]
    //   }));

      yAxis.set("tooltip", am5.Tooltip.new(root, {
        themeTags: ["axis"]
      }));
  
      return () => {
        root.dispose();
      };
    }, [fivecards]); // Agregar fivecards como dependencia

    
  
    return (
      <div className='MainGraficos_Targeta' id="chartdiv2"></div>
    );
  }
export default OtrosGraf_Autos2;