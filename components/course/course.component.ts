import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
course:any=[];
employee:any =[];
mahe:string="";
public courseId:any;

constructor(private _courseService:CourseService,
  private _router:Router,
  private _activated:ActivatedRoute){
}
ngOnInit()
{
  //this.course = this.__courseService.getcourses();
  this.getCourseList();
  
  this._activated.paramMap.subscribe((params:ParamMap)=>
  {
    this.courseId=params.get('id');
    console.log(this.courseId);
  },
  )
  
//   this.getEmployeeData();
//   this.mahe=this._courseService.mahe;
//   console.log(this.course);
//   console.log(this.mahe);
}

 getCourseList() {
   this._courseService.getcourses().subscribe(
     (data) => {this.course = data
     console.log(this.course);
     })
 }

// getEmployeeData() {
//   this._courseService.getEmployeeList().subscribe(
//     (res) => {
//       console.log(res);
//       this.employee = res;

//     }
//   )
// }

onSelect(course:any)
{
 this._router.navigate(['/selectedcourse',course.id,course.name,course.fees])
 console.log(course);
}
  selected(course:any)
  {
    

    return (course.id==this.courseId);
  }
  onnext(course:any)
  {
    return(course.id==this.courseId)
  }


}
