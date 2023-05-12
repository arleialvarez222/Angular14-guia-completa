import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { NavbarService } from 'src/app/services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  @Input() titulo: any;
  suscripcion: Subscription;
  texto = '';

  constructor(private _navbarService: NavbarService) {
    this.suscripcion = this._navbarService.getTextNavbar().subscribe(data => {
      this.texto = data
    })
    this.titulo = ''
  }

  ngOnInit(): void { }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe()
  }

}
