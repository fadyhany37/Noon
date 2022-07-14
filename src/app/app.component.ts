import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'noon';
  isSignedIn=false

  constructor(private fireauth: AngularFireAuth, private router: Router ){ }
  ngOnInit(): void {
   
  }
}
