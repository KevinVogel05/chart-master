import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BarComponent } from './components/nav-items/bar/bar.component';
import { PieComponent } from './components/nav-items/pie/pie.component';
import { RadarComponent } from './components/nav-items/radar/radar.component';
import { DoughnutComponent } from './components/nav-items/doughnut/doughnut.component';
import { StatsComponent } from './components/nav-items/stats/stats.component';
import { AreaComponent } from './components/nav-items/area/area.component';

const routes: Routes = [
  {
    path: 'bar',
    component: BarComponent
  },
  {
    path: 'doughnut',
    component: DoughnutComponent
  },
  {
    path: 'pie',
    component: PieComponent
  },
  {
    path: 'radar',
    component: RadarComponent
  },
  {
    path: 'area',
    component: AreaComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  },
  {
    path: '**',
    component: BarComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
