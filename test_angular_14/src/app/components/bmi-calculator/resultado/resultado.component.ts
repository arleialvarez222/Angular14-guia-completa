import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html',
  styleUrls: ['./resultado.component.css']
})
export class ResultadoComponent {
  bmi: number;
  resultado: string;
  interpretacion: string;

  constructor(private router: Router,
    private route: ActivatedRoute
  ) {
    //agregando el signo + se parce el valor a un tipo numero
    // para decir que puede ser nulo se le agrega el signo ( ! )
    this.resultado = '';
    this.interpretacion = '';
    this.bmi = +route.snapshot.paramMap.get('valor')!;
  }

  ngOnInit(): void {
    this.getResultado();
  }

  getResultado() {
    if (this.bmi > 25) {
      this.resultado = 'Exceso de peso';
      this.interpretacion = 'Tienes un exceso de peso corporal, intenta hacer mas ejercico'
    }
    if (this.bmi >= 18.5 && this.bmi < 25) {
      this.resultado = 'Peso normal';
      this.interpretacion = 'Tienes un peso corporal normal, Buen trabajo'
    }
    if (this.bmi < 18.5) {
      this.resultado = 'Bajo peso';
      this.interpretacion = 'Tienes un peso corporal mas bajo de lo normal, intenta comer mas'
    }
  }

  recalcular() {
    this.router.navigate(['inicio'])
  }

}
