import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bar-e',
  templateUrl: './bar-e.component.html',
  styleUrls: ['./bar-e.component.scss']
})
export class BarEComponent implements OnInit {

  options;

  constructor() { }

  ngOnInit(): void {
    this.options = {
      // darkMode: true,
      // backgroundColor: '#100C2A',
      legend: {
        data: ['Stat', 'Parsed', 'Gzipped']
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'shadow'
        }
    },
      toolbox: {
        show: true,
        orient: 'vertical',
        left: 'right',
        top: 'center',
        feature: {
            mark: {show: true},
            dataView: {show: true, readOnly: false},
            magicType: {show: true, type: ['line', 'bar', 'stack', 'tiled']},
            restore: {show: true},
            saveAsImage: {show: true}
        }
    },
      xAxis: {
          type: 'category',
          data: ['Highcharts', 'ECharts', 'Chart.js', 'Fusioncharts'],
          axisTick: {show: false},
      },
      yAxis: {
          type: 'value'
      },
      series: [
        {
          data: [1.37, 3.52, 0.418, 1.64],
          type: 'bar',
          name: 'Stat',
          emphasis: {
              focus: 'series'
          },
        },
        {
          data: [1.35, 0.964, 0.168, 1.62],
          type: 'bar',
          name: 'Parsed',
          emphasis: {
              focus: 'series'
          },
        },
        {
          data: [0.446, 0.306, 0.051, 0.455],
          type: 'bar',
          name: 'Gzipped',
          emphasis: {
              focus: 'series'
          },
        },
      ]
    }
  }


}
