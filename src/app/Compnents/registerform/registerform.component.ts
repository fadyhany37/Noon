import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthservicesService } from 'src/app/services/authservices.service';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {

   userFormGroup:FormGroup
  constructor(private fb: FormBuilder,private router: Router) {
    
    // this.userFormGroup=new FormGroup({
    //   firstname:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]{3,}$")]),
    //   lastname:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]{3,}$")]),
    //   email:new FormControl('',[Validators.required,Validators.pattern("[a-z0-9]+@[a-zA-Z]+\.[a-z]{2,3}")]),
    //   password:new FormControl('',[Validators.required,Validators.pattern("^[a-zA-Z]{8,}$")])
    // })


    this.userFormGroup= this.fb.group({
      firstname:['',[Validators.required,Validators.pattern("^[a-zA-Z]{3,}$")] ],
      lastname:['',[Validators.required,Validators.pattern("^[a-zA-Z]{3,}$")] ],
      email:['', [Validators.required,Validators.pattern("[a-z0-9]+@[a-zA-Z]+\.[a-z]{2,3}")] ],
      password:['', [Validators.required,Validators.pattern("^[a-zA-Z]{8,}$")] ]
    })
   }

   

  ngOnInit(): void {
  }

  

}
