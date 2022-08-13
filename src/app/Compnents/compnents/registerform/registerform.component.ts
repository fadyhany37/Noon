import { Iuser } from 'src/app/Models/iuser';
import { UserService } from './../../../services/user.service';
import { AuthservicesService } from 'src/app/services/authservices.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registerform',
  templateUrl: './registerform.component.html',
  styleUrls: ['./registerform.component.scss']
})
export class RegisterformComponent implements OnInit {
  insertedUser: Iuser = {} as Iuser;
  newSellerCode: number = 0;
  userFormGroup: FormGroup;
  showPassword: string = 'password';
  eye: string = 'bi bi-eye-slash-fill';
  myUsers: any = [];

  constructor(
    private fb: FormBuilder, private router: Router, private auth: AuthservicesService, private userService: UserService)
     {
    this.auth.getUsers().subscribe((users) => {
      for (let user of users) {
        this.myUsers.push({
          id: user.payload.doc.id,
          ...(user.payload.doc.data() as object),
        });
      }
    });

    this.userFormGroup = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(8)]],
      mobile: ['', [Validators.required]],
      address: ['', [Validators.required]],
      image: ['', [Validators.required, Validators.pattern("/^https?:\/\/(?:www\.)?[-a-zA-Z0-9@:%._\+~#=]{10,256}/")]], //https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile-thumbnail.png
      email: ['', [Validators.required, Validators.pattern("[a-zA-Z0-9+_.-]+@gmail.com")]],
      password: ['', [Validators.required, Validators.pattern("^[a-zA-Z]{8,}$")]],
      repassword: ['', [Validators.required]],
      type: ['']
    });

  }


  registration() {
    this.insertedUser = this.userFormGroup.value;
    const userExisit = this.myUsers.some((user: any) => user.email === this.insertedUser.email);

    if (userExisit) {
      alert('This user existed , please register with other email');
      this.router.navigate(['/register']);
    }

    else {
      for (let i = 1; i < 100; i++) {
        if (!this.myUsers.some((user: any) => user.sellerCode === i)) {
          this.newSellerCode = i;
          break;
        }
      }

      this.insertedUser = { ...this.insertedUser, sellerCode: this.newSellerCode };
      this.auth.addUser(this.insertedUser);

      if (this.insertedUser.userType == 'seller') {
        localStorage.setItem('sellerCode', this.newSellerCode.toString());
        localStorage.setItem('email', this.insertedUser.email);
        this.router.navigate(['/Home']);
      }
      else {
        localStorage.setItem('email', this.insertedUser.email);
        this.router.navigate(['/Home']);
      }
    }
  }


  toggle() {
    if (this.showPassword == 'text') {
      this.showPassword = 'password';
      this.eye = 'bi bi-eye-slash-fill';
    } else {
      this.showPassword = 'text';
      this.eye = 'bi bi-eye-fill';
    }
  }

  ngOnInit(): void { }

}