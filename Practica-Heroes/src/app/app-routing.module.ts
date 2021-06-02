import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { HeroesComponent } from './componentes/heroes/heroes.component';

const routes: Routes = [
    { path: 'Dashboard', component: DashboardComponent},
    { path: 'Heroes', component:HeroesComponent},
    { path: '**', pathMatch: 'full',redirectTo:'Dashboard'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
