import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // <--- Importar FormsModule

 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule // <--- Agregar FormsModule al array de imports
  ],
  exports:[
    CommonModule,
    FormsModule // <--- Exportar FormsModule para que puedan usarlo otros módulos
    // Otros componentes o módulos que quieras exportar
  ]
})
export class SharedModule { }
