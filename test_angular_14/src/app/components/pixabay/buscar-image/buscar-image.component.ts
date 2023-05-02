import { Component } from '@angular/core';
import { ImagenService } from 'src/app/services/imagen.service';

@Component({
  selector: 'app-buscar-image',
  templateUrl: './buscar-image.component.html',
  styleUrls: ['./buscar-image.component.css']
})
export class BuscarImageComponent {
  nombreImage: string;

  constructor(private _imageService: ImagenService) {
    this.nombreImage = ''
  }

  buscarImagenes() {
    if (this.nombreImage === '') {
      this._imageService.setError('Agregar un texto de busqueda');
      return
    }
    this._imageService.enviarTerminoBusqueda(this.nombreImage);
  }

}
