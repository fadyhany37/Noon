import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/Compnents/pages/profile/Models/iproduct';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit  {
  adding: boolean;
  IdRecived: any;
  update: boolean = false;
  product: any = {};

  sellerProducts: any[]=[]
  sellerCode: number = 4;

  user: any = {
    name: 'Alaa Ezzat',
    email: 'alaa@gmail.com',
    image: '../../../../assets/avatar.jpg',
    sellerCode: 4,
  };
  constructor(private _ProductsService: ProductsService, private fireStore: FirebaseService, private activatedRoute: ActivatedRoute,private router: Router) {

    this.adding = true;


  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(paramMap=>{
      this.IdRecived=paramMap.get('pId');
      if (this.IdRecived)
        this.fireStore.getProductById(this.IdRecived).subscribe((p) => {
          this.product = {id: p.payload.id,...p.payload.data() as object };
          this.update = true;
          console.log(this.product)


        })


        } )


  }
  ngAfterContentChecked(): void {

    this.sellerProducts = this._ProductsService.getProductsBySellerCode(this.sellerCode)


  }



  addingFunction() {
    this.adding = true;
    this.router.navigate(['/Profile'])
  }
  showFunction() {
    this.adding = false;



  }
  openRegisterForm() {
    /* open register form to edit user info */
  }

}
