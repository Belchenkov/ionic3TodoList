import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodoDetailsPage } from './todo-details';

@NgModule({
  declarations: [
    TodoDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TodoDetailsPage),
  ],
  exports: [
    TodoDetailsPage
  ]
})
export class TodoDetailsPageModule {}
