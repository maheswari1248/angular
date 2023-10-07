import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-selectedcourse',
  templateUrl: './selectedcourse.component.html',
  styleUrls: ['./selectedcourse.component.css']
})
export class SelectedcourseComponent 
{
  public courseId: number = 0;
  public coursename:any;
  public coursefee:any;
  constructor(private _activatedroute:ActivatedRoute,
    private _router:Router)
  {

  }
  ngOnInit()
  {
    //this.courseId= this._activatedroute.snapshot.paramMap.get('id');
    this._activatedroute.paramMap.subscribe((params:ParamMap)=>
    {
     
       this.courseId = Number(params.get('id'));;
       this.coursename=params.get('name');
       this.coursefee=params.get('fees');
       
  })
  }
  onback()
  {
   this.courseId = this.courseId-1 ;
   this._router.navigate(['/course',{id:this.courseId}]);
  }
  onnext()
  {
    this.courseId = this.courseId+1 ;
    this._router.navigate(['/course',{id:this.courseId}]);
}

}