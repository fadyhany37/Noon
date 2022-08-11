import { UpdateUserComponent } from './Compnents/pages/update-user/update-user.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './Compnents/pages/profile/profile.component';
import { HomeComponent } from './Compnents/pages/home/home.component';
import { NotFoundComponent } from './Compnents/pages/not-found/not-found.component';
import { AllproductsComponent } from './Compnents/pages/allproducts/allproducts.component';
import { ProductsdetailsComponent } from './Compnents/pages/productsdetails/productsdetails.component';
import { CartComponent } from './Compnents/pages/cart/cart.component';

import { UserProfileComponent } from './Compnents/pages/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Profile', component: ProfileComponent },
  { path: 'userProfile', component: UserProfileComponent },
  { path: 'updateUser', component: UpdateUserComponent },
  { path: 'Profile/:pId', component: ProfileComponent },
  { path: 'allproducts', component: AllproductsComponent },
  { path: 'products/:productName', component: AllproductsComponent },
  {path:'productsdetails/:productid',component:ProductsdetailsComponent},
  {path: 'cart',component:CartComponent},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
