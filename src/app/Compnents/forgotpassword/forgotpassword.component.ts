import { Component, OnInit } from '@angular/core';
import { AuthservicesService } from 'src/app/services/authservices.service';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.scss']
})
export class ForgotpasswordComponent implements OnInit {

  email: string = ""
  constructor(private auth: AuthservicesService) { }

  ngOnInit(): void {
  }

  forgotpass() {

    console.log(this.email);
  }

}
