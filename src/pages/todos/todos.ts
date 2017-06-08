import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';


@IonicPage()
@Component({
  selector: 'page-todos',
  templateUrl: 'todos.html',
})
export class TodosPage {
  todos: any;

  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.storage.ready().then(() => {
     this.storage.get('todos').then((val) => {
       console.log(val);
       if (val) {
        this.todos = JSON.parse(val);
       } else {
         this.todos = [];
       }
     }).catch((err => {
       console.log(err);
     }))
   });
  }

}
