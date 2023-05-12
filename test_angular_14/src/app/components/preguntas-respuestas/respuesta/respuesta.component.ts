import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pregunta } from 'src/app/models/pregunta';
import { NavbarService } from 'src/app/services/navbar.service';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-respuesta',
  templateUrl: './respuesta.component.html',
  styleUrls: ['./respuesta.component.css']
})
export class RespuestaComponent {
  listaPreguntas: Pregunta[];
  respuestasUsuario: any[];

  constructor(
    private _textNavbarService: NavbarService,
    private _preguntaService: PreguntaService,
    private route: Router,
  ) {
    this.listaPreguntas = this._preguntaService.preguntas;
    this.respuestasUsuario = this._preguntaService.respuestasUsuario;
  }

  ngOnInit(): void {
    this.actualizarTextoNavbar();
    this.listaPreguntas = this._preguntaService.preguntas;
    this.respuestasUsuario = this._preguntaService.respuestasUsuario;
  }

  actualizarTextoNavbar() {
    this._textNavbarService.setTextNavbar('Dashboard preguntas');
  }

  volver() {
    this._preguntaService.respuestasUsuario = [];
    this.route.navigate(['/preguntas'])
  }

}
