import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-serviceparent',
  templateUrl: './serviceparent.component.html',
  styleUrls: ['./serviceparent.component.css']
})
export class ServiceparentComponent implements OnInit
{
  message:string="";
  ngOnInit(): void
   {
    this._data.currentmessage.subscribe(
      (message)=>this.message=message
    )
  }
  constructor(private _data:DataService)
  
  {
    
  }
  
  
  
}


