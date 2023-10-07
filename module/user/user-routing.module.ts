import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { Admin1Component } from './component/admin1/admin1.component';

const routes: Routes = [{ path: '', component: UserComponent }
,
{
  path:'admin1',
  component:Admin1Component
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
