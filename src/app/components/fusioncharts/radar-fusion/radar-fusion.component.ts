import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radar-fusion',
  templateUrl: './radar-fusion.component.html',
  styleUrls: ['./radar-fusion.component.scss']
})
export class RadarFusionComponent implements OnInit {

  dataSource: Object;
  chartConfig: Object;

  constructor() { 
    this.chartConfig = {
      width: 750,
      height: 400,
      type: 'radar',
      dataFormat: 'json',
    };
    this.dataSource = {
  chart: {
    caption: "Skill Analysis of Harry",
    subcaption: "Scale: 1 (low) to 5 (high)",
    theme: "fusion",
    showlegend: "0",
    showdivlinevalues: "0",
    showlimits: "0",
    showvalues: "1",
    plotfillalpha: "40",
    plottooltext: "Harry's <b>$label</b> skill is rated as <b>$value</b>"
  },
  categories: [
    {
      category: [
        {
          label: "Communication"
        },
        {
          label: "Punctuality"
        },
        {
          label: "Problem Solving"
        },
        {
          label: "Meeting Deadlines"
        },
        {
          label: "Team Player"
        },
        {
          label: "Technical Knowledge"
        }
      ]
    }
  ],
  dataset: [
    {
      seriesname: "User Ratings",
      data: [
        {
          value: "3"
        },
        {
          value: "3"
        },
        {
          value: "4"
        },
        {
          value: "3"
        },
        {
          value: "2"
        },
        {
          value: "4"
        }
      ]
    }
  ]
};
  }

  ngOnInit(): void {
  }

}
