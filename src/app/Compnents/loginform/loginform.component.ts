import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthservicesService } from 'src/app/services/authservices.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {

  @Input() user!: any;
  userForm: FormGroup;
  users:any = []

  constructor(private auth: AuthservicesService, private router: Router) {
    this.userForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern("[a-z0-9]+@[a-zA-Z]+\.[a-z]{2,3}")]),
      password: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]{8,}$")])
    })

    this.users = auth.getUsers();
  }

  login() {
    console.log("hi from login");

    this.user = this.userForm.value;
    // this.auth.addLogin(this.user)
    // this.resetForm();

   var flag = false;

   for (const user of this.users[0]) {
    
     if (user.email == this.user.email && user.password == this.user.password) {
       flag = true;
     }
   }

    if (flag) {
      this.router.navigate(['/dashboard'])
    }
    else {
      alert(`This user dosn't exist , please register first`);
      this.router.navigate(['/register'])
    }
  }

  resetForm() {
    this.userForm.reset()
  }

  ngOnInit(): void {
  }
}
