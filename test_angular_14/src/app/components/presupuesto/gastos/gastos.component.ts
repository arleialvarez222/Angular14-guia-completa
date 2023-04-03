import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PresupuestoService } from 'src/app/services/presupuesto.service';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
  styleUrls: ['./gastos.component.css']
})
export class GastosComponent {
  presupuesto = 0;

  constructor(private _presupuestoService: PresupuestoService, private router: Router) { }

  ngOnInit() {
    if (this._presupuestoService.presupuesto === 0) this.router.navigate(['/ingresar-presupuesto']);
    this.presupuesto = this._presupuestoService.presupuesto;
    console.log(this._presupuestoService.presupuesto);
  }
}
