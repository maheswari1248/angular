import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import {debounceTime} from 'rxjs/operators';
import { MaheService } from 'src/app/services/mahe.service';


@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent 
{
  public country=new FormControl;
  results: any;

  constructor(private _maheservice:MaheService){
    
  }
  ngOnInit()
  {
    this.country.valueChanges.pipe(debounceTime(4000)).subscribe(country=>
      {
        console.log(country);
        this.search(country);
      }
      )

  }search(value:any){
  console.log(value)
  this._maheservice.searchCountries(value).subscribe(
    (result: any)=>{
      console.log(result);
      this.results=result;
    }
  )
  
}
}
