import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllproductsComponent } from './Compnents/pages/allproducts/allproducts.component';
import { ProductsdetailsComponent } from './Compnents/pages/productsdetails/productsdetails.component';

const routes: Routes = [
  {path:'allproducts',component:AllproductsComponent},
  {path:'productsdetails/:productid',component:ProductsdetailsComponent},
  {path:'**',redirectTo:'allproducts',pathMatch:'full'},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
