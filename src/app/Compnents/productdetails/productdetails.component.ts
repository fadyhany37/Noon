import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

  ArrayOfProducts: any[] = [];
  constructor(private AllProducts: ProductsService) {}

  ngOnInit(): void {
    this.AllProducts.getproducts().subscribe(
      (data) => (this.ArrayOfProducts = data)
    );
  }

}
