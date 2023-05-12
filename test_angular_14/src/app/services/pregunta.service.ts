import { Pregunta } from './../models/pregunta';
import { Injectable } from '@angular/core';
import { Respuesta } from '../models/respuesta';

@Injectable({
  providedIn: 'root'
})
export class PreguntaService {
  indexPregunta = 0;
  opcionSeleccionada: any;
  desabilitarBtn = true;
  pregConfirmada = false;
  indexRespuesta: any = null;
  respuestasUsuario: Array<number> = []

  public preguntas: Pregunta[] = [
    new Pregunta('Cúal es la capital de Argentina', [
      new Respuesta('Buenos Aires', 1),
      new Respuesta('Montevideo', 0),
      new Respuesta('Santiago', 0),
      new Respuesta('Lima', 0),
    ]),
    new Pregunta('Cúal es la capital de Francia', [
      new Respuesta('Roma', 0),
      new Respuesta('Paris', 1),
      new Respuesta('Dublin', 0),
      new Respuesta('Atenas', 0),
    ]),
    new Pregunta('Cúal es la capital de Egípto', [
      new Respuesta('Londres', 0),
      new Respuesta('Berlin', 0),
      new Respuesta('El Cairo', 1),
      new Respuesta('Lima', 0),
    ])
  ]

  getPreguntas() {
    return this.preguntas.slice();
  }

  constructor() { }
}
