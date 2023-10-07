import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { courseInterface } from '../models/courseInterface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',//their is no need p
})
export class CourseService {
   mahe: string = 'hello';
   url: string = '../../assets/data/course.json';
   private _dummyServerURL:string ="https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";
  public id:any="";
  private _dummy:string="https://dummyjson.com/products";
  constructor(private _http: HttpClient) {}
  getcourses(): Observable<[]> {
     return this._http.get<[]>(this.url);
  }

   getEmployeeList():Observable<[]> {
    return this._http.get<[]>(this._dummyServerURL);
   }
   getdetailslist():Observable<[]>
   {
   return this._http.get<[]>(this._dummyServerURL);
  }
  getdeletelist(id: number):Observable<any>
  {
    return this._http.delete<any>(this._dummy+id);
  }
}
