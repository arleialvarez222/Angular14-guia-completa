import { Component } from '@angular/core';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-ingresar-gasto',
  templateUrl: './ingresar-gasto.component.html',
  styleUrls: ['./ingresar-gasto.component.css']
})
export class IngresarGastoComponent {
  nombreGasto: string;
  cantidad: number;
  formIncorrecto: boolean;
  textoIncorrecto: string;

  constructor(private _presupuestoService: PresupuestoService) {
    this.nombreGasto = '';
    this.cantidad = 0;
    this.formIncorrecto = false;
    this.textoIncorrecto = '';
  }

  ngOnInit() { }

  agregarGasto() {
    if (this.cantidad > this._presupuestoService.restante) {
      this.formIncorrecto = true;
      this.textoIncorrecto = 'Cantidad ingresada es mayor al restante';
      return;
    }
    if (this.nombreGasto === '' || this.cantidad <= 0) {
      this.formIncorrecto = true;
      this.textoIncorrecto = 'Nombre gasto o cantidad incorrecta';
      return;
    }
    if (this.nombreGasto !== '' || this.cantidad > 0) {
      // se crea el objeto
      const GASTO = {
        nombre: this.nombreGasto,
        cantidad: this.cantidad
      }

      // se envia objeto a los suscriptores via subjet
      this._presupuestoService.agregarGasto(GASTO);

      // se resetea el formulario
      this.formIncorrecto = false;
      this.nombreGasto = '';
      this.cantidad = 0;
    }
  }

}
