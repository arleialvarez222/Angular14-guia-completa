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
import { NoticiasComponent } from './components/noticias/noticias.component';
import { PixabayComponent } from './components/pixabay/pixabay.component';
import { TarjetaCreditoComponent } from './components/tarjeta-credito/tarjeta-credito.component';
import { UsuariosDashboardComponent } from './components/ejemplo-rutas/usuarios-dashboard/usuarios-dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { ListaUsuariosComponent } from './components/ejemplo-rutas/lista-usuarios/lista-usuarios.component';
import { UsuarioComponent } from './components/ejemplo-rutas/usuario/usuario.component';
import { PreguntasComponent } from './components/preguntas-respuestas/preguntas/preguntas.component';
import { DashboardPreguntasComponent } from './components/preguntas-respuestas/dashboard-preguntas/dashboard-preguntas.component';
import { PreguntaComponent } from './components/preguntas-respuestas/pregunta/pregunta.component';
import { RespuestaComponent } from './components/preguntas-respuestas/respuesta/respuesta.component';

const routes: Routes = [
  { path: '', redirectTo: 'preguntas', pathMatch: 'full' },
  { path: 'dashboard-preguntas', component: DashboardPreguntasComponent },
  { path: 'preguntas', component: PreguntasComponent },
  { path: 'pregunta', component: PreguntaComponent },
  { path: 'respuesta', component: RespuestaComponent },
  { path: 'layout', component: LayoutComponent },
  {
    path: 'dashboard-usuarios', component: UsuariosDashboardComponent, children: [
      { path: '', component: ListaUsuariosComponent },
      { path: 'usuario/:id', component: UsuarioComponent },
    ]
  },
  { path: 'tarjeta-credito', component: TarjetaCreditoComponent },
  { path: 'pixabay', component: PixabayComponent },
  { path: 'noticias', component: NoticiasComponent },
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
  { path: '**', component: PreguntasComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
