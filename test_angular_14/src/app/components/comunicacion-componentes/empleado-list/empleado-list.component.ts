import { Component } from '@angular/core';
import { Empleado } from 'src/app/models/empleado';

@Component({
  selector: 'app-empleado-list',
  templateUrl: './empleado-list.component.html',
  styleUrls: ['./empleado-list.component.css']
})
export class EmpleadoListComponent {
  sexoSeleccionado = 'Todos'
  listaEmpleados: Empleado[] = [
    { legajo: 1, nombre: 'Juan', apellido: 'Suarez', sexo: 'Masculino', salario: 25000 },
    { legajo: 2, nombre: 'Carlos', apellido: 'Chica', sexo: 'Masculino', salario: 30000 },
    { legajo: 3, nombre: 'Laura', apellido: 'Villegas', sexo: 'Femenino', salario: 17000 },
    { legajo: 4, nombre: 'Luis', apellido: 'Acevedo', sexo: 'Masculino', salario: 6000 },
    { legajo: 5, nombre: 'Karen', apellido: 'Perez', sexo: 'Femenino', salario: 21000 },
    { legajo: 6, nombre: 'Benito', apellido: 'Perez', sexo: 'Masculino', salario: 41000 },
  ]

  constructor() { }

  ngOnInit(): void {

  }

  totalEmpleados(): number {
    return this.listaEmpleados?.length;
  }

  totalFemenino(): number {
    return this.listaEmpleados.filter(x => x.sexo === 'Femenino').length;
  }

  totalMasculino(): number {
    return this.listaEmpleados.filter(x => x.sexo === 'Masculino').length;
  }

  empleadoCountChild(e: string) {
    this.sexoSeleccionado = e;
  }

}
