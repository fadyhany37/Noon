import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactformComponent } from './Compnents/contactform/contactform.component';
import { DashboardComponent } from './Compnents/dashboard/dashboard.component';
import { LoginformComponent } from './Compnents/loginform/loginform.component';
import { RegisterformComponent } from './Compnents/registerform/registerform.component';

const routes: Routes = [
  {path:'' , redirectTo:'login' , pathMatch:'full'},
  {path:'login' , component:LoginformComponent},
  {path:'register' , component:RegisterformComponent},
  {path:'dashboard' , component:DashboardComponent},
  {path:'contact' , component:ContactformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
