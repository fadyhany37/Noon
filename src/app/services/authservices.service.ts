
import { Injectable } from '@angular/core';
import { Iproduct } from '../Models/iproduct';
import { Iuser } from '../Models/iuser';
import { AngularFirestore } from '@angular/fire/compat/firestore';


@Injectable({
  providedIn: 'root',
})
export class AuthservicesService {
  constructor(private fireauth: AngularFirestore) {}

  getproducts() {
    return this.fireauth.collection('Products').snapshotChanges();
  }

  getUsers() {
    return this.fireauth.collection('users').snapshotChanges();
  }

  addproduct(product: any) {
    this.fireauth.collection('Products').add(product);
  }

  addUser(user: any) {
    this.fireauth.collection('users').add(user);
  }

  deleteproduct(pId: string) {
    this.fireauth.collection('Products').doc(pId).delete();
  }

  deleteUser(uId: string) {
    this.fireauth.collection('users').doc(uId).delete();
  }

  updateproduct(pId: string, product: Iproduct) {
    this.fireauth.collection('Products').doc(pId).update(product);
  }

  updateUser(uId: string, user: Iuser) {
    this.fireauth.collection('users').doc(uId).update(user);
  }

  getProductById(pId: string) {
    return this.fireauth.collection('Products').doc(pId).snapshotChanges();
  }

  getUserById(uId: string) {
    return this.fireauth.collection('users').doc(uId).snapshotChanges();
  }

  
}











