import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavbarComponent implements OnInit {

  currentLang: string = ""

  constructor(public translate: TranslateService,private router: Router,private cartService:CartService){
    this.currentLang = localStorage.getItem('currentLang') || 'en'
    this.translate.use(this.currentLang)
  }
  public totalItem:number=0;
 

  ngOnInit(): void {
    this.cartService.getProduct()
    .subscribe(res=>{
      this.totalItem=res.length;
    })
  }
  onchange(e: any) {

    this.router.navigate(['/products', e.target.value ]);
    console.log(e.target.value);

  }
  changeCurrentLang(e: any) {

    let lang = e.target.innerText;
    e.target.innerText = (lang == "ar") ? 'en' : 'ar';
    this.translate.use((lang=="ar")?'ar':'en');
    localStorage.setItem("currentLang",(lang=="ar")?'ar':'en');

}

}
