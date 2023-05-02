import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent implements OnInit {
  listaNoticias: any[] = [];
  loading = false;

  constructor(private _noticiService: NoticiaService) { }

  ngOnInit(): void {

  }

  buscarNoticia(parametros: any) {
    this.loading = true;
    this.listaNoticias = [];
    this._noticiService.getNoticias(parametros).subscribe(data => {
      this.listaNoticias = data.articles;
      this.loading = false;
    }, error => {
      this.loading = false;
      console.log(error)
    })
  }
}
