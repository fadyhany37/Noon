import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Iproduct } from '../Models/iproduct';
@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private store: AngularFirestore) { }


  getproducts(){

    return this.store.collection("Products").snapshotChanges();

  }

  addproduct(product:any) {

    this.store.collection("Products").add(product);
  }

  deleteproduct(pId:string) {

    this.store.collection("Products").doc(pId).delete();
  }

  updateproduct(pId:string,product:Iproduct) {

    this.store.collection("Products").doc(pId).update(product);
  }

  getProductById(pId: string) {
    return this.store.collection("Products").doc(pId).snapshotChanges();
  }
}

