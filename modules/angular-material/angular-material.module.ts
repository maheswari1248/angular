import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';

const materialComponents=
[
  MatButtonModule,
  MatTableModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule

  ],
  exports:[materialComponents]
})
export class AngularMaterialModule { }
