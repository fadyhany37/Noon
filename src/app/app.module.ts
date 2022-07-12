import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Compnents/home/home.component';
import { NavbarComponent } from './Compnents/navbar/navbar.component';
import { CarouselComponentComponent } from './Compnents/carousel-component/carousel-component.component';
import { FristSwiperComponent } from './Compnents/frist-swiper/frist-swiper.component';
import { SwiperModule } from 'swiper/angular';
import { FooterComponent } from './Compnents/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CarouselComponentComponent,
    FristSwiperComponent,
    FooterComponent,
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
