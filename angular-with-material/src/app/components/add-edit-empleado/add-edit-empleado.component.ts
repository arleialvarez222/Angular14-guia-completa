import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from 'src/app/models/empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-add-edit-empleado',
  templateUrl: './add-edit-empleado.component.html',
  styleUrls: ['./add-edit-empleado.component.css'],
  providers: [{
    provide: MAT_RADIO_DEFAULT_OPTIONS,
    useValue: { color: 'primary' },
  }]
})
export class AddEditEmpleadoComponent {
  estadosCiviles: any[] = ['Soltero', 'Casado', 'Divorciado'];
  idEmpleado: any;
  accion = 'Crear'

  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _empleadoService: EmpleadoService,
    private route: Router,
    private snackBar: MatSnackBar,
    private aRoute: ActivatedRoute
  ) {
    this.myForm = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(20)]],
      correo: ['', [Validators.required, Validators.email]],
      fechaIngreso: ['', [Validators.required]],
      telefono: ['', [Validators.required]],
      estadoCivil: ['', [Validators.required]],
      sexo: ['', [Validators.required]],
    });
    this.idEmpleado = this.aRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    if (this.idEmpleado !== undefined) {
      this.accion = 'Editar';
      this.esEditar()
    }
  }

  guardarEmpleado() {
    const EMPLEADO: Empleado = {
      nombreCompleto: this.myForm.get('nombreCompleto')!.value,
      correo: this.myForm.get('correo')!.value,
      fechaIngreso: this.myForm.get('fechaIngreso')!.value,
      telefono: this.myForm.get('telefono')!.value,
      estadoCivil: this.myForm.get('estadoCivil')!.value,
      sexo: this.myForm.get('sexo')!.value,
    }
    if (this.idEmpleado !== undefined) this.editarEmpleado(EMPLEADO)
    else this.enviarEmpleado(EMPLEADO)
  }

  enviarEmpleado(empleado: Empleado) {
    this._empleadoService.agregarEmpleado(empleado);
    this.snackBar.open('El empleado se agrego con éxito', '', { duration: 3000 })
    this.route.navigate(['/']);
  }

  editarEmpleado(empleado: Empleado) {
    this._empleadoService.editEmpleado(empleado, this.idEmpleado);
    this.snackBar.open('El empleado se actualizó con éxito', '', { duration: 3000 })
    this.route.navigate(['/']);
  }

  esEditar() {
    const empleado: Empleado = this._empleadoService.getEmpleado(this.idEmpleado);
    this.myForm.patchValue({
      nombreCompleto: empleado.nombreCompleto,
      correo: empleado.correo,
      fechaIngreso: empleado.fechaIngreso,
      telefono: empleado.telefono,
      sexo: empleado.sexo,
      estadoCivil: empleado.estadoCivil,
    })
  }

}
