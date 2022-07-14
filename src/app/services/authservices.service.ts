import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthservicesService {
// user:Observable<firebase.User>


  constructor(private fireauth: AngularFirestore) {

   }

  //login//
  login() 
  {
    return this.fireauth.collection("users").snapshotChanges();
  }

  addLogin(user:any)
  {
    this.fireauth.collection("users").add(user);
  }

  deleteLogin(userId:string) {

    this.fireauth.collection("users").doc(userId).delete();
  }
  
  updateLogin(userId:string,user:any) {

    this.fireauth.collection("users").doc(userId).set(user);
  }

  getUserById(userId: string) {
    return this.fireauth.collection("users").doc(userId).snapshotChanges();
  }


  //register//
  register() 
  {
    return this.fireauth.collection("users").snapshotChanges();
  }

  addregister(user:any)
  {
    this.fireauth.collection("users").add(user);
  }

  deleteregister(userId:string) {

    this.fireauth.collection("users").doc(userId).delete();
  }
  
  updateregister(userId:string,user:any) {

    this.fireauth.collection("users").doc(userId).set(user);
  }

  getUserRegisterById(userId: string) {
    return this.fireauth.collection("users").doc(userId).snapshotChanges();
  }


  //signout//
  logout() 
  {
    return this.fireauth.collection("users").snapshotChanges();
  }

  addlogout(user:any)
  {
    this.fireauth.collection("users").add(user);
  }

  deletelogout(userId:string) {

    this.fireauth.collection("users").doc(userId).delete();
  }
  
  updatelogout(userId:string,user:any) {

    this.fireauth.collection("users").doc(userId).set(user);
  }

  getUserLogoutById(userId: string) {
    return this.fireauth.collection("users").doc(userId).snapshotChanges();
  }



  //forgot password//
  // forgotpass(email:string)
  // {
  //   this.fireauth.
  // }
  
}
