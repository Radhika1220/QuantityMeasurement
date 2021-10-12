import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LengthComponent } from './Components/length/length.component';
import { TemperatureComponent } from './temperature/temperature.component';
import { VolumeComponent } from './Components/volume/volume.component';
const routes: Routes = [
  { path: 'homePage', component: HomePageComponent },
  {path:'length',component:LengthComponent},
  {path:'temperature',component:TemperatureComponent},
  {path:'volume',component:VolumeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
