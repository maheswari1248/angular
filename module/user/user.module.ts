import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { Admin1Component } from './component/admin1/admin1.component';


@NgModule({
  declarations: [
    UserComponent,
    Admin1Component
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
