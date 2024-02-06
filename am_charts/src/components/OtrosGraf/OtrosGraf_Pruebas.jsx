import { useState, useEffect, useLayoutEffect, useRef  } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import Ventas from "../../json/Ventas";



const OtrosGraf_Pruebas = () => {


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
      { year: "2021", value: 0 },
      { year: "2022", value: 5 },
      { year: "2023", value: 7 },
      { year: "2024", value: 5 },
      { year: "2025", value: 5 },
      { year: "2026", value: 5 },
      { year: "2027", value: 5 },
      { year: "2028", value: 5 },
      { year: "2029", value: 5 },
      { year: "2030", value: 5 },
      { year: "2031", value: 5 }
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

      data[0].value = data[0].value +1; 
      setData([...data]);
    };
 
    const modificarValor2 = (datos) => {
      // Modificar data según tus necesidades
      // const newData = data.map(item => ({ ...item, value: item.value + 1 }));

      console.log(`este es el dato: ${datos}`)

      data[datos].value = data[datos].value +1; 
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
    
    let root = am5.Root.new("OtrosGraf_Pruebas");
  
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
          categoryField: "year", // Cambiar a "marca" en lugar de "category"
          renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );
    xAxis.data.setAll(data);


    // Create series
    let series = chart.series.push(
      am5xy.ColumnSeries.new(root, {
        name: "Marcas",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value", // Cambiar a "total" en lugar de "value1"
        categoryXField: "year", // Cambiar a "marca" en lugar de "category"
        tooltip: am5.Tooltip.new(root, {
          themeTags: ["axis "]
        })
      })
    );
    series.data.setAll(data);

    series.get("tooltip").label.set("text", "[bold] {categoryX}: {valueY}");
      series.data.setAll(data);



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
}, [data]); 

  return (
  
   
      <div className="MainGraficos_Targeta" id="OtrosGraf_Pruebas" ref={chartContainerRef} ></div>


  );
};

export default OtrosGraf_Pruebas;
