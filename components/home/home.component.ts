import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  //   mahe:string="maheswari";
  //  ngOnDestroy()
  //  {
  //   console.log(this.mahe);
  //  }
  deletepro: any = [];
  errormessage:any =[];
  

  constructor(private _courses:CourseService) {}
  ngOnInit() {
    this.getdeletedata();
  }
  private getdeletedata() {
    this._courses.getdeletelist(1).subscribe({
      next: async (data) => {
        console.log(data);
        this.deletepro = data;
      },
      error: (error) => {
        console.log(error.message);
        this.errormessage = error.message;
      },
    });
  }
}
