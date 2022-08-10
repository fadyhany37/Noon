import { Component, OnInit } from '@angular/core';
import { ICartProduct } from 'src/app/Models/icart-product';
import { CartService } from 'src/app/services/cart.service';
import { Router } from '@angular/router';
import Swal from "sweetalert2"


@Component({
  selector: 'app-cart2',
  templateUrl: './cart2.component.html',
  styleUrls: ['./cart2.component.scss']
})
export class Cart2Component implements OnInit {
  lang: string = 'en';
  LocalStorageProducts!: ICartProduct[];
  isLogged: boolean = false;
  totalPrice!: number;
  constructor(private _cartService: CartService,private route: Router) {
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

  Remove(ProductID: number) {
    if (localStorage.getItem('currentUser')) {
      this._cartService.removeFromCart(ProductID).subscribe(
        (next) => {},
        (err) => {
          console.log(err);
        },
        () => {
          Swal.fire(
            'Product deleted from your cart!',
            'Click the button to continue',
            'success'
          ).then(() => {
            this.route.navigateByUrl('/egypt-en/cart');
            location.reload();
            this.ngOnInit(); // i love you
          });
        }
      );
    } else {
      localStorage.setItem(
        'LocalStorageProducts',
        JSON.stringify(
          this.LocalStorageProducts.filter((p) => p.product.id != ProductID)
        )
      );
    }
  }
  CheckOut() {
    this.route.navigateByUrl('egypt-en/cart/order');
  }
}
