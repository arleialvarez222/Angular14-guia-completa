import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent {
  @Input() todos: number;
  @Input() femenino: number;
  @Input() masculino: number;
  @Output() countButtonChange = new EventEmitter<string>()
  sexoSeleccionado = 'Todos';

  constructor() {
    this.todos = 0;
    this.femenino = 0;
    this.masculino = 0;
  }

  ngOnInit() {
  }

  radioChange(): void {
    this.countButtonChange.emit(this.sexoSeleccionado)
  }

}
