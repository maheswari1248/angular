import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
 private messageSource=new BehaviorSubject('default message');
 currentmessage=this.messageSource.asObservable();
  constructor() { }
  changemessage(message:string)
  {
    this.messageSource.next(message);
  }
}
