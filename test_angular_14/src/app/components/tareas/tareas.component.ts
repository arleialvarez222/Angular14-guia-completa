import { Component } from '@angular/core';
import { Tarea } from 'src/app/models/tarea';

@Component({
  selector: 'app-tareas',
  templateUrl: './tareas.component.html',
  styleUrls: ['./tareas.component.css']
})
export class TareasComponent {
  listaTareas: Tarea[] = [];
  nombreTarea = '';

  constructor() { }

  agregarTarea() {
    const tarea: Tarea = {
      nombre: this.nombreTarea,
      estado: false
    }
    this.listaTareas.push(tarea);
    this.nombreTarea = '';
  }

  eliminarTarea(i: number) {
    this.listaTareas.splice(i, 1);
    // or
    //const newList = this.listaTareas.filter((x, index) => index !== i);
    //this.listaTareas = newList;
  }

  actualizarTarea(tarea: Tarea, i: number) {
    this.listaTareas[i].estado = !tarea.estado;
  }

}
