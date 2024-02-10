import { useState, useEffect, useLayoutEffect } from 'react';
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";



import Ventas from '../../../json/Ventas';


const GraficoDeVentas = () => {

    const [fechaBuscada, setFechaBuscada] = useState("2024-01-02");
    const [totalVentasEnFecha, setTotalVentasEnFecha] = useState(0);
  
    useEffect(() => {
      // Filtrar las ventas que ocurrieron en la fecha buscada
      const ventasEnFecha = Ventas.filter(venta => venta.fecha === fechaBuscada);
  
      // Calcular el total de los productos vendidos en la fecha buscada
      const total = ventasEnFecha.reduce((total, venta) => total + venta.precio, 0);
  
      setTotalVentasEnFecha(total);
      console.log(total)

    }, [Ventas, fechaBuscada]);


    // otro otro otro

    const [gananciasPorDia, setGananciasPorDia] = useState([]);

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
          fecha: new Date(fecha).getTime(),
          total: gananciasTotalesPorDia[fecha],
        }));
    
        // Ordenar por fecha
        gananciasPorDiaArray.sort((a, b) => a.fecha - b.fecha);
    
        setGananciasPorDia(gananciasPorDiaArray);
        
      }, []);


  



    // ahora necesito que la fecha no sea un string si no que tenga este formato new Date(2012, 0, 1).getTime()

    // ya casi jojojojojojojojojojojojoj

    // useEffect(() => {
    //     const gananciasTotalesPorDia = Ventas.reduce((result, venta) => {
    //       const fecha = new Date(venta.fecha).getTime();
    //       const precioTotal = result[fecha] ? result[fecha] + venta.precio : venta.precio;
    
    //       return {
    //         ...result,
    //         [fecha]: precioTotal,
    //       };
    //     }, {});
    
    //     const gananciasPorDiaArray = Object.keys(gananciasTotalesPorDia).map((fecha, id) => ({
    //       id: id + 1,
    //       fecha: parseInt(fecha), // Convertir de string a número
    //       total: gananciasTotalesPorDia[fecha],
    //     }));
    
    //     setGananciasPorDia(gananciasPorDiaArray);
    //   }, []);

    // ya casi jojoojjojoojjojojojojojojo




//   Crear un objeto con 30 días y su información de ventas
//   const ventasPorDia = Array.from({ length: 30 }, (_, index) => {
//     const fecha = new Date(2024, 0, index + 1).toISOString().split('T')[0]; // Crear fechas para el mes actual (enero de 2024)
//     const ventasDiarias = Ventas.filter(venta => venta.fecha === fecha);
//     const totalVentasDiarias = ventasDiarias.reduce((total, venta) => total + venta.precio, 0);
    
//     return {
//       dia: index + 1,
//       fecha,
//       totalVentas: totalVentasDiarias,
//     };
//   });

    // // Crear un objeto con 30 días y su información de ventas
    // const ventasPorDia = Array.from({ length: 30 }, (_, index) => {
    //     const fecha = new Date(2024, 0, index + 1).getTime(); // Fecha en formato de tiempo UNIX
    //     const ventasDiarias = Ventas.filter(venta => venta.fecha === fecha);
    //     const totalVentasDiarias = ventasDiarias.reduce((total, venta) => total + venta.precio, 0);
        
    //     return {
    //       dia: index + 1,
    //       fecha,
    //       totalVentas: Math.floor(totalVentasDiarias), // Redondear y convertir a entero
    //     };
    //   });





    // const ventasPorDia = Array.from({ length: 30 }, (_, index) => {
    //     const fecha = new Date(2024, 0, index + 1); // Fecha con año, mes y día
    //     const ventasDiarias = Ventas.filter(venta => {
    //       const ventaFecha = new Date(venta.fecha);
    //       return (
    //         ventaFecha.getFullYear() === fecha.getFullYear() &&
    //         ventaFecha.getMonth() === fecha.getMonth() &&
    //         ventaFecha.getDate() === fecha.getDate()
    //       );
    //     });
    //     const totalVentasDiarias = ventasDiarias.reduce((total, venta) => total + venta.precio, 0);
        
    //     return {
    //       dia: index + 1,
    //       fecha: fecha.getTime(), // Convertir la fecha de nuevo a formato de tiempo UNIX
    //       totalVentas: Math.floor(totalVentasDiarias), // Redondear y convertir a entero
    //     };
    //   });


