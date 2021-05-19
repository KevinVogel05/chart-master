import { barChart } from './bar-high.data';
import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-bar-high',
  templateUrl: './bar-high.component.html',
  styleUrls: ['./bar-high.component.scss']
})
export class BarHighComponent implements OnInit {
  Highcharts = Highcharts;

  barChart = new Chart(barChart);
  constructor() { }

  ngOnInit(): void {
    HC_exporting(Highcharts);
  }

}
