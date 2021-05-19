import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pie-fusion',
  templateUrl: './pie-fusion.component.html',
  styleUrls: ['./pie-fusion.component.scss']
})
export class PieFusionComponent implements OnInit {

  dataSource: Object;
  chartConfig: Object;

  constructor() {
    this.chartConfig = {
      width: '750',
      height: '400',
      type: 'pie2d',
      dataFormat: 'json',
    };
    this.dataSource = {
  chart: {
    caption: "Market Share of Web Servers",
    plottooltext: "<b>$percentValue</b> of web servers run on $label servers",
    showlegend: "1",
    showpercentvalues: "1",
    legendposition: "bottom",
    usedataplotcolorforlabels: "1",
    theme: "fusion"
  },
  data: [
    {
      label: "Apache",
      value: "32647479"
    },
    {
      label: "Microsoft",
      value: "22100932"
    },
    {
      label: "Zeus",
      value: "14376425"
    },
    {
      label: "Other",
      value: "18674221"
    }
  ]
};
  }

  ngOnInit(): void {
  }

}
