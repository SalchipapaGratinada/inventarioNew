import { Component, OnInit, ViewChild, TemplateRef} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { NgxSpinnerService } from 'ngx-spinner';
import { PerfilesService } from '../perfiles.service';
import { finalize, takeUntil } from 'rxjs/operators';
import { SnackBarService } from '../snack-bar.service';
import {FormGroup, FormBuilder, FormControl, Validators} from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";


@Component({
  selector: 'app-perfiles-create',
  templateUrl: './perfiles-create.component.html',
  styleUrls: ['./perfiles-create.component.scss'],
})
export class PerfilesCreateComponent implements OnInit {
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild("dialogPerfiles") dialogPerfiles!: TemplateRef<any>;


  dataSource = new MatTableDataSource();
  displayedColumns: string[] = [
    'id',
    'nombre',
    'fecha_creacion',
    'fecha_modificacion',
    'acciones',
  ];

  refrescar: any = null;
  accionForm!: string;
  perfilesForm!: FormGroup;
  refDialog: any;

  ngOnInit(): void {
    this.getPerfiles();
  }

  constructor(
    private _spinnerService: NgxSpinnerService,
    private _perfilesService: PerfilesService,
    private _snackBarService: SnackBarService,
    private _formBuilder: FormBuilder,
    public dialog: MatDialog
  ) {
    (this.perfilesForm = this._formBuilder.group({
      id: [null],
      nombre: ["", Validators.required],
    }))
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  //CARGA DE DATOS
  getPerfiles() {
    this._spinnerService.show();
    this._perfilesService
      .getPerfiles()
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
                : 'Ha ocurrido un error, por favor intenta mas tarde.',
              'danger'
            );
          }
        },
        (error) => {
          this._snackBarService.open(
            error.message
              ? error.message
              : 'Ha ocurrido un error, por favor intenta mas tarde.',
            'danger'
          );
        }
      );
  }

  openDialogEditarPerfil(accion: string, values: any = null) {
    this.accionForm = accion;
    this.refrescar = values;
    this.perfilesForm.get("id")!.setValue(values?.id);
    this.perfilesForm.get("nombre")!.setValue(values.nombre);

    this.refDialog = this.dialog.open(this.dialogPerfiles, {
      width: "calc(70% - 50px)",
      maxWidth: "100vw",
      disableClose: true,
      autoFocus: false,
    });
    this.refDialog.afterClosed().subscribe(() => {
      //this.datosForm.reset();
    });

  }



}
