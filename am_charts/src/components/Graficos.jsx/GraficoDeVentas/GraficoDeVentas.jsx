import { useState, useEffect, useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import Ventas from "../../../json/Ventas";

const GraficoDeVentas = () => {


    const [gananciasPorDia, setGananciasPorDia] = useState([]); 
    const [useEffectCompleted, setUseEffectCompleted] = useState(false);



    useEffect(() => {
      const gananciasTotalesPorDia = Ventas.reduce((result, venta) => { 
        const fecha = venta.fecha;
        const precioTotal = result[fecha] ? result[fecha] + venta.precio : venta.precio;
  
        return {
          ...result,
          [fecha]: precioTotal,
        };
      }, {});
  
      const gananciasPorDiaArray = Object.keys(gananciasTotalesPorDia).map((fecha, id) => ({
        id: id + 1, // Puedes ajustar la lógica para generar IDs únicos según tus necesidades
        fecha,
        total: gananciasTotalesPorDia[fecha],
      }));
  
      // Ordenar por fecha
      gananciasPorDiaArray.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
  
      setGananciasPorDia(gananciasPorDiaArray);
      console.log(gananciasPorDiaArray)
      setUseEffectCompleted(true);
    }, []);





  useLayoutEffect(() => {
    if (useEffectCompleted) {
    
    var root = am5.Root.new("chartdiv");

    root.setThemes([
      am5themes_Animated.new(root)
    ]);
    
 

    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: "panX",
        wheelY: "zoomX"
      })
    );
    
    var easing = am5.ease.linear;
    

    var xAxis = chart.xAxes.push(
      am5xy.GaplessDateAxis.new(root, {
        maxDeviation: 0.1,
        groupData: false,
        baseInterval: {
          timeUnit: "day",
          count: 1
        },
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 30
        }),
        tooltip: am5.Tooltip.new(root, {})
      })
    );
    
    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        maxDeviation: 0.1,
        renderer: am5xy.AxisRendererY.new(root, {})
      })
    );

    var series = chart.series.push(
      am5xy.LineSeries.new(root, {
        minBulletDistance: 10,
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "total",
        valueXField: "fecha",
        tooltip: am5.Tooltip.new(root, {
          pointerOrientation: "horizontal",
          labelText: "[bold fontSize: 13px]Fecha:[/] [fontSize: 13px]{valueX.formatDate()}\n[bold fontSize: 13px]Total:[/] [fontSize: 13px]{valueY}"  //[bold]{name}[/]\n{valueX.formatDate()}: {valueY}
        })
      })
    );

    series.data.processor = am5.DataProcessor.new(root, {
        numericFields: ["total"],
        dateFields: ["fecha"],
        dateFormat: "yyyy-MM-dd"
    });
    
    
    series.data.setAll(gananciasPorDia);
    
    series.bullets.push(function () {
      return am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: series.get("fill"),
          stroke: root.interfaceColors.get("background"),
          strokeWidth: 2
        })
      });
    });
    

    var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
      xAxis: xAxis
    }));
    cursor.lineY.set("visible", false);
    

    chart.set("scrollbarX", am5.Scrollbar.new(root, {
      orientation: "horizontal"
    }));
    

    series.appear(1000, 100);
    chart.appear(1000, 100);

    

    return () => {
      root.dispose();
      
    };
}}, [useEffectCompleted]);

  return (
    // Tu componente y su lógica aquí
    <div>
      <hr />

      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>

   

    </div>
  );
};

export default GraficoDeVentas;
