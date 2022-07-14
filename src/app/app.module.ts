import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Compnents/home/home.component';
import { ContactformComponent } from './Compnents/contactform/contactform.component';
import { DashboardComponent } from './Compnents/dashboard/dashboard.component';
import { RegisterformComponent } from './Compnents/registerform/registerform.component';
import { LoginformComponent } from './Compnents/loginform/loginform.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavbarComponent } from './Compnents/navbar/navbar.component';
import { ForgotpasswordComponent } from './Compnents/forgotpassword/forgotpassword.component';
import { VarifyemailComponent } from './Compnents/varifyemail/varifyemail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactformComponent,
    DashboardComponent,
    RegisterformComponent,
    LoginformComponent,
    NavbarComponent,
    ForgotpasswordComponent,
    VarifyemailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
