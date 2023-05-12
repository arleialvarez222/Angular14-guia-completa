import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  id: number
  nombre: string;
  correo: string;
  urlImg: string;
  genero: string;

  constructor(private aRoute: ActivatedRoute,
    private _usuarioService: UsuariosService
  ) {
    this.id = +this.aRoute.snapshot.paramMap.get('id')!;
    this.nombre = '';
    this.correo = '';
    this.genero = '';
    this.urlImg = 'https://th.bing.com/th/id/R.ab137b12f0bdfe74a8c0da5872d731c7?rik=GQZLbal2%2bHjVjA&pid=ImgRaw&r=0';
  }

  ngOnInit(): void {
    this.getUsuario();
  }

  getUsuario() {
    this._usuarioService.getUsuarioByid(this.id).subscribe(data => {
      console.log(data);
      this.nombre = data?.name;
      this.correo = data?.email;
      this.genero = data?.gender;
    })
  }

}
