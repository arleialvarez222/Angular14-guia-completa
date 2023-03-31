import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

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
    CrearCitaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
