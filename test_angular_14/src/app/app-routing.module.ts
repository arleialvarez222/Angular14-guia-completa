import { EmpleadoListComponent } from './components/comunicacion-componentes/empleado-list/empleado-list.component';
import { ResultadoComponent } from './components/bmi-calculator/resultado/resultado.component';
import { InicioComponent } from './components/bmi-calculator/inicio/inicio.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PianoComponent } from './components/piano/piano.component';

const routes: Routes = [
  { path: '', component: EmpleadoListComponent },
  { path: 'lista-empleados', component: EmpleadoListComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'resultado/:valor', component: ResultadoComponent },
  { path: 'piano', component: PianoComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
