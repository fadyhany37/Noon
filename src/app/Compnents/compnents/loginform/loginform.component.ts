import { Iuser } from 'src/app/Models/iuser';
import { UserService } from './../../../services/user.service';
import { AuthservicesService } from 'src/app/services/authservices.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.scss']
})
export class LoginformComponent implements OnInit {
  insertedUser: Iuser = {} as Iuser;
  userForm: FormGroup;
  showPassword: string = 'password';
  eye: string = 'bi bi-eye-slash-fill';
  myUsers: any = [];
  constructor(private userService: UserService, private fb: FormBuilder, private auth: AuthservicesService, private router: Router) {
    this.auth.getUsers().subscribe((users) => {
      for (let user of users) {
        this.myUsers.push({
          id: user.payload.doc.id,
          ...(user.payload.doc.data() as object),
        });
      }
    });

    this.userForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.pattern("[a-zA-Z0-9+_.-]+@gmail.com")]),
      password: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]{8,}$")])
    });
  }

  login() {
    this.insertedUser = this.userForm.value;
    const userExisit = this.myUsers.some((user: any) => user.email === this.insertedUser.email);

    if (userExisit)
     {
      var foundeduser = this.myUsers.find(
        (user: any) => user.email === this.insertedUser.email
      );
      

            if (foundeduser.password === this.insertedUser.password)
              {
                    if (foundeduser.userType == 'seller')
                    {
                      localStorage.setItem('sellerCode', foundeduser.sellerCode.toString());
                      localStorage.setItem('email', foundeduser.email);
                      this.router.navigate(['/Home']);
                    } 
                    else
                    {
                      localStorage.setItem('email', foundeduser.email);
                      this.router.navigate(['/Home']);
                    }
              }
      
            else
            {
              alert(' wrong email or password ');
            }
    }

     else
    {
      alert("This email dosn't exist");
      this.router.navigate(['/register']);
    }

  }
  
  ngOnInit(): void { }

  toggle() {
    if (this.showPassword == 'text') {
      this.showPassword = 'password';
      this.eye = 'bi bi-eye-slash-fill';
    } else {
      this.showPassword = 'text';
      this.eye = 'bi bi-eye-fill';
    }
  }
}