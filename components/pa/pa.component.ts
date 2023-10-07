import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ChComponent } from '../ch/ch.component';

@Component({
  selector: 'app-pa',
  templateUrl: './pa.component.html',
  styleUrls: ['./pa.component.css']
})
export class PaComponent  implements AfterViewInit{
  @ViewChild(ChComponent) child: any;
message:string="";
childmsg:string="";
 
ngAfterViewInit()
{
  this.childmsg=this.child?.message;
  alert("hey");
}
}
