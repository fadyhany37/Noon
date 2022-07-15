import { Component, OnInit } from '@angular/core';
import { NoonProducts } from 'src/app/Interface/noon-products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss'],
})
export class AllproductsComponent implements OnInit {
  ArrayOfProducts: any[] = [];
  constructor(private AllProducts: ProductsService) {}

  ngOnInit(): void {
    this.AllProducts.getproducts().subscribe(
      (data) => (this.ArrayOfProducts = data)
    );
  }
}
