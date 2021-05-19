import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-fusion',
  templateUrl: './bar-fusion.component.html',
  styleUrls: ['./bar-fusion.component.scss']
})
export class BarFusionComponent implements OnInit {

  dataSource: Object;
  chartConfig: Object;

  constructor() {
    this.chartConfig = {
      width: '750',
      height: '400',
      type: 'mscolumn2d',
      dataFormat: 'json',
    };

    this.dataSource = {
      chart: {
        // caption: "App Publishing Trend",
        // subcaption: "2012-2016",
        //xaxisname: "Years",
        yaxisname: "Size (MB)",
        formatnumberscale: "1",
        plottooltext:
          "<b>$dataValue</b> MB <b>$seriesName</b> in $label",
        theme: "fusion",
        drawcrossline: "1"
      },
      categories: [
        {
          category: [
            {
              label: "Highcharts"
            },
            {
              label: "ECharts"
            },
            {
              label: "Chart.js"
            },
            {
              label: "Fusioncharts"
            },
          ]
        }
      ],
      dataset: [
        {
          seriesname: "Stat",
          data: [
            {
              value: 1.37
            },
            {
              value: 3.52
            },
            {
              value: .418
            },
            {
              value: 1.64
            }
          ]
        },
        {
          seriesname: "Parsed",
          data: [
            {
              value: 1.35
            },
            {
              value: 0.964
            },
            {
              value: 0.168
            },
            {
              value: 1.62
            }
          ]
        },
        {
          seriesname: "Gzipped",
          data: [
            {
              value: 0.446
            },
            {
              value: 0.306
            },
            {
              value: 0.051
            },
            {
              value: 0.455
            }
          ]
        }
      ]
    };
  }

  ngOnInit(): void {
  }
}

