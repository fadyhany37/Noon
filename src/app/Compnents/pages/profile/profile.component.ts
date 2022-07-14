import { Iproduct } from './../../../Models/iproduct';
import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  adding: boolean;
  user: any = {
    name: 'Alaa Ezzat',
    email: 'alaa@gmail.com',
    image: '../../../../assets/avatar.jpg',
    sellerCode: 1,
  };
  allProducts: any[] = [];
  userProducts: any[] = [];
  constructor(private _ProductsService: ProductsService) {
    this.adding = true;
  }
  ngOnInit(): void {
    this._ProductsService.getproducts().subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        this.allProducts[i] = res[i].payload.doc.data();
      }
      this.userProducts = this.allProducts.filter(
        (product) => product.sellerCode == this.user.sellerCode
      );
    });
    /* getUserBySellerCode(){

    }
    */
  }
  addingFunction() {
    this.adding = true;
  }
  showFunction() {
    this.adding = false;
    console.log(this.userProducts);
  }
  openRegisterForm() {
    /* open register form to edit user info */
  }
}
