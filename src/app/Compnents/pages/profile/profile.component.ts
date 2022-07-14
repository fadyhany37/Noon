import { Component, OnInit } from '@angular/core';
import { Iproduct } from 'src/app/Models/iproduct';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  adding: boolean;
 sellerProducts!: Iproduct[];
  sellerCode: number =3;
  constructor(private _ProductsService: ProductsService,private fireStore: FirebaseService) {

    this.adding = false;
    this.fireStore.getproducts().subscribe((products) => {
      let prods: any = [];
      for (let prod of products) {
        prods.push({ id:prod.payload.doc.id,...prod.payload.doc.data()as object })
      }
      this.sellerProducts = prods.filter((p: any) => p.sellerCode == this.sellerCode);


    });
  }

  ngOnInit(): void {



  }
  addingFunction() {
    this.adding = true;
  }
  showFunction() {
    this.adding = false;

    this.sellerProducts = this._ProductsService.getProductsBySellerCode(this.sellerCode)
    console.log(this.sellerProducts)
  }
}
