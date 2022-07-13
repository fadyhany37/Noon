import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import SwiperCore, { SwiperOptions } from 'swiper';
import  { Navigation, Pagination, Scrollbar } from 'swiper';

SwiperCore.use([Navigation, Pagination, Scrollbar]);




@Component({
  selector: 'app-products-swiper',
  templateUrl: './products-swiper.component.html',
  styleUrls: ['./products-swiper.component.scss']
})
export class ProductsSwiperComponent implements OnInit ,OnChanges {


  @Input() products: any[] = [];

  constructor(private fireStore: FirebaseService) { }

  ngOnInit(): void {


  }
  ngOnChanges(): void {
 console.log("changed")




  }

}
