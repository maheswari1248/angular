import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-servicesibiling',
  templateUrl: './servicesibiling.component.html',
  styleUrls: ['./servicesibiling.component.css']
})
export class ServicesibilingComponent implements OnInit
 {
  message:string="";
  ngOnInit(): void {
    this._data.currentmessage.subscribe((message)=>this.message=message);
    
  }
constructor(private _data:DataService)
{
  
  
}
newmessage()
{
  this._data.changemessage("hello i am from sibiling");
}
}
