import { Component } from '@angular/core';

@Component({
  selector: 'app-pruebas-iniciales',
  templateUrl: './pruebas-iniciales.component.html',
  styleUrls: ['./pruebas-iniciales.component.css']
})
export class PruebasInicialesComponent {
  nombre = 'Arlei';
  texto = 'This is a video about event binding';
  textoPlaceHolder = 'Write here';
  text = '';

  constructor() {
    setInterval(() => this.nombre = 'Arlesion', 3000);
  }

  getSuma(numero1: number, numero2:number){
    return numero1 + numero2;
  }

  cambiarTexto():void {
    this.texto = 'In the next video we look two way data binding'
  }

}
