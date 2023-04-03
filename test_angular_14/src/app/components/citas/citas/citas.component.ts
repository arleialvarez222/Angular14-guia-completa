import { Component } from '@angular/core';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent {
  listaCitas: any[] = [];

  agregarCita(cita: any) {
    this.listaCitas.push(cita);
  }

  eliminarCitaLista(i: number) {
    const nuevasCitas = this.listaCitas.filter((x, index) => index !== i);
    this.listaCitas = nuevasCitas;
  }

}
