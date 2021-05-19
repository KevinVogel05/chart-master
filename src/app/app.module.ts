import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
//Components
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { BarHighComponent } from './components/highcharts/bar-high/bar-high.component';
import { PieHighComponent } from './components/highcharts/pie-high/pie-high.component';
import { RadarHighComponent } from './components/highcharts/radar-high/radar-high.component';
import { DoughnutHighComponent } from './components/highcharts/doughnut-high/doughnut-high.component';
import { DoughnutJsComponent } from './components/chartjs/doughnut-js/doughnut-js.component';
import { BarJsComponent } from './components/chartjs/bar-js/bar-js.component';
import { PieJsComponent } from './components/chartjs/pie-js/pie-js.component';
import { RadarJsComponent } from './components/chartjs/radar-js/radar-js.component';
import { DoughnutEComponent } from './components/echarts/doughnut-e/doughnut-e.component';
import { PieEComponent } from './components/echarts/pie-e/pie-e.component';
import { BarEComponent } from './components/echarts/bar-e/bar-e.component';
import { RadarEComponent } from './components/echarts/radar-e/radar-e.component';
import { DoughnutFusionComponent } from './components/fusioncharts/doughnut-fusion/doughnut-fusion.component';
import { PieFusionComponent } from './components/fusioncharts/pie-fusion/pie-fusion.component';
import { BarFusionComponent } from './components/fusioncharts/bar-fusion/bar-fusion.component';
import { RadarFusionComponent } from './components/fusioncharts/radar-fusion/radar-fusion.component';
import { BarComponent } from './components/nav-items/bar/bar.component';
import { PieComponent } from './components/nav-items/pie/pie.component';
import { RadarComponent } from './components/nav-items/radar/radar.component';
import { DoughnutComponent } from './components/nav-items/doughnut/doughnut.component';
import { StatsComponent } from './components/nav-items/stats/stats.component';
import { AreaComponent } from './components/nav-items/area/area.component';
import { AreaJsComponent } from './components/chartjs/area-js/area-js.component';
import { AreaEComponent } from './components/echarts/area-e/area-e.component';
import { AreaFusionComponent } from './components/fusioncharts/area-fusion/area-fusion.component';
import { AreaHighComponent } from './components/highcharts/area-high/area-high.component';

//Highcharts
import { ChartModule } from 'angular-highcharts';
import { HighchartsChartModule } from 'highcharts-angular';

//eCharts
import { NgxEchartsModule } from 'ngx-echarts';

//Fusioncharts
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as PowerCharts from 'fusioncharts/fusioncharts.powercharts';
import * as FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
// Add dependencies to FusionChartsModule
FusionChartsModule.fcRoot(FusionCharts, Charts, PowerCharts, FusionTheme)

//chart.js
import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BarHighComponent,
    PieHighComponent,
    RadarHighComponent,
    DoughnutHighComponent,
    DoughnutJsComponent,
    BarJsComponent,
    PieJsComponent,
    RadarJsComponent,
    DoughnutEComponent,
    PieEComponent,
    BarEComponent,
    RadarEComponent,
    DoughnutFusionComponent,
    PieFusionComponent,
    BarFusionComponent,
    RadarFusionComponent,
    BarComponent,
    PieComponent,
    RadarComponent,
    DoughnutComponent,
    StatsComponent,
    AreaComponent,
    AreaJsComponent,
    AreaEComponent,
    AreaFusionComponent,
    AreaHighComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //Highcharts
    ChartModule,
    HighchartsChartModule,
    //eCharts
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    //Chart.js
    ChartsModule,
    //Fusioncharts
    FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
