import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { ICartProduct } from "../Models/icart-product";

@Injectable({
  providedIn: "root",
})
export class CartService {
  constructor(private _api: HttpClient) {}
  //add to cart
  test() {
    return this._api.get(`${environment.firebaseConfig}` + "/api/Cart/test");
  }
  //get all cart items
  getCartItems(): Observable<ICartProduct[]> {
    return this._api.get<ICartProduct[]>(`${environment.firebaseConfig}` + `/api/Cart/GetAll`);
  }

  // Add to cart
  addToCart(proId: number, count: number) {
    return this._api.post(`${environment.firebaseConfig}` + `/api/Cart/Add?proId=${proId}&count=${count}`,count);
  }
  //update product count in cart
  updateQuantity(proId: number, count: number) {
    return this._api.post(`${environment.firebaseConfig}` + `/api/Cart/Update?proId=${proId}`, count);
  }
  //Remove from cart
  removeFromCart(proId: number) {
    return this._api.delete(`${environment.firebaseConfig}` + `/api/Cart/Remove?proId=${proId}`);
  }


  GetTotalPrice():Observable<number>{

    return this._api.get<number>(`${environment.firebaseConfig}/api/Cart/GetCartPrice`)
  }

}
