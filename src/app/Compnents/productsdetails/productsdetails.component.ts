import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { NoonProducts } from 'src/app/Interface/noon-products';
import { ICartProduct } from 'src/app/Models/icart-product';
import { Iproduct } from 'src/app/Models/iproduct';
import { CartService } from 'src/app/services/cart.service';
import { ProductsService } from 'src/app/services/products.service';
import { WishListService } from 'src/app/services/wish-list.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-productsdetails',
  templateUrl: './productsdetails.component.html',
  styleUrls: ['./productsdetails.component.scss']
})
export class ProductsdetailsComponent implements OnInit {
 
 //===============hazem changes
  //selected Prodeuct
  selectedProduct!: Iproduct;
  ProductQuantity: number = 1;
  p!: Iproduct;
  LocalStorageProducts: ICartProduct[] = [];

  CartProduct: ICartProduct = {
    quantity: 0,
    product: this.p,
  };

  //============

  constructor(private AllProducts: ProductsService, 
    private router:Router, private ActiveRouter:ActivatedRoute,
    private _router: Router,
    private wishService: WishListService,
    private _cartService: CartService) {}

//   quantity:number=1;
// i=1
// plus(){
//   if(this.i!=5){
//     this.i ++;
//     this.quantity=this.i;
// }

// negative(){
//   if(this.i!=1){
//     this.i--;
//     this.quantity=this.i;
//   } 
// }

newpro: any = {};
   myproduct: any;
   IdRecived: any;







//==================Hazem changes
   
  // DecreaseFromStock(newpro:any) {
  //     newpro.stock --;
  //   }
   //Add Product To LocalStorage/Database
   AddToCart() {
    if (localStorage.getItem("currentUser")) {
      this._cartService.addToCart(this.selectedProduct.id, this.ProductQuantity).subscribe(
        (next) => {},
        (err) => {
          console.log(err);
        },
        () => {
          Swal.fire("Product added to your cart", "Click the button to see you cart", "success").then(() => {
            this._router.navigateByUrl("/egypt-en/cart");
            this.ngOnInit(); 
          });
        }
      );
    } else {
      this.CartProduct.product = this.selectedProduct;
      this.CartProduct.quantity = this.ProductQuantity;

      if (localStorage.getItem("LocalStorageProducts")) {
        this.LocalStorageProducts = JSON.parse(localStorage.getItem("LocalStorageProducts")!);

        if (this.LocalStorageProducts.find((p) => p.product.id == this.CartProduct.product.id)) return;

        this.LocalStorageProducts.push(this.CartProduct);
        localStorage.setItem("LocalStorageProducts", JSON.stringify(this.LocalStorageProducts));
      } else {
        this.LocalStorageProducts.push(this.CartProduct);

        localStorage.setItem("LocalStorageProducts", JSON.stringify(this.LocalStorageProducts));
        localStorage.setItem("LocalStorageProducts", JSON.stringify(this.LocalStorageProducts));
        localStorage.setItem("LocalStorageProducts", JSON.stringify(this.LocalStorageProducts));
      }
    }
  }