//   console.log(ventasPorDia)


  useEffect(() => {
    // Imprimir en consola la información de Ventas
    console.log('Información de Ventas:', /*Ventas*/);
  }, [0]);  // El segundo parámetro del useEffect es un array de dependencias. En este caso, está vacío para que el efecto se ejecute solo una vez al montar el componente.




// → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → → 


// console.log(fivecards);

// console.log(`${fivecards[0].marca} tiene ${fivecards[0].total} autos.`);

useLayoutEffect(() => {
  let root = am5.Root.new("chartdiv");

  root.setThemes([
    am5themes_Animated.new(root)
  ]);


  var data = [
    { date: new Date(2012, 0, 1).getTime(), value: 8 },
    { date: new Date(2012, 0, 2).getTime(), value: 10 },
    { date: new Date(2012, 0, 3).getTime(), value: 12 },
    { date: new Date(2012, 0, 7).getTime(), value: 7 },
    { date: new Date(2012, 0, 8).getTime(), value: 9 },
    { date: new Date(2012, 0, 9).getTime(), value: 13 },
    { date: new Date(2012, 0, 13).getTime(), value: 22 },
    { date: new Date(2012, 0, 16).getTime(), value: 20 }
  ];

      // Create chart
      var chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panX: true,
          panY: true,
          wheelX: "panX",
          wheelY: "zoomX"
        })
      );

      var easing = am5.ease.linear;



     // Create axes
     var xAxis = chart.xAxes.push(
        am5xy.GaplessDateAxis.new(root, {
          maxDeviation: 0.1,
          groupData: false,
          baseInterval: {
            timeUnit: "day",
            count: 1
          },
          renderer: am5xy.AxisRendererX.new(root, {
            minGridDistance: 50
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
  
      // Add series
      var series = chart.series.push(
        am5xy.LineSeries.new(root, {
          minBulletDistance: 10,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "total",
          valueXField: "fecha",
          tooltip: am5.Tooltip.new(root, {
            pointerOrientation: "horizontal",
            labelText: "{valueY}"
          })
        })
      );
  
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
  
      // Add cursor
      var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
        xAxis: xAxis
      }));
      cursor.lineY.set("visible", false);
  
      // add scrollbar
      chart.set("scrollbarX", am5.Scrollbar.new(root, {
        orientation: "horizontal"
      }));
  
      // Make stuff animate on load
      series.appear(1000, 100);
      chart.appear(1000, 100);
    




  return () => {
    root.dispose();
  };
}, []); 



  return (
    // Tu componente y su lógica aquí
    <div>

        <h1>{totalVentasEnFecha}</h1>
        <hr />

    <div id="chartdiv" style={{ width: '100%', height: '500px' }}></div>

       <h1>Información de Ventas:</h1>
      <div>
      {/* {ventasPorDia.map(venta => (
          <div key={venta.dia}>
            <h1>Día {venta.dia}</h1>
            <h1>Fecha: {venta.fecha}</h1>
            <h1>Total de Ventas: ${venta.totalVentas}</h1>
            <hr />
          </div>
        ))} */}
      </div>

      {/* {ventasData.map(venta => (
          <div key={venta.id}>
            <h1>ID: {venta.id}</h1>
            <h1>Producto: {venta.producto}</h1>
            <h1>Precio: ${venta.precio}</h1>
            <h1>Fecha: {venta.fecha}</h1>
            <hr />
          </div>
        ))} */}
    </div>
  );
}

export default GraficoDeVentas;