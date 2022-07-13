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
import { CarouselComponentComponent } from './Compnents/compnents/carousel-component/carousel-component.component';
import { FristSwiperComponent } from './Compnents/compnents/frist-swiper/frist-swiper.component';
import { SwiperModule } from 'swiper/angular';
import { ProductsSwiperComponent } from './Compnents/compnents/products-swiper/products-swiper.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponentComponent,
    NavCategoriesComponent,
    FristSwiperComponent,
    ProductsSwiperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    SwiperModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
