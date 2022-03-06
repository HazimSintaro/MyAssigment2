import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnewsComponent } from './technews/technews.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { BusinessnewsComponent } from './businessnews/businessnews.component';
import { HealthnewsComponent } from './healthnews/healthnews.component';

const routes: Routes = [
  {path: '',component:TopheadingComponent}, //home page
  {path: 'tech',component:TechnewsComponent}, //Tech page
  {path: 'business', component:BusinessnewsComponent},//Business page
  {path: 'health', component:HealthnewsComponent},//Health page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
