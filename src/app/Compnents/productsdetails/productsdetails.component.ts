import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NoonProducts } from 'src/app/Interface/noon-products';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrls: ['./productsdetails.component.scss']
})
export class ProductsdetailsComponent implements OnInit {
 
 

  constructor(private AllProducts: ProductsService, private router:Router, private ActiveRouter:ActivatedRoute) {}

 


  DecreaseFromStock(ArrayOfProducts:any) {
      ArrayOfProducts.stock --;
    }

   newpro: any = {};
   myproduct: any;
   IdRecived: any;
   ArrayOfProducts: any[] = [
    {
      id:'mariam',
      brand: 'Cuff Butterfly',
      category: 'womens-jewellery',
      description:
        'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
      discountPercentage: 17.75,
      images: [
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/2.png',
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/1.png',
      ],
      price: 45,
      rating: 4.59,
      sellerCode: 8,
      stock: 9,
      thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
      title: 'Chain Pin Tassel Earrings',
    },
    {
      id:'nouran',
      brand: 'Cuff Butterfly',
      category: 'womens-jewellery',
      description:
        'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
      discountPercentage: 17.75,
      images: [
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
      ],
      price: 45,
      rating: 4.59,
      sellerCode: 8,
      stock: 9,
      thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
      title: 'Chain Pin Tassel Earrings',
    },
    {
      brand: 'Cuff Butterfly',
      category: 'womens-jewellery',
      description:
        'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
      discountPercentage: 17.75,
      images: [
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
      ],
      price: 45,
      rating: 4.59,
      sellerCode: 8,
      stock: 9,
      thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
      title: 'Chain Pin Tassel Earrings',
    },
    {
      brand: 'Cuff Butterfly',
      category: 'womens-jewellery',
      description:
        'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
      discountPercentage: 17.75,
      images: [
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
      ],
      price: 45,
      rating: 4.59,
      sellerCode: 8,
      stock: 9,
      thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
      title: 'Chain Pin Tassel Earrings',
    },
    {
      brand: 'Cuff Butterfly',
      category: 'womens-jewellery',
      description:
        'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
      discountPercentage: 17.75,
      images: [
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
      ],
      price: 45,
      rating: 4.59,
      sellerCode: 8,
      stock: 9,
      thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
      title: 'Chain Pin Tassel Earrings',
    },
    {
      brand: 'Cuff Butterfly',
      category: 'womens-jewellery',
      description:
        'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
      discountPercentage: 17.75,
      images: [
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
      ],
      price: 45,
      rating: 4.59,
      sellerCode: 8,
      stock: 9,
      thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
      title: 'Chain Pin Tassel Earrings',
    },
    {
      brand: 'Cuff Butterfly',
      category: 'womens-jewellery',
      description:
        'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
      discountPercentage: 17.75,
      images: [
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
      ],
      price: 45,
      rating: 4.59,
      sellerCode: 8,
      stock: 9,
      thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
      title: 'Chain Pin Tassel Earrings',
    },
    {
      brand: 'Cuff Butterfly',
      category: 'womens-jewellery',
      description:
        'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
      discountPercentage: 17.75,
      images: [
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
        'https://dummyjson.com/image/i/products/80/3.png',
      ],
      price: 45,
      rating: 4.59,
      sellerCode: 8,
      stock: 9,
      thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
      title: 'Chain Pin Tassel Earrings',
    },
  ];
  

  ngOnInit(): void {
    this.AllProducts.getproducts().subscribe((ArrayOfProducts) => {
        let prods: any = [];
        for(let pro of ArrayOfProducts){
          prods.push({id:pro.payload.doc.id,...pro.payload.doc.data()as object});
        }
  
        this.ArrayOfProducts = prods;
      }
      );

 



  this.ActiveRouter.paramMap.subscribe(paramMap => {
    this.IdRecived = paramMap.get('productId');
    if (this.IdRecived)
    this.myproduct= this.AllProducts.getProductById(this.IdRecived).subscribe((pro) => {
      this.newpro = { id: pro.payload.id, ...pro.payload.data() as object };
    })
    console.log(this.newpro);



  })





  }

}
