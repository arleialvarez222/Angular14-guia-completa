import { Component } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent {
  listaUsuarios: any[] = [];
  loading = true

  constructor(private _usuarioService: UsuariosService) { }
  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(): void {
    this._usuarioService.getUsuarios().subscribe(data => {
      this.listaUsuarios = data
      this.loading = false;
    })
  }

}
