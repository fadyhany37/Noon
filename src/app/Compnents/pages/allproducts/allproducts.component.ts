import { Component, OnInit } from '@angular/core';
import { NoonProducts } from 'src/app/Models/noon-products';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-allproducts',
  templateUrl: './allproducts.component.html',
  styleUrls: ['./allproducts.component.scss'],



})
export class AllproductsComponent implements OnInit {
  constructor(private AllProducts: ProductsService, private router: Router,private fireStore: FirebaseService) {}
// term:BehaviorSubject<any> = new BehaviorSubject('')
termSec:string = ''
  ShowProductDetails(productid: any): void {
    this.router.navigate(['productsdetails', productid]);
  }

    ArrayOfProducts: any[] = []
  //     {
  //       id:'mariam',
  //     brand:'Cuff Butterfly',
  //     category:'womens-jewellery',
  // description:'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
  // discountPercentage:17.75,
  // price:45,
  // rating:4.59,
  // sellerCode:8,
  // stock: 9,
  // thumbnail:'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
  // title:'Chain Pin Tassel Earrings'},
  // {
  //   id:'nouran',
  //   brand:'Cuff Butterfly',
  //   category:'womens-jewellery',
  // description:'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
  // discountPercentage:17.75,
  // price:45,
  // rating:4.59,
  // sellerCode:8,
  // stock: 9,
  // thumbnail:'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
  // title:'Chain Pin Tassel Earrings'},{
  //   brand:'Cuff Butterfly',
  //   category:'womens-jewellery',
  // description:'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
  // discountPercentage:17.75,
  // price:45,
  // rating:4.59,
  // sellerCode:8,
  // stock: 9,
  // thumbnail:'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
  // title:'Chain Pin Tassel Earrings'},{
  //   brand:'Cuff Butterfly',
  //   category:'womens-jewellery',
  // description:'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
  // discountPercentage:17.75,
  // price:45,
  // rating:4.59,
  // sellerCode:8,
  // stock: 9,
  // thumbnail:'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
  // title:'Chain Pin Tassel Earrings'},{
  //   brand:'Cuff Butterfly',
  //   category:'womens-jewellery',
  // description:'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
  // discountPercentage:17.75,
  // price:45,
  // rating:4.59,
  // sellerCode:8,
  // stock: 9,
  // thumbnail:'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
  // title:'Chain Pin Tassel Earrings'},{
  //   brand:'Cuff Butterfly',
  //   category:'womens-jewellery',
  // description:'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
  // discountPercentage:17.75,
  // price:45,
  // rating:4.59,
  // sellerCode:8,
  // stock: 9,
  // thumbnail:'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
  // title:'Chain Pin Tassel Earrings'},
  // {
  //   brand:'Cuff Butterfly',
  //   category:'womens-jewellery',
  // description:'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
  // discountPercentage:17.75,
  // price:45,
  // rating:4.59,
  // sellerCode:8,
  // stock: 9,
  // thumbnail:'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
  // title:'Chain Pin Tassel Earrings'}
  // ];


  getValue(e:any) {
    this.termSec = e.target.getAttribute('data-name'); ;
    // console.log(this.term.getValue());

  }

  ngOnInit(): void {
//     this.term.subscribe({
//       next:()=> {
// this.termSec = this.term.getValue()
//       }
//     })




    this.fireStore.getproducts().subscribe((ArrayOfProducts) => {
      let prods: any = [];
      for (let pro of ArrayOfProducts) {
        prods.push({
          id: pro.payload.doc.id,
          ...(pro.payload.doc.data() as object),

        });
      }

      this.ArrayOfProducts = prods;
    });
  }
}
