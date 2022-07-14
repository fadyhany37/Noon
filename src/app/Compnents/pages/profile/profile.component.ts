import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  adding: boolean;
  constructor() {
    this.adding = true;
  }

  ngOnInit(): void {}
  addingFunction() {
    this.adding = true;
  }
  showFunction() {
    this.adding = false;
  }
  openRegisterForm() {
    /* open register form to edit user info */
  }
}
