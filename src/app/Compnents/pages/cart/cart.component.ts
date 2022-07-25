import { Component, OnInit } from '@angular/core';
import { ICartProduct } from 'src/app/Models/icart-product';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  lang: string = 'en';
  LocalStorageProducts!: ICartProduct[];
  isLogged: boolean = false;
  totalPrice!: number;
  constructor(private _cartService: CartService, private route: Router) {
    this.lang = localStorage.getItem('lang')!;
  }

  ngOnInit(): void {
    if (localStorage.getItem('currentUser')) {
      this.isLogged = true;
    }
    if (localStorage.getItem('currentUser')) {
      this._cartService
        .getCartItems()
        .subscribe((prod: ICartProduct[]) => {this.LocalStorageProducts = prod


         this._cartService
      .GetTotalPrice()
      .subscribe((price: number) => (this.totalPrice = price));

        });
    } else {
      if (localStorage.getItem('LocalStorageProducts')) {
        this.LocalStorageProducts = JSON.parse(
          localStorage.getItem('LocalStorageProducts')!
        );
        console.log(this.LocalStorageProducts);
      }
    }


  }

  CheckOut() {
    this.route.navigateByUrl('egypt-en/cart/order');
  }
}

