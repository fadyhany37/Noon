import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  products: any[] = [];

  constructor(private _ProductsService: ProductsService) {}

  ngOnInit(): void {
    /* this._ProductsService.getproducts().subscribe((res) => {
      for (let i = 0; i < res.length; i++) {
        this.products[i] = res[i].payload.doc.data();
      }
    }); */
  }
}
