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

  product: any = {

      id: 1,
      title: "iPhone 9",
      description: "An apple mobile which is nothing like apple",
      price: 549,
    discountPercentage: 12.96,
     sellerCode:3,
      rating: 4.69,
      stock: 94,
      brand: "Apple",
      category: "smartphones",
      thumbnail: "https://dummyjson.com/image/i/products/1/thumbnail.jpg",
      images: [
      "https://dummyjson.com/image/i/products/1/1.jpg",
      "https://dummyjson.com/image/i/products/1/2.jpg",
      "https://dummyjson.com/image/i/products/1/3.jpg",
      "https://dummyjson.com/image/i/products/1/4.jpg",
      "https://dummyjson.com/image/i/products/1/thumbnail.jpg"
      ]

  }

  sellerProducts: any[]=[]
  sellerCode: number = 3;

  user: any = {
    name: 'Alaa Ezzat',
    email: 'alaa@gmail.com',
    image: '../../../../assets/avatar.jpg',
    sellerCode: 1,
  };
  constructor(private _ProductsService: ProductsService, private fireStore: FirebaseService) {

    this.adding = true;
    this.sellerProducts = this._ProductsService.getProductsBySellerCode(this.sellerCode)

  }
  ngOnInit(): void {


  }



  addingFunction() {
    this.adding = true;
  }
  showFunction() {
    this.adding = false;


    console.log(this.sellerProducts)

  }
  openRegisterForm() {
    /* open register form to edit user info */
  }

}
