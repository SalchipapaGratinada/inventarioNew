import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { NgxSpinnerService } from "ngx-spinner";
import { UbicacionmuebleService } from "../ubicacionmueble.service";
import { finalize, takeUntil } from "rxjs/operators";
import { SnackBarService } from "../snack-bar.service";

@Component({
  selector: 'app-ubicacionmueble-create',
  templateUrl: './ubicacionmueble-create.component.html',
  styleUrls: ['./ubicacionmueble-create.component.scss']
})
export class UbicacionmuebleCreateComponent implements OnInit{
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    "id",
    "piso",
    "bloque",
    "sala",
    "descripcion",
    "fecha_creacion",
    "fecha_modificacion",
    "acciones",
  ];

  constructor(private _spinnerService: NgxSpinnerService,
    private _ubicacionmueble: UbicacionmuebleService,
    private _snackBarService: SnackBarService,){

  }

  ngOnInit(): void {
    this.getUbicacionMueble();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //CARGA DE DATOS
  getUbicacionMueble() {
    this._spinnerService.show();
    this._ubicacionmueble
      .getUbicacionMueble()
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
            console.log("DATOS")
            console.log(response.data)
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

