import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dif-po',
  templateUrl: './dif-po.component.html',
  styleUrls: ['./dif-po.component.css']
})
export class DifPOComponent implements OnInit
 {
  ngOnInit(): void {
    
  
    let  promise=new Promise((res,err)=>
    {
      console.log("this is promise");
      res("this is response1");
      res("this is respons2");
      res("this is response3");

    }
    )
    promise.then((result)=>
    {
      console.log(result);
    })

    let observe=new Observable((res)=>
    {
      console.log("i am in observable");
      res.next("call1");
      res.next("call2");
      res.next("call3");
      res.next("call4");

    }
    )
    observe.subscribe((response)=>
    {
      console.log(response)
    }
    )
  
  }
   
}