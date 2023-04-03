import { Component } from '@angular/core';

@Component({
  selector: 'app-cortar-url',
  templateUrl: './cortar-url.component.html',
  styleUrls: ['./cortar-url.component.css']
})
export class CortarUrlComponent {
  nombreUrl: string;
  urlShort: string;
  urlProcesada: boolean;

  constructor() {
    this.nombreUrl = '';
    this.urlShort = '';
    this.urlProcesada = false;
  }

  procesarUrl() {
    console.log(this.nombreUrl)
  }

}
