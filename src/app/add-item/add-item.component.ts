import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  items: FirebaseListObservable<any>;
  text: string;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.items = this.db.list('/users/' + user.uid + '/items');
      }
    });
  }

  save() {
    if (this.text) {
      const item = {
        name: this.text,
        done: false
      };
      this.items.push(item);
      this.text = '';
    }
  }

}
