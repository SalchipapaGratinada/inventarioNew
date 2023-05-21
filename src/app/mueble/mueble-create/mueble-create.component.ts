import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { NgxSpinnerService } from "ngx-spinner";
import { MuebleService } from "../mueble.service";
import { finalize, takeUntil } from "rxjs/operators";
import { SnackBarService } from "../snack-bar.service";


@Component({
  selector: 'app-mueble-create',
  templateUrl: './mueble-create.component.html',
  styleUrls: ['./mueble-create.component.scss']
})
export class MuebleCreateComponent implements OnInit{
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    "id",
    "serial",
    "ubicacionmueble_id",
    "responsable_id",
    "tipomueble_id",
    "fecha_creacion",
    "fecha_modificacion",
    "acciones",
  ];


  ngOnInit(): void {
    this.getMuebles();
  }

  constructor(private _spinnerService: NgxSpinnerService,
    private _MuebleService: MuebleService,
    private _snackBarService: SnackBarService,){
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //CARGA DE DATOS
  getMuebles() {
    this._spinnerService.show();
    this._MuebleService
      .getMuebles()
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
