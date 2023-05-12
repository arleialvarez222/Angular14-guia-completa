import { Respuesta } from "./respuesta";

export class Pregunta {
  descipcionPregunta: string;
  respuestas: Respuesta[];

  constructor(descripcionPregunta: string, respuestas: Respuesta[]) {
    this.descipcionPregunta = descripcionPregunta;
    this.respuestas = respuestas;
  }
}
