import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AboutComponent } from './components/about/about.component';
import { StringinterpolationComponent } from './components/stringinterpolation/stringinterpolation.component';
import { PropertybindingComponent } from './components/propertybinding/propertybinding.component';
import { EventbindingComponent } from './components/eventbinding/eventbinding.component';
import { ClassbindingComponent } from './components/classbinding/classbinding.component';
import { StylebindingComponent } from './components/stylebinding/stylebinding.component';
import { TwowaybindingComponent } from './components/twowaybinding/twowaybinding.component';
import { TwoComponent } from './components/two/two.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CustomComponent } from './components/custom/custom.component';
import { AngularMaterialModule } from './modules/angular-material/angular-material.module';
import { NgifComponent } from './components/ngif/ngif.component';
import { SwitchComponent } from './components/switch/switch.component';
import { ForComponent } from './components/for/for.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { PaComponent } from './components/pa/pa.component';
import { ChComponent } from './components/ch/ch.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { DetailsComponent } from './components/details/details.component'; 
import { HttpClientModule } from '@angular/common/http';
import { ServiceparentComponent } from './serviceparent/serviceparent.component';
import { ServicesibilingComponent } from './servicesibiling/servicesibiling.component';
import { ObservableComponent } from './components/observable/observable.component';
import { PromiseComponent } from './components/promise/promise.component'
import { CourseService } from './services/course.service';
import { DataService } from './services/data.service';
import { MaheService } from './services/mahe.service';
import { DifPOComponent } from './components/dif-po/dif-po.component';
import { SelectedcourseComponent } from './components/selectedcourse/selectedcourse.component';
import { Home1Component } from './practice/home1/home1.component';
import { Course1Component } from './practice/course1/course1.component';
import { Details1Component } from './practice/details1/details1.component';
import { CoursedurationComponent } from './components/courseduration/courseduration.component';
//import { DifPOComponent } from './components/dif-p-o/dif-p-o.component';


// import {BehaviorSubject} from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    StringinterpolationComponent,
    PropertybindingComponent,
    EventbindingComponent,
    ClassbindingComponent,
    StylebindingComponent,
    TwowaybindingComponent,
    TwoComponent,
    CustomComponent,
    NgifComponent,
    SwitchComponent,
    ForComponent,
    ParentComponent,
    ChildComponent,
    PaComponent,
    ChComponent,
    PagenotfoundComponent,
    HomeComponent,
    CourseComponent,
        DetailsComponent,
        ServiceparentComponent,
        ServicesibilingComponent,
        ObservableComponent,
        PromiseComponent,
        DifPOComponent,
        SelectedcourseComponent,
        Home1Component,
        Course1Component,
        Details1Component,
        CoursedurationComponent,
        
        
        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,// two waybinding
    AngularMaterialModule,
    HttpClientModule,//observable
    ReactiveFormsModule
   
  ],
  providers: [CourseService,DataService,MaheService],
  bootstrap: [AppComponent]
})
export class AppModule 
{


 }
