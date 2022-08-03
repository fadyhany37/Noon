import { Component, OnInit } from '@angular/core';
import { IwishList } from "src/app/Models/iwish-list-";
import { ProductsService } from "src/app/services/products.service";
import { Router } from "@angular/router";
import Swal from "sweetalert2";
import { from } from 'rxjs';
import { WishListService } from 'src/app/services/wish-list.service';
@Component({
  selector: 'app-wish-list',
  templateUrl: './wish-list.component.html',
  styleUrls: ['./wish-list.component.scss']
})
export class WishListComponent implements OnInit {
  lang: string;

  constructor(private prodService: ProductsService,private wishService: WishListService,private _route: Router) {
    this.lang = localStorage.getItem("lang")!;
  }
  ListProduct!: IwishList[];
  ngOnInit(): void {
    if (localStorage.getItem("currentUser")) {
      this.wishService.getWishListItems().subscribe((Wishlistproducts) => {
        this.ListProduct = Wishlistproducts;
       
      });
    }
  }
  
  deletewishlist(id: number) {
    if (localStorage.getItem("currentUser")) {
      this.wishService.removeFromWishList(id).subscribe(
        (next) => {},
        (err) => {
          console.log(err);
        },
        () => {
          
          Swal.fire(
            'Deleting this item succesfully from wishList!',
            'You clicked the button!',
            'success'
          ).then(()=>{
            this._route.navigateByUrl("/egypet-en/cart");
          this.ngOnInit(); 
          })
        
        }
       
      );
    }
  }
}
