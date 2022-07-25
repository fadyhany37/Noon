import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Compnents/pages/home/home.component';
import { NavbarComponent } from './Compnents/compnents/navbar/navbar.component';
import { NavCategoriesComponent } from './Compnents/compnents/nav-categories/nav-categories.component';
import { ProductsSwiperComponent } from './Compnents/compnents/products-swiper/products-swiper.component';
import { CarouselComponentComponent } from './Compnents/compnents/carousel-component/carousel-component.component';
import { FristSwiperComponent } from './Compnents/compnents/frist-swiper/frist-swiper.component';
import { SwiperModule } from 'swiper/angular';
import { FooterComponent } from './Compnents/compnents/footer/footer.component';
import { AddProductComponent } from './Compnents/compnents/add-product/add-product.component';
import { ProfileComponent } from './Compnents/pages/profile/profile.component';
import { LayoutComponent } from './Compnents/pages/layout/layout.component';
import { NotFoundComponent } from './Compnents/pages/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './Compnents/pages/cart/cart.component';
import { WishListComponent } from './Compnents/pages/cart/wish-list/wish-list.component';
import { OrderSummryComponent } from './Compnents/pages/cart/order-summry/order-summry.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponentComponent,
    NavCategoriesComponent,
    FristSwiperComponent,
    ProductsSwiperComponent,
    FooterComponent,
    AddProductComponent,
    ProfileComponent,
    LayoutComponent,
    NotFoundComponent,
    CartComponent,
    WishListComponent,
    OrderSummryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    SwiperModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
