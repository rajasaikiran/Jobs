import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ViewuserComponent } from './viewuser/viewuser.component';




const routes: Routes =
[
  {path:"home", component:HomeComponent},
  {path:"jobs",component:JobsComponent},
  {path:"contactus", component:ContactusComponent},
  {path:"viewuser/:id",component:ViewuserComponent},
  {path: "",redirectTo:"home",pathMatch:"full"},
  {path:"**", component:PagenotfoundComponent}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
