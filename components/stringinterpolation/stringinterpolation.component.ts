import { Component } from '@angular/core';

@Component({
  selector: 'app-stringinterpolation',
  templateUrl: './stringinterpolation.component.html',
  styleUrls: ['./stringinterpolation.component.css']
})
export class StringinterpolationComponent {
   public lastname:string="maheswari";
   emp:any=[
   {
    fname:'mahe',
    lname:null,
    age:21
   },
   {
    fname:'ramadasu',
    lname:'mahe',
    age:22
   }
  ]
}
