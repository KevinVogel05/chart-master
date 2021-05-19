import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-js',
  templateUrl: './area-js.component.html',
  styleUrls: ['./area-js.component.scss']
})
export class AreaJsComponent implements OnInit {

  ChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top'
      }
    },
    interaction: {
      mode: 'nearest',
      axis: 'x',
      intersect: false
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Month'
        }
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: 'Value'
        }
      },
    }
  };
  ChartType = 'line';
  ChartLabels = ['1750', '1800', '1850', '1900', '1950', '1999', '2050'];
  ChartData = [{
        label: 'Asia',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
        label: 'Africa',
        data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
        label: 'Europe',
        data: [163, 203, 276, 408, 547, 729, 628]
    }, {
        label: 'America',
        data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
        label: 'Oceania',
        data: [2, 2, 2, 6, 13, 30, 46]
    }]
  constructor() { }

  ngOnInit(): void {
  }

}
