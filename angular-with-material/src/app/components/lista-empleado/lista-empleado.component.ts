import { Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { Empleado } from 'src/app/models/empleado';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { MensageConfirmacionComponent } from '../shared/mensage-confirmacion/mensage-confirmacion.component';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-lista-empleado',
  templateUrl: './lista-empleado.component.html',
  styleUrls: ['./lista-empleado.component.css']
})
export class ListaEmpleadoComponent {
  displayedColumns: string[] = ['nombreCompleto', 'correo', 'estadoCivil', 'fechaIngreso', 'sexo', 'telefono', 'acciones'];
  dataSource = new MatTableDataSource();
  listaEmpleado: any[];

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private _empleadoService: EmpleadoService,
    private _liveAnnouncer: LiveAnnouncer,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {
    this.listaEmpleado = []
  }

  ngOnInit() {
    this.cargarEmpleados()
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cargarEmpleados() {
    this.listaEmpleado = this._empleadoService.getEmpleados();
    this.dataSource = new MatTableDataSource(this.listaEmpleado);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  eliminarEmpleado(index: number) {
    const dialogRef = this.dialog.open(MensageConfirmacionComponent, {
      width: '350px',
      data: { mensaje: 'Esta seguro que desea eliminar el empleado' },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'aceptar') {
        this._empleadoService.eliminarEmpleado(index);
        this.cargarEmpleados();
        this.snackBar.open('El empleado se elimino con éxito', '', { duration: 3000 })
      }
    });
  }

}