  AddToWishList() {
    console.log("add to wishlist");
    if (localStorage.getItem("currentUser")) {
      this.wishService.addToWishList(this.selectedProduct.id).subscribe(
        (next) => {},
        (err) => {
          console.log(err);
        },
        () => {
          Swal.fire("Product added to your Wish List", "Click the button to see you cart", "success").then(() => {
            this._router.navigateByUrl("/egypt-en/cart");
            this.ngOnInit(); 
          });
        }
      );
    }
  }
  //#endregion


   
  //  ArrayOfProducts: any[] = [
    // {
    //   id:'mariam',
    //   brand: 'Cuff Butterfly',
    //   category: 'womens-jewellery',
    //   description:
    //     'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
    //   discountPercentage: 17.75,
    //   images: [
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //   ],
    //   price: 45,
    //   rating: 4.59,
    //   sellerCode: 8,
    //   stock: 9,
    //   thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
    //   title: 'Chain Pin Tassel Earrings',
    // },
    // {
    //   id:'nouran',
    //   brand: 'Cuff Butterfly',
    //   category: 'womens-jewellery',
    //   description:
    //     'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
    //   discountPercentage: 17.75,
    //   images: [
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //   ],
    //   price: 45,
    //   rating: 4.59,
    //   sellerCode: 8,
    //   stock: 9,
    //   thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
    //   title: 'Chain Pin Tassel Earrings',
    // },
    // {
    //   brand: 'Cuff Butterfly',
    //   category: 'womens-jewellery',
    //   description:
    //     'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
    //   discountPercentage: 17.75,
    //   images: [
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //   ],
    //   price: 45,
    //   rating: 4.59,
    //   sellerCode: 8,
    //   stock: 9,
    //   thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
    //   title: 'Chain Pin Tassel Earrings',
    // },
    // {
    //   brand: 'Cuff Butterfly',
    //   category: 'womens-jewellery',
    //   description:
    //     'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
    //   discountPercentage: 17.75,
    //   images: [
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //   ],
    //   price: 45,
    //   rating: 4.59,
    //   sellerCode: 8,
    //   stock: 9,
    //   thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
    //   title: 'Chain Pin Tassel Earrings',
    // },
    // {
    //   brand: 'Cuff Butterfly',
    //   category: 'womens-jewellery',
    //   description:
    //     'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
    //   discountPercentage: 17.75,
    //   images: [
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //   ],
    //   price: 45,
    //   rating: 4.59,
    //   sellerCode: 8,
    //   stock: 9,
    //   thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
    //   title: 'Chain Pin Tassel Earrings',
    // },
    // {
    //   brand: 'Cuff Butterfly',
    //   category: 'womens-jewellery',
    //   description:
    //     'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
    //   discountPercentage: 17.75,
    //   images: [
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //   ],
    //   price: 45,
    //   rating: 4.59,
    //   sellerCode: 8,
    //   stock: 9,
    //   thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
    //   title: 'Chain Pin Tassel Earrings',
    // },
    // {
    //   brand: 'Cuff Butterfly',
    //   category: 'womens-jewellery',
    //   description:
    //     'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
    //   discountPercentage: 17.75,
    //   images: [
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //   ],
    //   price: 45,
    //   rating: 4.59,
    //   sellerCode: 8,
    //   stock: 9,
    //   thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
    //   title: 'Chain Pin Tassel Earrings',
    // },
    // {
    //   brand: 'Cuff Butterfly',
    //   category: 'womens-jewellery',
    //   description:
    //     'Pair Of Ear Cuff Butterfly Long Chain Pin Tassel Earrings - Silver ( Long Life Quality Product)',
    //   discountPercentage: 17.75,
    //   images: [
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //     'https://dummyjson.com/image/i/products/80/3.png',
    //   ],
    //   price: 45,
    //   rating: 4.59,
    //   sellerCode: 8,
    //   stock: 9,
    //   thumbnail: 'https://dummyjson.com/image/i/products/80/thumbnail.jpg',
    //   title: 'Chain Pin Tassel Earrings',
    // },
  // ];
  

  ngOnInit(): void {
    // this.AllProducts.getproducts().subscribe((ArrayOfProducts) => {
    //     let prods: any = [];
    //     for(let pro of ArrayOfProducts){
    //       prods.push({id:pro.payload.doc.id,...pro.payload.doc.data()as object});
    //     }
  
    //     this.ArrayOfProducts = prods;
    //   }
    //   );

 



  this.ActiveRouter.paramMap.subscribe(paramMap => {
    this.IdRecived = paramMap.get('productid');
    if (this.IdRecived)
    this.myproduct= 
    this.AllProducts.getProductById(this.IdRecived).subscribe((pro) => {
      this.newpro = { id: pro.payload.id, ...pro.payload.data() as object };
    })

    console.log(this.newpro);
    console.log(this.IdRecived);



  })





  }

}
