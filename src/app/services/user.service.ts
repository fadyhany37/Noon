import { Injectable } from '@angular/core';
import { IUser } from 'src/app/Models/iuser';
import { FirebaseService } from './firebase.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users: any[] = [];
  user: any = {};
  constructor(private fireStore: FirebaseService) {
    this.fireStore.getUsers().subscribe((users) => {
      let myusers: any = [];
      for (let user of users) {
        myusers.push({
          id: user.payload.doc.id,
          ...(user.payload.doc.data() as object),
        });
      }
      this.users = myusers;
    });
  }
}
