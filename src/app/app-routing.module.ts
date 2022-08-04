import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './Compnents/pages/profile/profile.component';
import { HomeComponent } from './Compnents/pages/home/home.component';
import { NotFoundComponent } from './Compnents/pages/not-found/not-found.component';
import { LoginformComponent } from './Compnents/compnents/loginform/loginform.component';
import { RegisterformComponent } from './Compnents/compnents/registerform/registerform.component';
import { SignoutComponent } from './Compnents/compnents/signout/signout.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Profile', component: ProfileComponent },
  {path:'login' , component:LoginformComponent},
  {path:'logout' , component:SignoutComponent},
  {path:'register' , component:RegisterformComponent},
  { path: 'Profile/:pId', component: ProfileComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
