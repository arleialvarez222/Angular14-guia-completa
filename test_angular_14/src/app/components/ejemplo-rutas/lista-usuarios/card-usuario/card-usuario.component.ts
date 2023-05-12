import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-usuario',
  templateUrl: './card-usuario.component.html',
  styleUrls: ['./card-usuario.component.css']
})
export class CardUsuarioComponent {
  @Input() usuario: any;
  imgUrl = 'https://th.bing.com/th/id/OIP.MWAeVCZyMKxIHL0Z1XPIlgHaFn?pid=ImgDet&rs=1';
  primerNombre: string;
  correo: string
  id: number;

  constructor() {
    this.primerNombre = '';
    this.correo = '';
    this.id = 0;
  }

  ngOnInit(): void {
    this.primerNombre = this.usuario.name;
    this.correo = this.usuario.email;
    this.id = this.usuario.id
  }

}
