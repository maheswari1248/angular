import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {


  
  details:any=[];

  constructor(private _courseService:CourseService)
  {
  
  }
  ngOnInit()
  {
    this.getdetailsdata();
  }
  getdetailsdata()
  {
    this. _courseService.getdetailslist().subscribe(
    (data)=>{this.details=data});
    
  }
}
