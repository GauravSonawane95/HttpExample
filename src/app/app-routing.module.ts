import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  
  {path:"list",component:UserlistComponent},
  {path:"create",component:AddUserComponent},
  {path:"",redirectTo:"/list",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
