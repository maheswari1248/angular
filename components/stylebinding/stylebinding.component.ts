import { Component } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent {
myColor="red";
bgColor="blue";
public Color:any ="Color";
onclick()
{
  this.myColor="blue";
  this.bgColor="red";
}
}
