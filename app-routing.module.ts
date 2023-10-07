import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NgifComponent } from './components/ngif/ngif.component';
import { StringinterpolationComponent } from './components/stringinterpolation/stringinterpolation.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { StylebindingComponent } from './components/stylebinding/stylebinding.component';
import { AboutComponent } from './components/about/about.component';
import { ChComponent } from './components/ch/ch.component';
import { ChildComponent } from './components/child/child.component';
import { ClassbindingComponent } from './components/classbinding/classbinding.component';
import { CourseComponent } from './components/course/course.component';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { ObservableComponent } from './components/observable/observable.component';
import { PromiseComponent } from './components/promise/promise.component';
import { ServiceparentComponent } from './serviceparent/serviceparent.component';
import { ServicesibilingComponent } from './servicesibiling/servicesibiling.component';
import { DifPOComponent } from './components/dif-po/dif-po.component';
import { SelectedcourseComponent } from './components/selectedcourse/selectedcourse.component';
import { ForComponent } from './components/for/for.component';
import { Home1Component } from './practice/home1/home1.component';
import { Course1Component } from './practice/course1/course1.component';
import { Details1Component } from './practice/details1/details1.component';
import { CoursedurationComponent } from './components/courseduration/courseduration.component';
import { adminGuard } from './guards/admin.guard';
import { user1Guard } from './guards/user1.guard';


const routes: Routes = 
[{
   path:'',//localhost:4200,
  redirectTo:'/home',//localhost:4200/home,
   pathMatch:'full'
},
  {
    path:'ngif',
    component:NgifComponent
  },
  {
    path:'serviceparent',
    component:ServiceparentComponent
  },
  {
    path:'servicesibiling',
    component:ServicesibilingComponent
  },
  {
    path:'difpo',
    component:DifPOComponent
  },

  {
    path:'stringinterpolation',
    
    component:StringinterpolationComponent
  },
  {
    path:'stylebinding',
    
    component:StylebindingComponent
  },
  {
  path:'promise',
    
  component:PromiseComponent
 },
  {
    path:'observable',
    
    component:ObservableComponent
  },
  {
    path:'about',
    
    component:AboutComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'ch',
    
    component:ChComponent
  },
  {
    path:'details',
    
    component:DetailsComponent
  },
  {
    path:'child',
    
    component:ChildComponent
    
    
  },
  {
    path:'classbinding',
    
    component:ClassbindingComponent
  },
  {
    path:'course',
    component:CourseComponent
   },
   {
    path:'course1',
    component:Course1Component
   },
   {
    path:'details1',
    component:Details1Component
   },
   {
    path:'home1',
    component:Home1Component
   },
   {
    path:'course/:id',
    component:CourseComponent
   },
   {
    path:'for',
    component:ForComponent
   },
     {
       path:'selectedcourse/:id/:name/:fees',
     component:SelectedcourseComponent,
     canActivateChild:[user1Guard],
     children:[
      {
        path:"duration",
        component:CoursedurationComponent,
        
      }
       
     ]
     
       },
    // {
    //  path:'selectedcourse',
    //  component:SelectedcourseComponent
    // },
   {
    path:'homecomponent',
    component:HomeComponent
   },
{ path: 'user', loadChildren: () => import('./module/user/user.module').then(m => m.UserModule) },
  {
    path:"admin",
    component:HomeComponent,
    canActivate:[adminGuard]

  },
  {
    path:'**',
    component:PagenotfoundComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
