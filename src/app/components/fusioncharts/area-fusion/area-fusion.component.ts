import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-area-fusion',
  templateUrl: './area-fusion.component.html',
  styleUrls: ['./area-fusion.component.scss']
})
export class AreaFusionComponent implements OnInit {

  dataSource: Object;
  chartConfig: Object;

  constructor() { }

  ngOnInit(): void {
    this.chartConfig = {
      width: '750',
      height: '400',
      type: 'msarea',
      dataFormat: 'json',
    };
    this.dataSource = {
  chart: {
    caption: "Historic and Estimated Worldwide Population Growth by Region",
    yaxisname: "Values",
    //subcaption: "India vs China",
    drawcrossline: "1",
    //numbersuffix: "%",
    plottooltext: "$seriesName's GDP grew $dataValue in $label",
    theme: "fusion"
  },
  categories: [
    {
      category: [
        {
          label: "1750"
        },
        {
          label: "1800"
        },
        {
          label: "1850"
        },
        {
          label: "1900"
        },
        {
          label: "1950"
        },
        {
          label: "2000"
        },
        {
          label: "2050"
        }
      ]
    }
  ],
  dataset: [{
        seriesname: 'Asia',
        data: [{value: 502}, {value: 635},{value: 809},{value: 947},{value: 1402},{value: 3634},{value: 5268}]
    }, {
        seriesname: 'Africa',
        data: [{value:106},{value: 107},{value: 111},{value: 133},{value: 221},{value: 767},{value: 1766}]
    }, {
        seriesname: 'Europe',
        data: [{value:163},{value: 203},{value: 276},{value: 408},{value: 547},{value: 729},{value: 628}]
    }, {
        seriesname: 'America',
        data: [{value:18},{value: 31},{value: 54},{value: 156},{value: 339},{value: 818},{value: 1201}]
    }, {
        seriesname: 'Oceania',
        data: [{value:2},{value: 2},{value: 2},{value: 6},{value: 13},{value: 30},{value: 46}]
    }]
};
  }

}
