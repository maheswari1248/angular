import { Component } from '@angular/core';

@Component({
  selector: 'app-for',
  templateUrl: './for.component.html',
  styleUrls: ['./for.component.css']
})
export class ForComponent 
{
 public names=['mahe','maheswari','ammulu','ammukutti'];
 public emp=
 [
  {
    id:1,
    firstname:'mahe',
    lastname:'ramadsu',
    address:'kp'
    

  },
  {
    id:2,
    firstname:'mahe',
    lastname:'ramadsu',
    address:'kp'
  }
 ]
}
