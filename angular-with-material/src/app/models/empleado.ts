export class Empleado {
  nombreCompleto: string;
  telefono: number;
  correo: string;
  fechaIngreso: Date;
  estadoCivil: string;
  sexo: string

  constructor() {
    this.nombreCompleto = '';
    this.telefono = 0;
    this.correo = '';
    this.estadoCivil = '';
    this.sexo = '';
    this.fechaIngreso = new Date();
  }
}
