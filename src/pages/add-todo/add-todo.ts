import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Storage } from '@ionic/storage';

/**
 * Generated class for the AddTodoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-add-todo',
  templateUrl: 'add-todo.html',
})
export class AddTodoPage {
  todos: any;
  todo: any;

  constructor(public storage: Storage, public navCtrl: NavController, public navParams: NavParams) {
    this.todo = {
      id: '',
      text: '',
      body: '',
      due: ''
    };
  }

  ionViewDidLoad() {
   this.storage.ready().then(() => {
     this.storage.get('todos').then((val) => {
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

  onAddSubmit() {
    
  }


}
