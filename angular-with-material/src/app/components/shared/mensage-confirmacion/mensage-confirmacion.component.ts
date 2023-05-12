import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-mensage-confirmacion',
  templateUrl: './mensage-confirmacion.component.html',
  styleUrls: ['./mensage-confirmacion.component.css']
})
export class MensageConfirmacionComponent {
  mensaje: string;
  btn = 'aceptar'

  constructor(public dialogRef: MatDialogRef<MensageConfirmacionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { this.mensaje = data.mensaje }

  onNoClick() {
    this.dialogRef.close();
  }

}
