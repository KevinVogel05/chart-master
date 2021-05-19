import { Options } from 'highcharts';

export const barChart: Options = {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Package Size'
    },
    subtitle: {
        text: 'in Production'
  },
    xAxis: {
        categories: [
            'Highcharts',
            'ECharts',
            'Chart.js',
            'Fusioncharts',
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Size (MB)'
        }
    },
    // tooltip: {
    //     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    //     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
    //         '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
    //     footerFormat: '</table>',
    //     shared: true,
    //     useHTML: true
    // },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: [{
      name: 'Stat',
      type: 'column',
        data: [1.37, 3.52, 0.418, 1.64]

    }, {
      name: 'Parsed',
      type: 'column',
        data: [1.35, 0.964, 0.168, 1.62]

    }, {
      name: 'Gzipped',
      type: 'column',
        data: [0.446, 0.306, 0.051, 0.455]

    }]
}
