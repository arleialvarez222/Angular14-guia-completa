import { Component } from '@angular/core';
import { Pregunta } from 'src/app/models/pregunta';
import { Respuesta } from 'src/app/models/respuesta';
import { NavbarService } from 'src/app/services/navbar.service';
import { PreguntaService } from 'src/app/services/pregunta.service';

@Component({
  selector: 'app-pregunta',
  templateUrl: './pregunta.component.html',
  styleUrls: ['./pregunta.component.css']
})
export class PreguntaComponent {
  listaPreguntas: Pregunta[];

  constructor(private _textNavbarService: NavbarService, public _preguntaService: PreguntaService) {
    this.listaPreguntas = [];
  }

  ngOnInit(): void {
    this.actualizarTextoNavbar();
    this.listaPreguntas = this._preguntaService.getPreguntas()
  }

  actualizarTextoNavbar() {
    this._textNavbarService.setTextNavbar('Dashboard preguntas');
  }

  obtenerPregunta() {
    return this.listaPreguntas[this._preguntaService.indexPregunta].descipcionPregunta;
  }

  respuestaSeleccionada(respuesta: Respuesta, indexResp: number) {
    if (this._preguntaService.pregConfirmada === true) return;
    this._preguntaService.opcionSeleccionada = respuesta;
    this._preguntaService.desabilitarBtn = false;
    this._preguntaService.indexRespuesta = indexResp;
  }

  addClassOption(respuesta: Respuesta) {
    if (respuesta === this._preguntaService.opcionSeleccionada && !this._preguntaService.pregConfirmada) return 'active text-light';
    if (respuesta === this._preguntaService.opcionSeleccionada && this._preguntaService.pregConfirmada && this._preguntaService.opcionSeleccionada.esCorrecta === 1) {
      return 'list-group-item-success'
    }
    if (respuesta === this._preguntaService.opcionSeleccionada && this._preguntaService.pregConfirmada && this._preguntaService.opcionSeleccionada.esCorrecta === 0) {
      return 'list-group-item-danger'
    }
    else return ''
  }

  iconCorrecto(respuesta: Respuesta) {
    const resp = this.respuestaEsCorrecta(respuesta, 1);
    return resp;
  }

  iconInCorrecto(respuesta: Respuesta) {
    const resp = this.respuestaEsCorrecta(respuesta, 0);
    return resp;
  }

  respuestaEsCorrecta(respuesta: Respuesta, index: number) {
    if (respuesta === this._preguntaService.opcionSeleccionada && this._preguntaService.pregConfirmada && this._preguntaService.opcionSeleccionada.esCorrecta === index) return true
    else return false;
  }

}
