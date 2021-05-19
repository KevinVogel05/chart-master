import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doughnut-js',
  templateUrl: './doughnut-js.component.html',
  styleUrls: ['./doughnut-js.component.scss']
})
export class DoughnutJsComponent implements OnInit {

  ChartOptions = {
    // scaleShowVertivalLines: false,
    // responsive: true,
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    }
  };
  ChartType = 'doughnut';
  ChartLabels = ['Red', 'Blue', 'Yellow', 'White', 'Green'];
  ChartLegend = true;
  ChartData = [120, 150, 180, 90, 75];

  constructor() { }

  ngOnInit(): void {
  }

}
