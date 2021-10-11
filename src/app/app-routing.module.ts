import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './Components/home-page/home-page.component';
import { LengthComponent } from './Components/length/length.component';
const routes: Routes = [
  { path: 'homePage', component: HomePageComponent },
  {path:'length',component:LengthComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
