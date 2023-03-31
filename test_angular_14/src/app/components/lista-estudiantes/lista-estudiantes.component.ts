import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-estudiantes',
  templateUrl: './lista-estudiantes.component.html',
  styleUrls: ['./lista-estudiantes.component.css']
})
export class ListaEstudiantesComponent {
  listaEstudiantes: any[] = [
    {nombre: 'Tomas Gonzales', estado: 'Promocionado', estado2: 'soltero'},
    {nombre: 'Oscar Gonzales', estado: 'Promocionado', estado2: 'soltero'},
    {nombre: 'Jaime Gonzales', estado: 'Regular', estado2: 'divorciado'},
    {nombre: 'Laura Zoto', estado: 'Libre', estado2: 'casado'},
  ];
  mostrarLista = true;

  toogle(){
    this.mostrarLista = !this.mostrarLista;
  }

}
