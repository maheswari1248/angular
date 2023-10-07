import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent 
{
  public course:string="";
  public fees:string="";
  
  getcourse(course:any)
  {
     console.log(course.value);
     this.course= course.value; 
  }
  getfees(fees:any)
  {
    console.log("this is fees");
    this.fees = fees.value;
  }
}
