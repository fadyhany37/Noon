import { Component, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Router } from "@angular/router";
import { IwishList } from "src/app/Models/iwish-list-";
import { ProductsService } from "src/app/services/products.service";
@Component({
  selector: "app-wish-list",
  templateUrl: "./wish-list.component.html",
  styleUrls: ["./wish-list.component.scss"],
})
export class WishListComponent implements OnInit {
  lang: string;

  constructor(private prodService: ProductsService, private _route: Router) {
    this.lang = localStorage.getItem("lang")!;
  }
  ListProduct!: IwishList[];
  ngOnInit(): void {
   
  }
  
}
