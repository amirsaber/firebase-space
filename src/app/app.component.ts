import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  user: Observable<firebase.User>;
  logedIn: boolean;

  constructor(private afAuth: AngularFireAuth) { }

  ngOnInit() {
    this.logedIn = false;
    this.user = this.afAuth.authState;
    this.user.subscribe((user) => {
      if (user) {
        this.logedIn = true;
      } else {
        this.logedIn = false;
      }
    });
  }

  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  logout() {
    this.afAuth.auth.signOut();
  }
}
