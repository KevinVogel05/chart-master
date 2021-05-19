import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss']
})
export class StatsComponent implements OnInit {

  options;
  options2;

  constructor() {

    this.options = {
      // darkMode: true,
      // backgroundColor: '#100C2A',
    legend: {
        data: ['Stat', 'Parsed', 'Gzipped']
      },
    title: {
      text: 'Library Size',
      align: 'center',
      verticalAlign: 'middle'
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
        type: 'value',
        name: 'Size (MB)',
      },
      series: [
        {
          data: [1.58, 3.52, 0.418, 2.17],
          type: 'bar',
          name: 'Stat',
          emphasis: {
              focus: 'series'
          },
        },
        {
          data: [1.56, 0.964, 0.168, 2.14],
          type: 'bar',
          name: 'Parsed',
          emphasis: {
              focus: 'series'
          },
        },
        {
          data: [0.505, 0.306, 0.051, 0.589],
          type: 'bar',
          name: 'Gzipped',
          emphasis: {
              focus: 'series'
          },
        },
      ]
    };

    this.options2 = {
      legend: {
        data: ['Weekly Downloads']
      },
    title: {
      text: 'NPM Weekly Downloads',
      align: 'center',
      verticalAlign: 'middle'
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
        type: 'value',
        name: 'Weekly Downloads',
      },
      series: [{
        data: [665731, 301859, 1351478, 12403],
        type: 'bar'
      }]
    };
  }

  ngOnInit(): void {
  }

}
