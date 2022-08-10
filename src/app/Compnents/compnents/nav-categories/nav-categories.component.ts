import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-categories',
  templateUrl: './nav-categories.component.html',
  styleUrls: ['./nav-categories.component.scss'],
})
export class NavCategoriesComponent implements OnInit {
  Categorey: string = '';
  isSeller: boolean;
  type: any;
  cats: string[] = [];
  brands: string[] = [];
  show: boolean = true;
  menu: boolean = true;
  brandsImg: string[] = [
    'https://z.nooncdn.com/cms/pages/20210408/9852ea7d5c33973a1761053b129a047b/drop-brand-06.png',
    'https://z.nooncdn.com/cms/pages/20210408/9852ea7d5c33973a1761053b129a047b/drop-brand-06.png',
    'https://z.nooncdn.com/cms/pages/20210408/9852ea7d5c33973a1761053b129a047b/drop-brand-06.png',
    'https://z.nooncdn.com/cms/pages/20210408/9852ea7d5c33973a1761053b129a047b/drop-brand-06.png',
    'https://z.nooncdn.com/cms/pages/20210408/9852ea7d5c33973a1761053b129a047b/drop-brand-06.png',
    'https://z.nooncdn.com/cms/pages/20210408/9852ea7d5c33973a1761053b129a047b/drop-brand-06.png',
    'https://z.nooncdn.com/cms/pages/20210408/9852ea7d5c33973a1761053b129a047b/drop-brand-06.png',
    'https://z.nooncdn.com/cms/pages/20210408/9852ea7d5c33973a1761053b129a047b/drop-brand-06.png',
    'https://z.nooncdn.com/cms/pages/20210408/9852ea7d5c33973a1761053b129a047b/drop-brand-06.png',
  ];

  ElectronicsCat: string[] = [
    'TVs',
    ' Satellites & Accessories',
    'Laptops & Accessories',
    ' Audio & Home Entertainment',
    ' Video Games',
    'Cameras & Accessories',
    'Printers & Accessories',
    'Networking Products',
    ' Data Storage',
    ' Computer Components',
    'Computer Accessories',
  ];
  ElectronicsBrand: string[] = [
    'Samsung',
    'LG',
    'Sony',
    'Lenovo',
    'Dell',
    'HP',
    'Apple',
    'Canon',
    'Cager',
  ];

  constructor() {
    this.type = localStorage.getItem('sellerCode')?.toString() || 0;
    console.log(this.type);
    if (this.type > 0) {
      this.isSeller = true;
    } else {
      this.isSeller = false;
    }
  }

  ngOnInit(): void {
    console.log(window.innerWidth);
  }

  showfun(): void {
    this.show = false;
  }

  hidefun(): void {
    this.show = true;
  }

  changeCat(e: any): void {
    switch (e.target.innerText) {
      case 'Electronics': {
        this.cats = this.ElectronicsCat;
        this.brands = this.ElectronicsBrand;
        this.Categorey = e.target.innerText;
        break;
      }
      default: {
        this.cats = this.ElectronicsCat;
        this.brands = this.ElectronicsBrand;
        this.Categorey = e.target.innerText;
        break;
      }
    }
  }

  showmenu(e: any): void {
    this.menu = false;
    switch (e.target.innerText) {
      case 'ELECTRONICS': {
        this.cats = this.ElectronicsCat;
        this.brands = this.ElectronicsBrand;
        this.Categorey = e.target.innerText;
        break;
      }
      default: {
        // this.cats = this.ElectronicsCat;
        // this.brands = this.ElectronicsBrand;
        // this.Categorey = e.target.innerText;
        // break;
      }
    }
  }

  hidemenu(): void {
    this.menu = true;
  }
}
