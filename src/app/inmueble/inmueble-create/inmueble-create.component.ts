import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { NgxSpinnerService } from "ngx-spinner";
import { InmuebleService } from "../inmueble.service";
import { finalize, takeUntil } from "rxjs/operators";
import { SnackBarService } from "../snack-bar.service";


@Component({
  selector: 'app-inmueble-create',
  templateUrl: './inmueble-create.component.html',
  styleUrls: ['./inmueble-create.component.scss']
})
export class InmuebleCreateComponent implements OnInit{
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    "id",
    "numpisos",
    "numhabitacion",
    "ubicacion_inmueble",
    "dueno",
    "impuestopredial",
    "tipo_idtipo",
    "fecha_creacion",
    "fecha_modificacion",
    "acciones",
  ];


  ngOnInit(): void {
    this.getMuebles();
  }

  constructor(private _spinnerService: NgxSpinnerService,
    private _InmuebleService: InmuebleService,
    private _snackBarService: SnackBarService,){
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //CARGA DE DATOS
  getMuebles() {
    this._spinnerService.show();
    this._InmuebleService
      .getInmuebles()
      .pipe(
        finalize(() => {
          this._spinnerService.hide();
        })
      )
      .subscribe(
        (response) => {
          if (response.status) {
            ////
            this.dataSource = new MatTableDataSource(response.data);
            this.dataSource.sort = this.sort;
            this.dataSource.paginator = this.paginator;
            ///
          } else {
            this._snackBarService.open(
              response.data
                ? response.data
                : "Ha ocurrido un error, por favor intenta mas tarde.",
              "danger"
            );
          }
        },
        (error) => {
          this._snackBarService.open(
            error.message
              ? error.message
              : "Ha ocurrido un error, por favor intenta mas tarde.",
            "danger"
          );
        }
      );
}
}
