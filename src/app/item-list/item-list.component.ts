import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: FirebaseListObservable<any[]>;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) { }

  ngOnInit() {
    this.afAuth.authState.subscribe((user) => {
      if (user) {
        this.items = this.db.list('/users/' + user.uid + '/items');
      }
    });
  }

  change(item) {
    item.done = !item.done;
    this.items.update(item.$key, item);
  }

  remove(item) {
    this.items.remove(item);
  }

}
