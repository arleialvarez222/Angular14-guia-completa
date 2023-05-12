import { Injectable } from '@angular/core';
import { Empleado } from '../models/empleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  listaEmpleados: Empleado[] = [
    { nombreCompleto: 'Lucas Martinez', correo: 'lmartinez@gmail.com', telefono: 132313131, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Divorciado' },
    { nombreCompleto: 'Andre Sol', correo: 'aSol@gmail.com', telefono: 158813131, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Soltero' },
    { nombreCompleto: 'Andres Nireto ', correo: 'nitoA@gmail.com', telefono: 132313131, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero' },
    { nombreCompleto: 'Laura Osorio', correo: 'losorio@gmail.com', telefono: 132313131, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Casado' },
    { nombreCompleto: 'Carlos Orozco', correo: 'cmartinez@gmail.com', telefono: 132313131, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Casado' },
    { nombreCompleto: 'Carlos Gonzalez', correo: 'carlos@gmail.com', telefono: 154565613131, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero' },
    { nombreCompleto: 'Juan Martinez', correo: 'juanMa@gmail.com', telefono: 132345454131, sexo: 'Masculino', fechaIngreso: new Date(), estadoCivil: 'Soltero' },
    { nombreCompleto: 'Ana Zoto Martinez', correo: 'anaz@gmail.com', telefono: 132313131, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Soltero' },
    { nombreCompleto: 'Diana Sanchez', correo: 'dianiss@gmail.com', telefono: 1345453131, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Casado' },
    { nombreCompleto: 'Alejandra Chika', correo: 'alejaaa@gmail.com', telefono: 3435565613131, sexo: 'Femenino', fechaIngreso: new Date(), estadoCivil: 'Soltero' },
  ]

  constructor() { }

  getEmpleados() {
    return this.listaEmpleados.slice()
  }

  eliminarEmpleado(index: number) {
    this.listaEmpleados.splice(index, 1);
  }

  agregarEmpleado(empleado: Empleado) {
    this.listaEmpleados.unshift(empleado);
  }

  getEmpleado(index: number) {
    return this.listaEmpleados[index];
  }

  editEmpleado(empleado: Empleado, idEmpleado: number) {
    this.listaEmpleados[idEmpleado].nombreCompleto = empleado.nombreCompleto;
    this.listaEmpleados[idEmpleado].correo = empleado.correo;
    this.listaEmpleados[idEmpleado].fechaIngreso = empleado.fechaIngreso;
    this.listaEmpleados[idEmpleado].telefono = empleado.telefono;
    this.listaEmpleados[idEmpleado].sexo = empleado.sexo;
    this.listaEmpleados[idEmpleado].estadoCivil = empleado.estadoCivil;
  }
}
