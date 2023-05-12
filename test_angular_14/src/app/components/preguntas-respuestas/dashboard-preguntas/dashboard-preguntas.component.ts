import { Component } from '@angular/core';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-dashboard-preguntas',
  templateUrl: './dashboard-preguntas.component.html',
  styleUrls: ['./dashboard-preguntas.component.css']
})
export class DashboardPreguntasComponent {

  constructor(private _textNavbarService: NavbarService) { }

  ngOnInit(): void {
    this.actualizarTextoNavbar();
  }

  actualizarTextoNavbar() {
    this._textNavbarService.setTextNavbar('Dashboard preguntas');
  }

}
