import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { FormularioComponent } from './components/noticias/formulario/formulario.component';
import { ListadoNoticiasComponent } from './components/noticias/listado-noticias/listado-noticias.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { PixabayComponent } from './components/pixabay/pixabay.component';
import { BuscarImageComponent } from './components/pixabay/buscar-image/buscar-image.component';
import { ListarImagenComponent } from './components/pixabay/listar-imagen/listar-imagen.component';
import { ErrorComponent } from './shared/error/error.component';
import { TarjetaCreditoComponent } from './components/tarjeta-credito/tarjeta-credito.component';
import { CrearTarjetaComponent } from './components/tarjeta-credito/crear-tarjeta/crear-tarjeta.component';
import { ListarTarjetaComponent } from './components/tarjeta-credito/listar-tarjeta/listar-tarjeta.component';
import { UsuariosDashboardComponent } from './components/ejemplo-rutas/usuarios-dashboard/usuarios-dashboard.component';
import { ListaUsuariosComponent } from './components/ejemplo-rutas/lista-usuarios/lista-usuarios.component';
import { FooterComponent } from './components/footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { CardUsuarioComponent } from './components/ejemplo-rutas/lista-usuarios/card-usuario/card-usuario.component';
import { UsuarioComponent } from './components/ejemplo-rutas/usuario/usuario.component';
import { PreguntasComponent } from './components/preguntas-respuestas/preguntas/preguntas.component';
import { DashboardPreguntasComponent } from './components/preguntas-respuestas/dashboard-preguntas/dashboard-preguntas.component';
import { PreguntaComponent } from './components/preguntas-respuestas/pregunta/pregunta.component';
import { RespuestaComponent } from './components/preguntas-respuestas/respuesta/respuesta.component';
import { BotoneraComponent } from './components/preguntas-respuestas/pregunta/botonera/botonera.component';

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
    SpinnerComponent,
    FormularioComponent,
    ListadoNoticiasComponent,
    NoticiasComponent,
    PixabayComponent,
    BuscarImageComponent,
    ListarImagenComponent,
    ErrorComponent,
    TarjetaCreditoComponent,
    CrearTarjetaComponent,
    ListarTarjetaComponent,
    UsuariosDashboardComponent,
    ListaUsuariosComponent,
    FooterComponent,
    LayoutComponent,
    CardUsuarioComponent,
    UsuarioComponent,
    PreguntasComponent,
    DashboardPreguntasComponent,
    PreguntaComponent,
    RespuestaComponent,
    BotoneraComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
