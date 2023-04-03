import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

// @components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TareasComponent } from './components/tareas/tareas.component';
import { PianoComponent } from './components/piano/piano.component';
import { ListaEstudiantesComponent } from './components/lista-estudiantes/lista-estudiantes.component';
import { PruebasInicialesComponent } from './components/pruebas-iniciales/pruebas-iniciales.component';
import { ConvertirMonedaComponent } from './components/convertir-moneda/convertir-moneda.component';
import { InicioComponent } from './components/bmi-calculator/inicio/inicio.component';
import { ResultadoComponent } from './components/bmi-calculator/resultado/resultado.component';
import { EmpleadoListComponent } from './components/comunicacion-componentes/empleado-list/empleado-list.component';
import { CountEmpleadosComponent } from './components/comunicacion-componentes/empleado-list/count-empleados/count-empleados.component';
import { ListCitasComponent } from './components/citas/list-citas/list-citas.component';
import { CrearCitaComponent } from './components/citas/crear-cita/crear-cita.component';
import { CitasComponent } from './components/citas/citas/citas.component';
import { GastosComponent } from './components/presupuesto/gastos/gastos.component';
import { IngresarGastoComponent } from './components/presupuesto/gastos/ingresar-gasto/ingresar-gasto.component';
import { IngresarPresupuestoComponent } from './components/presupuesto/ingresar-presupuesto/ingresar-presupuesto.component';
import { ListarGastosComponent } from './components/presupuesto/gastos/listar-gastos/listar-gastos.component';
import { DashboardComponent } from './components/clima/dashboard/dashboard.component';
import { CortarUrlComponent } from './components/cortar-url/cortar-url.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TareasComponent,
    PianoComponent,
    ListaEstudiantesComponent,
    PruebasInicialesComponent,
    ConvertirMonedaComponent,
    InicioComponent,
    ResultadoComponent,
    EmpleadoListComponent,
    CountEmpleadosComponent,
    ListCitasComponent,
    CrearCitaComponent,
    CitasComponent,
    GastosComponent,
    IngresarGastoComponent,
    IngresarPresupuestoComponent,
    ListarGastosComponent,
    DashboardComponent,
    CortarUrlComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
