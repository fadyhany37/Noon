import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private store: AngularFirestore) { }


  getproducts() {
    return this.store.collection("Products").snapshotChanges();
  }

  addproduct(product:any)
  {
    this.store.collection("Products").add(product);
  }
}
