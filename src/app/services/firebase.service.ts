import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Iproduct } from '../Models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  constructor(private store: AngularFirestore) {}

  getproducts() {
    return this.store.collection('Products').snapshotChanges();
  }

  addproduct(product: any) {
    this.store.collection('Products').add(product);
  }

  deleteproduct(pId: string) {
    this.store.collection('Products').doc(pId).delete();
  }

  /****** HEAD***/
  /*  updateproduct(pId: string, product: any) {
    this.store.collection('Products').doc(pId).set(product);
  } */

  /*  534607d4f57291dd4eb63bc5ccd8837079c26ead  */
  updateproduct(pId: string, product: Iproduct) {
    this.store.collection('Products').doc(pId).update(product);
  }

  getProductById(pId: string) {
    return this.store.collection('Products').doc(pId).snapshotChanges();
  }
}
