import { Injectable } from '@angular/core';
<<<<<<< HEAD
import { AngularFirestore} from '@angular/fire/compat/firestore';
=======
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
>>>>>>> Alaa2
import { Iproduct } from '../Models/iproduct';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
<<<<<<< HEAD
  products:any[]=[]
  constructor(private fireStore: FirebaseService,private store: AngularFirestore) {

=======
  products: any[] = [];
  constructor(private fireStore: FirebaseService) {
>>>>>>> Alaa2
    this.fireStore.getproducts().subscribe((products) => {
      let prods: any = [];
      for (let prod of products) {
        prods.push({
          id: prod.payload.doc.id,
          ...(prod.payload.doc.data() as object),
        });
      }

      this.products = prods;
    });
  }

  getProductsByCategorey(cat: string) {
    if (cat == 'all') {
      return this.products;
    } else {
      return this.products.filter((p) => p.category == cat);
    }
  }
  getProductsBySellerCode(code: number): Iproduct[] {
    return this.products.filter((p) => p.sellerCode == code);
  }
<<<<<<< HEAD
  getProductsByName(search:string):Iproduct[]
  {

    return this.products.filter((p) => {
      if (p.description)
      {
       return p.description.toLowerCase().includes(search)
      }

    });

  }




  getProductById(productId: string) {
    return this.store.collection("Products").doc(productId).snapshotChanges();
  }

  // addproduct(product:any)
  // {
  //   this.store.collection("Products").add(product);
  // }
=======
>>>>>>> Alaa2
}
