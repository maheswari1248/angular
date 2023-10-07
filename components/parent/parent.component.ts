import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
//getdata:string="hey i am in parent";
  message: string="";

receivemessage($event: string)
{
this.message=$event;
}

}
