import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthservicesService } from 'src/app/services/authservices.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {




  userForm:FormGroup
  constructor(private auth: AuthservicesService) {

    this.userForm=new FormGroup({
      email:new FormControl('',[Validators.required,Validators.pattern("[a-z0-9]+@[a-zA-Z]+\.[a-z]{2,3}")]),
      password:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]{8,}$")])
    })
   }

  ngOnInit(): void {
  }

  login()
  {
    
  }

}
