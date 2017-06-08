import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { AddTodoPage } from '../add-todo/add-todo';
import { TodosPage } from '../todos/todos';



@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TodosPage;
  tab2Root = AddTodoPage;
  tab3Root = AboutPage;

  constructor() {

  }
}
