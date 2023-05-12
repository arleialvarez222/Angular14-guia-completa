import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEditEmpleadoComponent } from './components/add-edit-empleado/add-edit-empleado.component';
import { ListaEmpleadoComponent } from './components/lista-empleado/lista-empleado.component';

const routes: Routes = [
  { path: '', component: ListaEmpleadoComponent },
  { path: 'list-employees', component: ListaEmpleadoComponent },
  { path: 'add', component: AddEditEmpleadoComponent },
  { path: 'edit/:id', component: AddEditEmpleadoComponent },
  { path: '**', component: ListaEmpleadoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
