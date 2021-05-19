import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-js',
  templateUrl: './pie-js.component.html',
  styleUrls: ['./pie-js.component.scss']
})
export class PieJsComponent implements OnInit {

  ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      }
    }
  };
  ChartType = 'pie';
  ChartLabels = ['Red', 'Blue', 'Yellow', 'White', 'Green'];
  ChartLegend = true;
  ChartData = [120, 150, 180, 90, 75];

  constructor() { }

  ngOnInit(): void {
  }

}
