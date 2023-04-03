import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-citas',
  templateUrl: './list-citas.component.html',
  styleUrls: ['./list-citas.component.css']
})
export class ListCitasComponent {
  @Input() listaCitas: any;
  @Output() eliminarCit = new EventEmitter<number>();

  constructor() { }

  ngOnInit() { }

  eliminarCita(index: number) {
    this.eliminarCit.emit(index);
  }

}
