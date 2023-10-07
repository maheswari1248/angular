import { Component } from '@angular/core';
import { MaheService } from 'src/app/services/mahe.service';


@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent 
{
  results: any;

  constructor(private _maheservice:MaheService){
    
  }
search(value:any){
  console.log(value)
  this._maheservice.searchCountriesUsingPromise(value).then
  (
    (result: any)=>{
      console.log(result);
      this.results=result;
    }
  )
  
}
}
