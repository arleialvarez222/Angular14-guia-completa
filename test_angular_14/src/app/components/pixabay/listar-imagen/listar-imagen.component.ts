import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-listar-imagen',
  templateUrl: './listar-imagen.component.html',
  styleUrls: ['./listar-imagen.component.css']
})
export class ListarImagenComponent {
  termino = '';
  suscription: Subscription;
  listaImagenes: any[] = [];
  loading = false;
  imagenesPorPagina = 30;
  paginaActual = 1;
  totalPaginas = 0;

  constructor(private _imagenService: ImagenService) {
    this.suscription = this._imagenService.getTerminoBusqueda().subscribe(data => {
      this.termino = data;
      this.loading = true;
      this.obtenerImagenes();
    })
  }

  ngOnInit(): void { }

  obtenerImagenes() {
    this.loading = true
    this._imagenService.getImagenes(this.termino, this.imagenesPorPagina, this.paginaActual).subscribe(data => {
      this.loading = false;
      if (data?.hits?.length === 0) return this._imagenService.setError('Opss.. no encontramos ningun resultado')
      this.totalPaginas = Math.ceil(data?.totalHits / this.imagenesPorPagina);
      this.listaImagenes = data?.hits;
    }, error => {
      this._imagenService.setError('Opsss, ocurrio un error')
      this.loading = false
    })
  }

  paginaAnterior() {
    this.paginaActual--;
    this.loading = true;
    this.listaImagenes = [];
    this.obtenerImagenes();
  }

  paginaPosterior() {
    this.paginaActual++;
    this.loading = true;
    this.listaImagenes = [];
    this.obtenerImagenes();
  }


  paginaAnteriorClass() {
    if (this.paginaActual === 1) return false
    else return true
  }

  paginaPosteriorClass() {
    if (this.paginaActual === this.totalPaginas) return false
    else return true
  }
}
