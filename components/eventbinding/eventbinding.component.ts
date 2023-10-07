import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent
 {
onclick()
{
  console.log("hey button");
}

onDblclick()
{
  console.log("double clicked me");
}
onmouseover()
{
  console.log("mouseover");
}
onMouseout()
{
  console.log("mouseout")
}
onMousemove()
{
  console.log("on mouse move")
}
kDown()
{
  console.log("keydown");
}
kUp()
{
  console.log("keyup");
}
}
