import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PracticeService } from 'src/app/services/practice.service';

@Component({
  selector: 'app-course1',
  templateUrl: './course1.component.html',
  styleUrls: ['./course1.component.css']
})
export class Course1Component 
{
  course:any=[];
   constructor(private _practice:PracticeService,
    private _router:Router)
   {

   }
   ngOnInit()
   {
   //this.course= this._practice.getcourses();
   this.getcourselist();
   }
   getcourselist()
   {
    this._practice.getcourses().subscribe((data)=>
    {
      this.course=data;
      console.log(data);
    })
   }
   onSelect(x:any)
   {
    this._router.navigate(['/selectedcourse',x.id,x.firstName,x.lastName])
    console.log(x);
   }
}
