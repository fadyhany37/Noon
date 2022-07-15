import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { ProductsService } from 'src/app/services/products.service';
=======
>>>>>>> 5c61382eb684c82c44eeb38198d2a23a2ae9b2ac

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {

<<<<<<< HEAD
  ArrayOfProducts: any[] = [];
  constructor(private AllProducts: ProductsService) {}

  ngOnInit(): void {
    this.AllProducts.getproducts().subscribe(
      (data) => (this.ArrayOfProducts = data)
    );
=======
  constructor() { }

  ngOnInit(): void {
>>>>>>> 5c61382eb684c82c44eeb38198d2a23a2ae9b2ac
  }

}
