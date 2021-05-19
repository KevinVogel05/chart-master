import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-js',
  templateUrl: './bar-js.component.html',
  styleUrls: ['./bar-js.component.scss']
})
export class BarJsComponent implements OnInit {

  barChartOptions = {
    scaleShowVertivalLines: false,
    responsive: true,
  };
  barChartLabels = ['Highcharts', 'ECharts', 'Chart.js', 'Fusioncharts'];
  barChartType = 'bar';
  barChartLegend = true;
  barChartData = [
    {
      data: [1.37, 3.52, 0.418, 1.64],
      label: 'Stat'
    },
    {
      data: [1.35, 0.964, 0.168, 1.62],
      label: 'Parsed'
    },
    {
      data: [0.446, 0.306, 0.051, 0.455],
      label: 'Gzipped'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
