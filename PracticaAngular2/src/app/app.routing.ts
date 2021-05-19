import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { CuerpoSecundarioComponent } from './componentes/cuerpo-secundario/cuerpo-secundario.component';
import { CuerpoComponent } from './componentes/cuerpo/cuerpo.component';

const routes: Routes = [
    { path: 'cuerpo', component: CuerpoComponent },
    { path: 'cuerpo2', component: CuerpoSecundarioComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'cuerpo' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}