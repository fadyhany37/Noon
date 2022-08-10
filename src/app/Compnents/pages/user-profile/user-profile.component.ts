import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
})
export class UserProfileComponent implements OnInit {
  user: any = {};

  uId: any;
  constructor(private fireStore: FirebaseService, private router: Router) {
    this.uId = localStorage.getItem('userId');
    this.fireStore.getUsers().subscribe((users) => {
      let myusers: any = [];
      for (let user of users) {
        myusers.push({
          id: user.payload.doc.id,
          ...(user.payload.doc.data() as object),
        });
      }
      this.user = myusers.find((u: any) => u.id == this.uId);
    });
  }

  ngOnInit(): void {}
  openUpdateForm() {
    this.router.navigate(['/updateUser']);
  }
}
