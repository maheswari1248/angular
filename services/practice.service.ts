import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PracticeService 
{
  url:any="https://hub.dummyapis.com/employee?noofRecords=10&idStarts=1001";

  constructor(private _http:HttpClient) { }
  getcourses():Observable<[]>
  {
    return this._http.get<[]>(this.url);
  }

}
