import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-pie-high',
  templateUrl: './pie-high.component.html',
  styleUrls: ['./pie-high.component.scss']
})
export class PieHighComponent implements OnInit {

  Highcharts = Highcharts;
  options;
  pieChart;

  constructor() { }

  ngOnInit(): void {
    this.options = {
    chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: 'Browser market shares in January, 2018'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    },
    accessibility: {
        point: {
            valueSuffix: '%'
        }
    },
    plotOptions: {
        pie: {
        showInLegend: true,
        allowPointSelect: true
    },
    },
    series: [{
        name: 'Brands',
        colorByPoint: true,
        data: [{
            name: 'Chrome',
            y: 61.41,
        }, {
            name: 'Internet Explorer',
            y: 11.84
        }, {
            name: 'Firefox',
            y: 10.85
        }, {
            name: 'Edge',
            y: 4.67
        }, {
            name: 'Safari',
            y: 4.18
        }, {
            name: 'Other',
            y: 7.05
        }]
    }]
    }
    this.pieChart = new Chart(this.options);
    HC_exporting(Highcharts);
  }

}
