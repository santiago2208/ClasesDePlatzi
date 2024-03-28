import { useState, useEffect, useLayoutEffect, useRef  } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import Ventas from "../../../json/Ventas";


const GraficoDePruebas = () => {


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



    // const [data, setData] = useState([
    //   { year: "2021", value: 0.5 },
    //   { year: "2022", value: 2.6 },
    //   { year: "2023", : 2.8 }
    // ]);

    const [data, setData] = useState([
      { year: "2021", value: 0.5 },
      { year: "2022", value: 2.6 },
      { year: "2023", value: 2.8 }
    ]);

    const chartContainerRef = useRef(null);

    // function modificarValor() {
    //   // Modificar el valor del primer año (puedes cambiar según tus necesidades)
    //   data[0].value = 10.5;

    //   console.log(data)
    //   // Actualizar el valor mostrado en la página
      
    // }

    const modificarValor = () => {
      // Modificar data según tus necesidades
      // const newData = data.map(item => ({ ...item, value: item.value + 1 }));

      data[0].value = 4; 
      setData([...data]);
    };
 

    
    // var data = [{
    //   year: "2021",
    //   value: 0.5
    // }, {
    //   year: "2022",
    //   value: 2.6
    // }, {
    //   year: "2023",
    //   value: 2.8
    // }]



  useLayoutEffect(() => {
    if (!chartContainerRef.current) return;
    
      var root = am5.Root.new("chartdiv");


      // Set themes
      // https://www.amcharts.com/docs/v5/concepts/themes/
      root.setThemes([
        am5themes_Animated.new(root)
      ]);
      
      
      // Create chart
      // https://www.amcharts.com/docs/v5/charts/xy-chart/
      var chart = root.container.children.push(am5xy.XYChart.new(root, {
        panX: false,
        panY: false,
        wheelX: "panX",
        wheelY: "zoomX",
        layout: root.verticalLayout
      }));
      
      
      // Add legend
      // https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
      var legend = chart.children.push(
        am5.Legend.new(root, {
          centerX: am5.p50,
          x: am5.p50
        })
      );


      
      
      
      // Create axes
      // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
      var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
        categoryField: "year",
        renderer: am5xy.AxisRendererX.new(root, {
          cellStartLocation: 0.1,
          cellEndLocation: 0.9
        }),
        tooltip: am5.Tooltip.new(root, {})
      }));
      
      xAxis.data.setAll(data);
      
      var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
        autoZoom: false,
        renderer: am5xy.AxisRendererY.new(root, {})
      }));
      
      
      // Add series
      // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
      function makeSeries(name, fieldName) {
        var series = chart.series.push(am5xy.ColumnSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: fieldName,
          categoryXField: "year",
          stacked: true
        }));
      
        series.data.setAll(data);
        series.appear();
        legend.data.push(series);
      }
      
      makeSeries("Value", "value");
      
      chart.set("scrollbarX", am5.Scrollbar.new(root, {
        orientation: "horizontal"
      }));
      
      
      // Make stuff animate on load
      // https://www.amcharts.com/docs/v5/concepts/animations/
      chart.appear(1000, 100);

    return () => {
      root.dispose();
      
    };
}, [data]); 

  return (
    // Tu componente y su lógica aquí
    <div>
      <hr />

      <div id="chartdiv" ref={chartContainerRef} style={{ width: "100%", height: "500px" }}></div>

      <button onClick={modificarValor}>modificar</button>

    </div>
  );
};

export default GraficoDePruebas;
