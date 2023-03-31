import { Component } from '@angular/core';

@Component({
  selector: 'app-convertir-moneda',
  templateUrl: './convertir-moneda.component.html',
  styleUrls: ['./convertir-moneda.component.css']
})
export class ConvertirMonedaComponent {
  cantidad = 0;
  tengo = 'USD';
  quiero = 'EUR';
  total = 0;
  monedas: string[] = ['USD', 'EUR', 'LIBRAS'];

  convertir() {
    console.log('llamada para convertir');
    switch (this.tengo) {
      case 'USD':
        if (this.quiero === 'USD') this.total = this.cantidad;
        if (this.quiero === 'EUR') this.total = this.cantidad * 0.84;
        if (this.quiero === 'LIBRAS') this.total = this.cantidad * 0.75;
        break;
      case 'EUR':
        if (this.quiero === 'USD') this.total = this.cantidad * 1.20;
        if (this.quiero === 'EUR') this.total = this.cantidad;
        if (this.quiero === 'LIBRAS') this.total = this.cantidad * 0.9;
        break;
      case 'LIBRAS':
        if (this.quiero === 'USD') this.total = this.cantidad * 1.33;
        if (this.quiero === 'EUR') this.total = this.cantidad * 1.11;
        if (this.quiero === 'LIBRAS') this.total = this.cantidad;
        break;

      default:
        break;
    }
  }

}
