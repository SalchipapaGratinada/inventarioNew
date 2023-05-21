import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { MatSort } from "@angular/material/sort";
import { NgxSpinnerService } from "ngx-spinner";
import { UsuarioService } from "../usuario.service";
import { finalize, takeUntil } from "rxjs/operators";
import { SnackBarService } from "../snack-bar.service";

@Component({
  selector: 'app-usuario-create',
  templateUrl: './usuario-create.component.html',
  styleUrls: ['./usuario-create.component.scss']
})
export class UsuarioCreateComponent implements OnInit {

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    "id",
    "name",
    "email",
    "email_verified_at",
    "perfil_idperfil",
    "created_at",
    "updated_at",
    "acciones",
  ];

  constructor(private _spinnerService: NgxSpinnerService,
    private _UsuarioService: UsuarioService,
    private _snackBarService: SnackBarService,){

  }

  ngOnInit(): void {
    this.getUsuarios();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //CARGA DE DATOS
  getUsuarios() {
    this._spinnerService.show();
    this._UsuarioService
      .getUsuarios()
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

