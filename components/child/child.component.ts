import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  // @Input() postdata : string="";
  message:string="i am coming from child";
  @Output() messageEvent=new EventEmitter<string>();
  constructor(){}
  sendmessage()
  {
   this.messageEvent.emit(this.message);
  }
}
