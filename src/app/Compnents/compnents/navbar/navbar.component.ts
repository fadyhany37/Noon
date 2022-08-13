import { Component, OnInit } from '@angular/core';
import { stringLength } from '@firebase/util';
import { AuthservicesService } from 'src/app/services/authservices.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  isOpen: boolean = false
  isUser: boolean = false

  constructor(private as: AuthservicesService) { }

  ngOnInit(): void {
    // this.as.user.subscribe( (user: any) =>{

    //   if(user)
    //   {
    //     this.isUser=true
    //   }

    // })

    // if (this.as.user()) this.isUser = true;
    // else this.isUser = false;
  }

  // toggleNavbar() {
  //   this.isOpen = !this.isOpen
  // }

  // logout() {
  //    this.as.logout()
  //   this.isOpen = false;
  // }
}




