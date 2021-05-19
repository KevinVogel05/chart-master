import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar-js',
  templateUrl: './radar-js.component.html',
  styleUrls: ['./radar-js.component.scss']
})
export class RadarJsComponent implements OnInit {
  
  ChartType = 'radar';
  ChartLabels = ['Q1', 'Q2', 'Q3', 'Q4'];
  //ChartLegend = true;
  ChartData = [
    {
      data: [120, 130, 180, 70],
      label: '2017'
    },
    {
      data: [90, 150, 200, 80],
      label: '2018'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
