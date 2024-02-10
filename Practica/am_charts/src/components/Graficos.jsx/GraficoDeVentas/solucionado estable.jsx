import { useState, useEffect, useLayoutEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

import Ventas from "../../../json/Ventas";

const GraficoDeVentas = () => {
  useLayoutEffect(() => {
    var root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    var chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        wheelY: "zoomX",
        layout: root.verticalLayout,
        maxTooltipDistance: 0,
        
      })
    );



    



    // Define data
    var data = [
      { date: "2021-01-01", value: 100, },
      { date: "2021-01-02", value: 320, },
      { date: "2021-01-03", value: 270, },
      { date: "2021-01-04", value: 150, },
      { date: "2021-01-05", value: 156, },
      { date: "2021-01-06", value: 199, },
      { date: "2021-01-07", value: 114, },
      { date: "2021-01-08", value: 320, },
      { date: "2021-01-09", value: 90, },
      { date: "2021-01-10", value: 300, },
      { date: "2021-01-11", value: 150, },
      { date: "2021-01-12", value: 320, },
      { date: "2021-01-13", value: 185, },
      { date: "2021-01-14", value: 100, },
    ];

    
    

    data = data.filter(function (item) {
      return item.date !== null;
    });

    // Create Y-axis
    var yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        extraTooltipPrecision: 1,
        renderer: am5xy.AxisRendererY.new(root, {}),
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        baseInterval: { timeUnit: "day", count: 1 },
        renderer: am5xy.AxisRendererX.new(root, {}),
      })
    );

    xAxis.get("dateFormats")["day"] = "MM/dd";
    xAxis.get("periodChangeDateFormats")["day"] = "MMM";

    // Create series
    function createSeries(name, field) {
      var series = chart.series.push(
        am5xy.LineSeries.new(root, {
          name: name,
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: field,
          valueXField: "date",
          tooltip: am5.Tooltip.new(root, {}),
          connect: false,
        })
      );

      series.bullets.push(function () {
        return am5.Bullet.new(root, {
          sprite: am5.Circle.new(root, {
            radius: 5,
            fill: series.get("fill"),
          }),
        });
      });

      series.strokes.template.set("strokeWidth", 2);

      series
        .get("tooltip")
        .label.set("text", "[bold]{name}[/]\n{valueX.formatDate()}: {valueY}");

        
        series.data.processor = am5.DataProcessor.new(root, {
            numericFields: ["value"],
            dateFields: ["date"],
            dateFormat: "yyyy-MM-dd"
          });


      series.data.setAll(data);
    }

    createSeries("Series", "value");

    // Add cursor
    chart.set(
      "cursor",
      am5xy.XYCursor.new(root, {
        behavior: "zoomXY",
        xAxis: xAxis,
      })
    );

    xAxis.set(
      "tooltip",
      am5.Tooltip.new(root, {
        themeTags: ["axis"],
      })
    );

    yAxis.set(
      "tooltip",
      am5.Tooltip.new(root, {
        themeTags: ["axis"],
      })
    );

    return () => {
      root.dispose();
    };
  }, []);

  return (
    // Tu componente y su lógica aquí
    <div>
      <hr />

      <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    </div>
  );
};

export default GraficoDeVentas;
