import { Component } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  urlImage = 'https://th.bing.com/th/id/R.0483e4180d68e10bc726a5f9b0290d37?rik=UpQXgF0%2b%2fd7aEw&pid=ImgRaw&r=0';
  ciudad = '';
  loading = false;
  query = false;
  temperatura = 0;
  humedad = 0;
  clima = '';
  error = false;

  constructor(private _climaService: ClimaService) { }

  ngOnInit() {

  }

  obtenerClima() {
    this.query = false;
    this.loading = true;
    this._climaService.getClima(this.ciudad).subscribe(data => {
      this.query = true;
      this.temperatura = data?.main?.temp - 273;
      this.humedad = data?.main?.humidity;
      this.clima = data?.weather[0].main;
      this.loading = false;
    }, error => {
      this.loading = false;
      this.mostrarError();
    })
  }

  mostrarError() {
    this.error = true;
    setTimeout(() => {
      this.error = false;
      this.ciudad = '';
    }, 3000);
  }

}
