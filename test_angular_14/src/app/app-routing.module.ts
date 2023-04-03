import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// componentes
import { EmpleadoListComponent } from './components/comunicacion-componentes/empleado-list/empleado-list.component';
import { ResultadoComponent } from './components/bmi-calculator/resultado/resultado.component';
import { InicioComponent } from './components/bmi-calculator/inicio/inicio.component';
import { PianoComponent } from './components/piano/piano.component';
import { CitasComponent } from './components/citas/citas/citas.component';
import { IngresarPresupuestoComponent } from './components/presupuesto/ingresar-presupuesto/ingresar-presupuesto.component';
import { GastosComponent } from './components/presupuesto/gastos/gastos.component';
import { DashboardComponent } from './components/clima/dashboard/dashboard.component';
import { ConvertirMonedaComponent } from './components/convertir-moneda/convertir-moneda.component';
import { ListaEstudiantesComponent } from './components/lista-estudiantes/lista-estudiantes.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { CortarUrlComponent } from './components/cortar-url/cortar-url.component';

const routes: Routes = [
  { path: '', component: CortarUrlComponent },
  { path: 'cortar-url', component: CortarUrlComponent },
  { path: 'clima', component: DashboardComponent },
  { path: 'gastos', component: GastosComponent },
  { path: 'ingresar-presupuesto', component: IngresarPresupuestoComponent },
  { path: 'citas', component: CitasComponent },
  { path: 'lista-empleados', component: EmpleadoListComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'moneda', component: ConvertirMonedaComponent },
  { path: 'lista-estudiantes', component: ListaEstudiantesComponent },
  { path: 'resultado/:valor', component: ResultadoComponent },
  { path: 'piano', component: PianoComponent },
  { path: 'tareas', component: TareasComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
