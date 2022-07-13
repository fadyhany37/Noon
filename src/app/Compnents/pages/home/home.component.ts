import { Component, OnInit } from '@angular/core';
import { async } from 'rxjs';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {


  bestSeller: any[] = []
  allProducts:any[]=[]



  constructor(private fireStore: FirebaseService,private _ProductsService:ProductsService) {


  }


  ngOnInit(): void {

    this.fireStore.getproducts().subscribe((products) => {
      let prods: any = [];
      for (let prod of products) {
        prods.push({ id:prod.payload.doc.id,...prod.payload.doc.data()as object })
      }
      this.bestSeller = prods.filter((p: any) => p.rating > 4.5);
      this.allProducts = prods;

    });



  }

  //// for testing getProductById() and getProductsByCategorey()
  click() {

    this.fireStore.getProductById("07z4bs4gcultnpuzffz0").subscribe((res) => {
     console.log( { id: res.payload.id, ...res.payload.data() as object })
    })

    console.log( this._ProductsService.getProductsByCategorey("smartphones"));


    }

   }



