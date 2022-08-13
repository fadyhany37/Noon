import { Injectable } from '@angular/core';
import { Iuser } from 'src/app/Models/iuser';
import { AuthservicesService } from './authservices.service';
// import { AuthservicesService } from 'src/app/services/authservices.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any[] = [];
  user: any = {};
  constructor( private auth: AuthservicesService) {
    this.auth.getUsers().subscribe((users:any) => {
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
